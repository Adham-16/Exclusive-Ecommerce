import { useEffect, useState } from 'react';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import JustForYou from './JustForYou';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlistItems(JSON.parse(storedWishlist));
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (wishlistItems.length > 0) {
            setLoading(true);

            const fetchPromises = wishlistItems.map(id =>
                fetch(`https://dummyjson.com/products/${id}`)
                    .then(res => {
                        if (!res.ok) throw new Error('Product not found');
                        return res.json();
                    })
                    .catch(error => {
                        console.error(`Error fetching product ${id}:`, error);
                        return null;
                    })
            );
            Promise.all(fetchPromises)
                .then(results => {
                    const successfulProducts = results.filter(product => product !== null);
                    setProducts(successfulProducts);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching wishlist products:', error);
                    setLoading(false);
                });
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [wishlistItems]);


    const moveAllToBag = () => {

        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

        const updatedCart = [...currentCart];


        products.forEach(product => {

            const existingItem = updatedCart.find(item => item.id === product.id);

            if (existingItem) {

                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                updatedCart.push({
                    ...product,
                    quantity: 1
                });
            }
        });

        localStorage.setItem('cart', JSON.stringify(updatedCart));

        localStorage.removeItem('wishlist');
        setWishlistItems([]);
        setProducts([]);

        toast.success('Added to the Cart Successfully!', {
            duration: 2000
        });
    };

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlistItems.filter(id => id !== productId);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setProducts(products.filter(product => product.id !== productId));
    };


    const addToCart = (product) => {
        // هنا يمكنك إضافة منطق لإضافة المنتج إلى سلة التسوق
        alert(`تمت إضافة ${product.title} إلى سلة التسوق`);
    };

    return (
        <div className="container mx-auto md:px-20 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h1>
                {wishlistItems.length > 0 && (
                    <button
                        onClick={moveAllToBag}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                        Move All To Bag
                    </button>
                )}
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span class="loader"></span>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-2">Wishlist is empty</h2>
                    <p className="text-gray-600">You haven't added any products to your wishlist yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <div className="group relative">
                                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center relative">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain cursor-pointer"
                                    />
                                    <button
                                        onClick={() => removeFromWishlist(product.id)}
                                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                                    >
                                        <TrashIcon className="h-5 w-5 text-[#DB4444]" />
                                    </button>
                                    <Link to={`/products/${product.id}`} className="absolute top-14 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <EyeIcon className="h-5 w-5 text-gray-600 hover:text-[#DB4444]" />
                                    </Link>
                                    <button
                                        onClick={() => addToCart(product.id, 1)}
                                        className="absolute bottom-0 left-0 right-0 bg-[#000] text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <div className="flex items-center mt-1">
                                        <p className="text-[#DB4444] font-bold mr-2">${product.price}</p>
                                        {product.discountPercentage && (
                                            <p className="text-gray-500 text-sm line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <JustForYou></JustForYou>
            <Toaster></Toaster>
        </div>
    );
};

export default WishlistPage;