import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'




const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [couponCode, setCouponCode] = useState('');

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cart = JSON.parse(savedCart);
            setCartItems(cart);
            fetchCartProducts(cart);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchCartProducts = async (cart) => {
        setLoading(true);
        try {
            const fetchPromises = cart.map(item =>
                fetch(`https://dummyjson.com/products/${item.id}`)
                    .then(res => res.json())
                    .then(product => ({ ...product, quantity: item.quantity }))
            );

            const products = await Promise.all(fetchPromises);
            setProducts(products);
        } catch (error) {
            console.error('Error fetching cart products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Update product quantity
    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ).filter(item => item.quantity > 0);

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        fetchCartProducts(updatedCart);
    };

    // Calculate subtotal
    const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

    // Process checkout
    const processCheckout = () => {
        alert('Order placed successfully!');
        setCartItems([]);
        setProducts([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className="container mx-auto px-4 md:px-20 py-8">

            {/* Cart table header */}
            <div className="hidden md:grid grid-cols-12 gap-4 border-b pb-2 mb-4 shadow-sm p-4 ps-10">
                <div className="col-span-5 font-semibold">Product</div>
                <div className="col-span-2 font-semibold text-center">Price</div>
                <div className="col-span-2 font-semibold text-center">Quantity</div>
                <div className="col-span-2 font-semibold text-center">Subtotal</div>
                <div className="col-span-1"></div>
            </div>

            {/* Cart items */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span class="loader"></span>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                    <Link to="/home" className="border border-black text-black px-6 py-2 rounded inline-block">
                        Return To Shop
                    </Link>
                </div>
            ) : (
                <>
                    {products.map(product => (
                        <div key={product.id} className="grid grid-cols-12 gap-4 items-center border-b py-4 shadow-sm p-4 mb-4 ps-10">

                            <div className="col-span-12 md:col-span-5 flex items-center">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-16 h-16 object-contain mr-4"
                                />
                                <div>
                                    <p className="font-medium">{product.title}</p>
                                </div>
                            </div>


                            <div className="col-span-4 md:col-span-2 text-center">
                                <p>${product.price.toFixed(2)}</p>
                            </div>


                            <div className="col-span-4 md:col-span-2 flex justify-center">
                                <div className="flex items-center border rounded">
                                    <button
                                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                        className="px-2 py-1 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{product.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                        className="px-2 py-1 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>


                            <div className="col-span-4 md:col-span-2 text-center">
                                <p>${(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}


                    <div className="flex flex-col md:flex-row justify-between mt-8 mb-12">
                        <Link to="/home" className="border border-black text-black px-6 py-2 rounded mb-4 md:mb-0 text-center">
                            Return To Shop
                        </Link>
                        <button
                            onClick={() => fetchCartProducts(cartItems)}
                            className="border border-black text-black px-6 py-2 rounded"
                        >
                            Update Cart
                        </button>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="p-4">
                            <div className="flex">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Coupon Code"
                                    className="flex-1 border border-[#000] p-2 rounded focus:outline-none"
                                />
                                <button
                                    onClick={() => alert(`Coupon ${couponCode} applied`)}
                                    className="bg-[#DB4444] text-white px-6 py-2 rounded ms-4"
                                >
                                    Apply Coupon
                                </button>
                            </div>
                        </div>


                        <div className="border border-[#000] rounded p-6 w-96 ml-auto">
                            <h3 className="font-bold text-lg mb-4 ">Cart Total</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b pb-2">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-2">
                                    <span>Total:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Link to={'/Checkout '}
                                    onClick={processCheckout}
                                    className="bg-[#DB4444] text-white px-8 py-2 rounded mt-6 hover:bg-[#c13333] transition-colors"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;