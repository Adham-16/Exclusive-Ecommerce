import React, { useState } from 'react'

export function Header() {
    const [isOpen, setIsOpen] = useState();
    return (
        <>
            <div className="bg-black text-white lg:text-base sm:text-sm text-[10px]  p-2 text-center">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className="underline text-white ml-2"> ShopNow</a>
            </div>
            <div>
                <div className="flex flex-wrap">
                    <section className="relative mx-auto">
                        {/* navbar */}
                        <nav className="flex justify-between flex-wrap  text-black w-screen">
                            <div className="px-5  py-4 flex w-full justify-between items-center">
                                <a className="text-3xl font-bold font-heading" href="#">
                                    <h1 className="hover:text-red-500 text-[15px] sm:text-[23px] md:text-[30px]">Exclusive</h1>
                                </a>
                                {/* Nav Links */}
                                <ul className="hidden md:flex px-4 mx-auto  font-heading space-x-5 lg:space-x-12">
                                    <li><a className="hover:text-red-500 " href="#">Home</a></li>
                                    <li><a className="hover:text-red-500" href="#">Contact</a></li>
                                    <li><a className="hover:text-red-500" href="#">About</a></li>
                                    <li><a className="hover:text-red-500" href="#">Collections</a></li>
                                </ul>
                                {/* Header Icons */}
                                <form className="max-w-md w-2/5 md:w-1/5 mr-3">
                                    <div className="relative">
                                        <input type="search" id="default-search" className="block start-0 w-full p-2 pe-15 text-sm text-gray-900   bg-gray-50  focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you looking for?" required />
                                        <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex items-center space-x-5">
                                    <a className="hover:text-red-500" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span className="flex absolute -mt-6 ml-4">
                                            <span className=" absolute inline-flex h-3 w-3 rounded-full bg-[#DB4444] opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DB4444]">
                                            </span>
                                        </span>
                                    </a>
                                    <a className="  hover:text-red-500" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="flex absolute -mt-5 ml-4">
                                            <span className=" absolute inline-flex h-3 w-3 rounded-full bg-[#DB4444] opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DB4444]">
                                            </span>
                                        </span>
                                    </a>
                                    <button onClick={() => setIsOpen(!isOpen)} className="navbar-burger self-center mr-12 md:hidden" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Responsive navbar */}
                            <div className='w-full p-3 pt-0'>
                                <div className={isOpen ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                                    <ul >
                                        <li><a href="#" className="block px-4 py-3 text-white bg-gray-900 rounded">Home</a></li>
                                        <li><a href="#" className="block px-4 py-3 text-white bg-gray-900 rounded">About</a></li>
                                        <li><a href="#" className="block px-4 py-3 text-white bg-gray-900 rounded">Services</a></li>
                                        <li><a href="#" className="block px-4 py-3 text-white bg-gray-900 rounded">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </section>
                </div>


            </div >

        </>
    )
}
