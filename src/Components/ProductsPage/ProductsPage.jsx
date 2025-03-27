import { useState, useEffect } from 'react';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 20; // 5 صفوف × 4 أعمدة

    // جلب المنتجات
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=100');
                const data = await response.json();

                setProducts(data.products || []);
                setTotalPages(Math.ceil((data.products?.length || 0) / productsPerPage));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // حساب المنتجات للصفحة الحالية
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // تغيير الصفحة
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // عرض تفاصيل المنتج
    const showProductDetails = (productId) => {
        alert(`View product details No ${productId}`);
    };

    return (
        <div className="container mx-auto px-20 py-8">
            <h1 className="text-3xl font-bold mb-8">All Products</h1>

            {/* عرض المنتجات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="max-h-full max-w-full object-contain"
                            />
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
                            <button
                                onClick={() => showProductDetails(product.id)}
                                className="block mt-4 w-full bg-[#DB4444] text-white py-2 rounded hover:bg-[#b33c3c] transition-colors"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* الترقيم الصفحي */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <nav className="flex items-center gap-1">
                        <button
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded border disabled:opacity-50"
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
                                    className={`px-3 py-1 rounded border ${currentPage === pageNumber ? 'bg-[#DB4444] text-white border-[#DB4444]' : ''}`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded border disabled:opacity-50"
                        >
                            Next
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
}