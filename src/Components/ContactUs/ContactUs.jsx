import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error message when editing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Send data to the server in a real application
            console.log('Message sent:', formData);

            // Reset the form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <div className="flex flex-wrap md:flex-nowrap min-h-screen space-y-3 md:space-y-0 md:space-x-5 py-14 px-4 md:px-20">
            {/* Left Section (1/3) */}
            <div className="md:w-1/3 w-full p-8 pb-14 h-fit shadow-md">
                <div className="mb-8 ">
                    <div className="flex items-center mb-6">
                        <PhoneIcon className="h-7 w-7 p-1 text-white bg-[#db4444] rounded-full mr-2" />
                        <h3 className="font-semibold text-lg">Call To Us</h3>
                    </div>
                    <p className="text-sm text-black mb-4">
                        We are available 24/7, 7 days a week.
                    </p>
                    <p className="text-sm text-black mb-4">
                        Phone: +8801611112222
                    </p>
                    <div className="border-b border-gray-200 my-4"></div>
                </div>

                <div>
                    <div className="flex items-center mb-6">
                        <EnvelopeIcon className="h-7 w-7 p-1 text-white bg-[#db4444] rounded-full mr-2" />
                        <h3 className="font-semibold text-lg">Write To US</h3>
                    </div>
                    <p className="text-sm text-black">
                        Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p className="text-sm text-black mt-2">
                        Emails: customer@exclusive.com
                    </p>
                    <p className="text-sm text-black mt-2">
                        Emails: support@exclusive.com
                    </p>
                </div>
            </div>

            {/* Right Section (2/3) */}
            <div className="md:w-2/3 w-full">
                <div className="bg-white md:p-8 rounded-lg shadow-sm">
                    {isSubmitted && (
                        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                            Your message has been sent successfully. We will get back to you soon!
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div className='flex flex-wrap md:flex-nowrap gap-3'>
                                <div className='w-full'>
                                    <input
                                        placeholder='Your Name *'
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-gray-100 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>

                                <div className='w-full'>
                                    <input
                                        placeholder='Your Email *'
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-gray-100 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div className='w-full'>
                                    <input
                                        placeholder='Your Phone *'
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full p-3 bg-gray-100 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                            <div>
                                <textarea
                                    placeholder='Your Massage'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full p-3 bg-gray-100 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#DB4444] text-white rounded hover:bg-[#b33c3c]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
