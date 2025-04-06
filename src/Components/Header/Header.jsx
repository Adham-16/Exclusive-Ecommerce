import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navigate = useNavigate();

    const userMenuRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsUserMenuOpen(false);
        navigate('/login');
    };

    return (
        <>
            <div className="bg-black text-white lg:text-base sm:text-sm text-[10px] p-2 text-center">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <Link to="/products" className="underline text-white ml-2">ShopNow</Link>
            </div>
            <div>
                <section className="relative px-20 border-b-[0.1rem] border-b-[#d7d6d6]">
                    <nav className="flex justify-between flex-wrap text-black" ref={navRef}>
                        <div className=" py-4 flex w-full justify-between items-center">
                            <Link to="/home" className="text-3xl font-bold font-heading">
                                <h1 className="hover:text-red-500 text-[15px] sm:text-[23px] md:text-[30px]">Exclusive</h1>
                            </Link>
                            {isLoggedIn &&
                                <>
                                    <ul className="hidden md:flex px-4 mx-auto font-heading space-x-5 lg:space-x-12">
                                        <li><NavLink to="/home" className={({ isActive }) => isActive ? 'underline underline-offset-4 hover:text-red-500' : ' hover:text-red-500'} >Home</NavLink></li>
                                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'underline underline-offset-4 hover:text-red-500' : ' hover:text-red-500'}>Contact</NavLink></li>
                                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'underline underline-offset-4 hover:text-red-500' : ' hover:text-red-500'}>About</NavLink></li>
                                        <li><NavLink to="/products" className={({ isActive }) => isActive ? 'underline underline-offset-4 hover:text-red-500' : ' hover:text-red-500'}>Collections</NavLink></li>
                                    </ul>
                                    <form className="max-w-md w-2/5 md:w-1/5 mr-3">
                                        <div className="relative">
                                            <input type="search" id="default-search" className="block start-0 w-full p-2 pe-15 text-sm text-gray-900 bg-gray-50 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you looking for?" required />
                                            <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </form></>
                            }
                            <div className="flex items-center space-x-5">
                                {isLoggedIn &&
                                    <>
                                        <Link to="/wishlist" className="hover:text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <span className="flex absolute -mt-6 ml-4">
                                                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#DB4444] opacity-75" />
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DB4444]" />
                                            </span>
                                        </Link>
                                        <Link to="/cart" className="hover:text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="flex absolute -mt-6 ml-4">
                                                <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#DB4444] opacity-75" />
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DB4444]" />
                                            </span>
                                        </Link></>
                                }
                                {isLoggedIn ? (
                                    <div className="relative" ref={userMenuRef}>
                                        <button
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            className="flex items-center hover:text-red-500 focus:outline-none"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </button>

                                        {isUserMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                                <div className='flex justify-start items-center hover:bg-gray-100'>
                                                    <svg width="28" height="28" viewBox="0 0 40 28" fill="#db4444" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <Link
                                                        to="/account"
                                                        className="block px-4 py-2 text-sm text-gray-700 "
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        Manage My Account
                                                    </Link>
                                                </div>
                                                <div className='flex justify-start items-center hover:bg-gray-100'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#db4444" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linejoin="round" />
                                                        <path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <Link
                                                        to="/orders"
                                                        className="block px-4 py-2 text-sm text-gray-700 "
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        My Orders
                                                    </Link>
                                                </div>
                                                <div className='flex justify-start items-center hover:bg-gray-100'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill='#db4444' viewBox="0 0 50 50" width="22px" height="22px">
                                                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
                                                    </svg>
                                                    <Link
                                                        to="/cancellations"
                                                        className="block px-4 py-2 text-sm text-gray-700 "
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        My Cancellations
                                                    </Link>
                                                </div>
                                                <div className='flex justify-start items-center hover:bg-gray-100'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#db4444" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z" stroke="#FAFAFA" stroke-width="1.5" />
                                                    </svg>
                                                    <Link
                                                        to="/reviews"
                                                        className="block px-4 py-2 text-sm text-gray-700 "
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        My Reviews
                                                    </Link>
                                                </div>
                                                <div className='flex justify-start items-center hover:bg-gray-100'>
                                                    <svg className='bg-black rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700  border-t border-gray-200"
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex space-x-4">
                                        <Link to="/login" className="hover:text-red-500 px-3 py-1 rounded">Login</Link>
                                        <Link to="/" className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Sign Up</Link>
                                    </div>
                                )}
                                {isLoggedIn &&
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="navbar-burger self-center mr-12 md:hidden"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>}
                            </div>
                        </div>
                        {isLoggedIn &&
                            <div className='w-full p-3 pt-0'>
                                <div className={isOpen ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                                    <ul className='space-y-1'>
                                        <li><Link to="/home" className="block px-4 py-3 text-white bg-gray-900 rounded">Home</Link></li>
                                        <li><Link to="/about" className="block px-4 py-3 text-white bg-gray-900 rounded">About</Link></li>
                                        <li><Link to="/collections" className="block px-4 py-3 text-white bg-gray-900 rounded">Collections</Link></li>
                                        <li><Link to="/contact" className="block px-4 py-3 text-white bg-gray-900 rounded">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>}
                    </nav>
                </section>
            </div>
        </>
    );
}