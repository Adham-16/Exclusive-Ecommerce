import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    const [errors, setErrors] = useState({
        firstName: '',
        streetAddress: '',
        city: '',
        phone: '',
        email: ''
    });
    const [saveInfo, setSaveInfo] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [couponCode, setCouponCode] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch cart items from localStorage and then fetch product details
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cart = JSON.parse(savedCart);
            if (cart.length > 0) {
                fetchCartProducts(cart);
            } else {
                setLoading(false);
                navigate('/home')
            }
        } else {
            setLoading(false);
            navigate('/home')
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

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            firstName: '',
            streetAddress: '',
            city: '',
            phone: '',
            email: ''
        };

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.streetAddress.trim()) {
            newErrors.streetAddress = 'Street address is required';
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must contain only numbers';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill all required fields correctly', {
                duration: 4000
            });
            return;
        }

        if (saveInfo) {
            localStorage.setItem('customerInfo', JSON.stringify(formData));
        }

        const orderData = {
            customer: formData,
            products: cartItems,
            paymentMethod,
            total: subtotal,
            date: new Date().toISOString()
        };

        console.log('Order placed:', orderData);
        toast.success('Order placed successfully!', {
            duration: 4000
        });
        localStorage.removeItem('cart');
        setCartItems([]);
        navigate('/order-confirmation');
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
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
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
                            {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
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
                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
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
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                                                <img src="/bkash.png" alt="Visa" className="h-9" />
                                                <img src="/visa.png" alt="Mastercard" className="h-5" />
                                                <img src="/master.png" alt="Mastercard" className="h-5" />
                                                <img src="/soso.png" alt="Mastercard" className="h-9" />
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
                                        onClick={() => toast.success(`Coupon ${couponCode} applied`, {
                                            duration: 2000
                                        })}
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
                                <Toaster></Toaster>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;