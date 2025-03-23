import React from 'react'

export function Signup() {
    return (
        <>
            <div className="flex justify-center items-center py-6">
                {/* Left: Image */}
                <div className="w-1/2 hidden bg-[#CBE4E9] h-full lg:block">
                    <img src="/public/login.jpeg" alt="Placeholder Image" className="object-cover w-full h-[100vh] pt-5" />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-28 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-4xl font-medium mb-4">Create an account</h1>
                    <p className="text-xl font-normal mb-8">Enter your details below</p>
                    <form action="#" method="POST">
                        {/* Name Input */}
                        <div className="my-6">
                            <input type="text" id="username" name="username" placeholder='Name' className="w-full border-nones border-b-[0.1rem] border-b-[#808080] py-2 px-3 ps-0 focus:outline-none focus:border-red-500" autoComplete="off" />
                        </div>
                        {/* Username Input */}
                        <div className="my-6">
                            <input type="text" id="username" name="username" placeholder='Email or Phone Number' className="w-full border-nones border-b-[0.1rem] border-b-[#808080] py-2 px-3 ps-0 focus:outline-none focus:border-red-500" autoComplete="off" />
                        </div>
                        {/* Password Input */}
                        <div className="mb-10">
                            <input type="password" id="password" name="password" placeholder='Password' className="w-full  border-nones border-b-[0.1rem] border-b-[#808080] py-2 px-3 ps-0 focus:outline-none focus:border-red-500" autoComplete="off" />
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 flex flex-wrap justify-center">
                            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-normals rounded-[4px] py-3 px-12 w-full">Create Account</button>
                            <div class="w-full  my-3 lg:mb-0">
                                <button type="button" class="w-full flex justify-center items-center py-3 gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-100 border border-gray-400 focus:outline-none  transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4" id="google">
                                        <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                                        <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                                        <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                                        <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
                                    </svg> Sign Up with Google </button>
                            </div>
                            <div class="mt-4 text-sm text-gray-600 text-center">
                                <p>Already have an account? <a href="#" class="text-black ps-3 underline underline-offset-8 hover:text-red-600">Log in</a>
                                </p>
                            </div>
                        </div>
                        {/* Login Button */}
                    </form>
                </div>
            </div>
        </>
    )
}
