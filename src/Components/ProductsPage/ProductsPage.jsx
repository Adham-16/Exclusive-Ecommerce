import { useState, useEffect } from 'react';
import { addToWishlist } from '../Wishlist/addToWishlist';
import { Toaster } from 'react-hot-toast';
import { HeartIcon } from '@heroicons/react/24/outline';
import { addToCart } from '../Cart/AddtoCart';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ProductsPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [categoryName, setCategoryName] = useState('All Products');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const productsPerPage = 20;
    const { categorySlug } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                let apiUrl = 'https://dummyjson.com/products?limit=100';
                if (categorySlug) {
                    apiUrl = `https://dummyjson.com/products/category/${categorySlug}`;
                }

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                const productsData = categorySlug ? (data.products || []) : (data.products || []);

                if (categorySlug && productsData.length === 0) {
                    throw new Error('No products found in this category');
                }

                setProducts(productsData);
                setTotalPages(Math.ceil(productsData.length / productsPerPage));
                setCurrentPage(1);

                // Set category name
                if (categorySlug) {
                    const readableName = categorySlug.replace(/-/g, ' ')
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    setCategoryName(readableName);
                } else {
                    setCategoryName('All Products');
                }

            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
                navigate('/products', { replace: true });
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categorySlug, navigate]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DB4444]"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center py-12">
                    <p className="text-lg text-red-500 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-[#DB4444] text-white px-4 py-2 rounded hover:bg-[#b33c3c]"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>

            {products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-lg text-gray-600">No products found.</p>
                    <Link
                        to="/products"
                        className="mt-4 inline-block bg-[#DB4444] text-white px-6 py-2 rounded hover:bg-[#b33c3c] transition-colors"
                    >
                        Browse All Products
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                                <div className="h-48 bg-gray-100 flex items-center justify-center p-4 relative">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                    <button
                                        onClick={() => addToWishlist(product.id)}
                                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                                        aria-label="Add to wishlist"
                                    >
                                        <HeartIcon className="h-5 w-5 text-gray-600 hover:text-[#DB4444]" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#DB4444] font-bold">${product.price}</span>
                                        {product.discountPercentage && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={`star-${product.id}-${i}`}
                                                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="block text-center w-full bg-[#DB4444] text-white py-2 rounded hover:bg-[#b33c3c] transition-colors"
                                        >
                                            View Details
                                        </Link>
                                        <button
                                            onClick={() => addToCart(product.id, 1)}
                                            className="block w-full bg-[#DB4444] text-white py-2 rounded hover:bg-[#b33c3c] transition-colors"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav className="flex items-center gap-1">
                                <button
                                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded border disabled:opacity-50 hover:bg-gray-100 transition-colors"
                                >
                                    Prev
                                </button>

                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNumber;
                                    if (totalPages <= 5) {
                                        pageNumber = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNumber = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNumber = totalPages - 4 + i;
                                    } else {
                                        pageNumber = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => paginate(pageNumber)}
                                            className={`px-3 py-1 rounded border ${currentPage === pageNumber ? 'bg-[#DB4444] text-white border-[#DB4444]' : 'hover:bg-gray-100'}`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 rounded border disabled:opacity-50 hover:bg-gray-100 transition-colors"
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    )}
                </>
            )}
            <Toaster />
        </div>
    );
}