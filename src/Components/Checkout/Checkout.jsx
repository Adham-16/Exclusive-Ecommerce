import { useState, useEffect } from 'react';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phone: '',
        email: ''
    });
    const [saveInfo, setSaveInfo] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [couponCode, setCouponCode] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch cart items from localStorage and then fetch product details
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cart = JSON.parse(savedCart);
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
            setCartItems(products);
        } catch (error) {
            console.error('Error fetching cart products:', error);
        } finally {
            setLoading(false);
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-3xl font-normal mb-8">Billing Details</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
                {/* Left Column - Billing Form */}
                <div className="bg-white p-6 rounded ">
                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Street Address*</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apartment, floor, etc. (optional)</label>
                            <input
                                type="text"
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleInputChange}
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Town/City*</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Phone Number*</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email Address*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border  rounded focus:outline-none focus:border-black bg-[#f5f5f5]"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={saveInfo}
                                    onChange={() => setSaveInfo(!saveInfo)}
                                    className="mr-2"
                                />
                                <span className="text-sm">Save this information for faster check-out next time</span>
                            </label>
                        </div>
                    </form>
                </div>

                {/* Right Column - Order Summary */}
                <div className="bg-white p-6 rounded">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            {/* Products List */}
                            <div className="mb-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-center py-3">
                                        <div className="flex items-center">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain mr-3"
                                            />
                                            <span className="text-sm">{item.title} × {item.quantity}</span>
                                        </div>
                                        <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Order Totals */}
                            <div className="mb-6 space-y-3">
                                <div className="flex justify-between border-b pb-2">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between  text-lg pt-2">
                                    <span>Total:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-6">
                                <div className="mb-4">
                                    <label className="flex items-center mb-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'bank'}
                                            onChange={() => setPaymentMethod('bank')}
                                            className="mt-1 mr-2"
                                        />
                                        <div className='flex justify-between w-full items-center'>
                                            <span>Bank</span>
                                            <div className="flex justify-end items-center mt-1">
                                                <img src="/public/bkash.png" alt="Visa" className="h-9" />
                                                <img src="/public/visa.png" alt="Mastercard" className="h-5" />
                                                <img src="/public/master.png" alt="Mastercard" className="h-5" />
                                                <img src="/public/soso.png" alt="Mastercard" className="h-9" />
                                            </div>
                                        </div>
                                    </label>

                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === 'cash'}
                                            onChange={() => setPaymentMethod('cash')}
                                            className="mr-2"
                                        />
                                        <span>Cash on delivery</span>
                                    </label>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-4 space-x-5">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="Coupon Code"
                                        className=" p-2 border w-3/5  rounded focus:outline-none mb-2"
                                    />
                                    <button
                                        onClick={() => alert(`Coupon ${couponCode} applied`)}
                                        className="bg-[#DB4444] text-white px-4 py-2 rounded "
                                    >
                                        Apply Coupon
                                    </button>
                                </div>

                                {/* Place Order Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="bg-[#DB4444] text-white px-8 py-2 rounded hover:bg-[#c13333] transition-colors"
                                >
                                    Place Order
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;