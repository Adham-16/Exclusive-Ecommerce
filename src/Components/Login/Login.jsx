import React from 'react'

export function Login() {
    return (
        <>
            <div className="flex justify-center items-center">
                {/* Left: Image */}
                <div className="w-1/2 hidden bg-[#CBE4E9] h-full lg:block">
                    <img src="/public/login.jpeg" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-28 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-4xl font-medium mb-4">Log in to Exclusive</h1>
                    <p className="text-xl font-normal mb-8">Enter your details below</p>
                    <form action="#" method="POST">
                        {/* Username Input */}
                        <div className="my-6">
                            <input type="text" id="username" name="username" placeholder='Email or Phone Number' className="w-full border-nones border-b-[0.1rem] border-b-[#808080] py-2 px-3 ps-0 focus:outline-none focus:border-red-500" autoComplete="off" />
                        </div>
                        {/* Password Input */}
                        <div className="mb-10">
                            <input type="password" id="password" name="password" placeholder='Password' className="w-full  border-nones border-b-[0.1rem] border-b-[#808080] py-2 px-3 ps-0 focus:outline-none focus:border-red-500" autoComplete="off" />
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 flex justify-between items-center">
                            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-normals rounded-[4px] py-3 px-12">Login</button>
                            <a href="#" className="hover:underline text-red-500">Forgot Password?</a>
                        </div>
                        {/* Login Button */}
                    </form>
                </div>
            </div>
        </>
    )
}
