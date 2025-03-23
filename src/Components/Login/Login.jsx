import React, { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            setMessage("No account found. Please sign up first.");
            return;
        }

        const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);

        if (email !== storedEmail || password !== storedPassword) {
            setMessage("Invalid email or password.");
            return;
        }

        setMessage("Login successful!");
    };

    return (
        <div className="flex justify-center items-center py-5">
            {/* Left: Image */}
            <div className="w-1/2 hidden bg-[#CBE4E9] h-full lg:block">
                <img src="/login.jpeg" alt="Placeholder Image" className="object-cover w-full h-[90vh] pt-5" />
            </div>
            {/* Right: Login Form */}
            <div className="lg:p-28 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-4xl font-medium mb-4">Log in to Exclusive</h1>
                <p className="text-xl font-normal mb-8">Enter your details below</p>
                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="my-6">
                        <input
                            type="text"
                            placeholder='Email or Phone Number'
                            className="w-full border-b-[0.1rem] border-b-[#808080] py-2 px-3 focus:outline-none focus:border-red-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-10">
                        <input
                            type="password"
                            placeholder='Password'
                            className="w-full border-b-[0.1rem] border-b-[#808080] py-2 px-3 focus:outline-none focus:border-red-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    {message && <h3 className="text-center text-red-500">{message}</h3>}
                    {/* Login Button */}
                    <div className="mb-6 flex justify-between items-center">
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white rounded py-3 px-12">Login</button>
                        <a href="#" className="hover:underline text-red-500">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}