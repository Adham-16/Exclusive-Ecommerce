import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const OrderConfirmation = () => {
    const [customerName, setCustomerName] = useState('');
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        // Get customer data from localStorage
        const customerInfo = JSON.parse(localStorage.getItem('user'));

        if (customerInfo && customerInfo.name) {

            setCustomerName(customerInfo.name.split(' ')[0]);
        }

        // Generate random order number
        setOrderNumber(`#${Math.floor(Math.random() * 1000000)}`);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md max-w-md w-full text-center">
                <div className="mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Thank you {customerName || 'valued customer'}!
                </h1>

                <p className="text-gray-600 mb-6">
                    Your order has been received successfully <br />
                    Order Number: <span className="font-semibold">{orderNumber}</span>
                </p>

                <p className="text-gray-700 mb-8">
                    We appreciate your trust in us. We hope you enjoy your products and we look forward to serving you again with our best offers and products.
                </p>

                <Link
                    to="/home"
                    className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-[#c13333] transition-colors inline-block"
                >
                    Return to Homepage
                </Link>
            </div>

            <Toaster position="bottom-center" />
        </div>
    );
};

export default OrderConfirmation;