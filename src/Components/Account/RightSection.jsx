import { useState, useEffect } from 'react';

export function RightSection() {
    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Error messages
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    // Load user data when the component mounts
    useEffect(() => {
        resetForm();
    }, []);


    const resetForm = () => {
        const savedUser = JSON.parse(localStorage.getItem('user')) || {};

        setFormData({
            firstName: savedUser.name?.split(' ')[0] || '',
            lastName: savedUser.name?.split(' ')[1] || '',
            email: savedUser.email || '',
            address: savedUser.address || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });

        setErrors({});
        setServerError('');
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error message when the user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Required field validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        // Password validation if provided
        if (formData.currentPassword || formData.newPassword || formData.confirmPassword) {
            if (!formData.currentPassword) {
                newErrors.currentPassword = 'Current password is required';
                isValid = false;
            } else {
                // Here, you should check the current password with the backend
                const savedUser = JSON.parse(localStorage.getItem('user'));
                if (formData.currentPassword !== savedUser.password) {
                    newErrors.currentPassword = 'Incorrect current password';
                    isValid = false;
                }
            }

            if (!formData.newPassword) {
                newErrors.newPassword = 'New password is required';
                isValid = false;
            } else if (formData.newPassword.length < 6) {
                newErrors.newPassword = 'Password must be at least 6 characters';
                isValid = false;
            }

            if (formData.newPassword !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            // Update user data
            const updatedUser = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                address: formData.address,
                // In a real application, do not store passwords in localStorage
                password: formData.newPassword || JSON.parse(localStorage.getItem('user')).password
            };

            localStorage.setItem('user', JSON.stringify(updatedUser));
            alert('Profile updated successfully');

            // Reset password fields
            setFormData(prev => ({
                ...prev,
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            }));

        } catch (error) {
            setServerError('An error occurred while saving data');
            console.log(error);

        }
    };

    return (
        <div className="w-3/5">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-medium mb-6 text-[#Db4444]">Edit Your Profile</h2>

                {serverError && (
                    <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                        {serverError}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.firstName ? 'border border-red-500' : ''}`}
                                    required
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                                )}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.lastName ? 'border border-red-500' : ''}`}
                                    required
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.email ? 'border border-red-500' : ''}`}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.address ? 'border border-red-500' : ''}`}
                                    required
                                />
                                {errors.address && (
                                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password Changes</label>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.currentPassword ? 'border border-red-500' : ''}`}
                                    placeholder="Current Password"
                                />
                                {errors.currentPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.currentPassword}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.newPassword ? 'border border-red-500' : ''}`}
                                    placeholder="New Password"
                                />
                                {errors.newPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full p-2 rounded bg-[#f5f5f5] ${errors.confirmPassword ? 'border border-red-500' : ''}`}
                                    placeholder="Confirm New Password"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 border rounded text-gray-700 hover:border-[#b43c3c] hover:bg-[#Db4444] hover:text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#Db4444] text-white rounded hover:bg-white hover:text-gray-700 hover:border"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}