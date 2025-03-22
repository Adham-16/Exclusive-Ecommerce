import React from 'react'

export function Footer() {
    return (
        <>
            <div className="bg-[#000000] dark:bg-gray-800 flex flex-col justify-center items-center ">
                <footer className="bg-[#000000] text-[#FAFAFA] border-t border-gray-200">
                    <div className="container  px-6 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 text-center sm:text-left">
                            {/* Logo & Description */}
                            <div className='space-y-2'>
                                <h2 className="text-xl mb-4 font-semibold ">
                                    <span className="text-2xl">Exclusive</span>
                                </h2><span className=" text-lg font-normal ">
                                    Subscribe
                                </span>
                                <p className="mt-2 text-sm ">
                                    Get 10% off your first order
                                </p>
                                <div className='relative w-fit left-[17%] sm:left-0'>
                                    <input className='bg-transparent border p-1 pr-0 rounded border-[#FAFAFA]' placeholder='Enter Your Email'></input>
                                    <div className='absolute right-3 top-1/4'>
                                        <svg width="18" height="15" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91196 9.9998H2.99996L1.02296 2.1348C1.0103 2.0891 1.00259 2.04216 0.999959 1.9948C0.977959 1.2738 1.77196 0.773804 2.45996 1.1038L21 9.9998L2.45996 18.8958C1.77996 19.2228 0.995959 18.7368 0.999959 18.0288C1.00198 17.9655 1.0131 17.9029 1.03296 17.8428L2.49996 12.9998" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></div></div>
                            </div>
                            {/* Support */}
                            <div>
                                <h3 className="font-semibold mb-4">Support</h3>
                                <ul className="text-sm space-y-2">
                                    <li><p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p></li>
                                    <li><p>exclusive@gmail.com</p></li>
                                    <li><p>+88015-88888-9999</p></li>
                                </ul>
                            </div>
                            {/* Account */}
                            <div>
                                <h3 className="font-semibold mb-4">Account</h3>
                                <ul className="text-sm space-y-2">
                                    <li><a href="#" className="hover:text-blue-600">My Account</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Login / Register</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Cart</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Wishlist</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Shop</a></li>
                                </ul>
                            </div>
                            {/* Quick Link */}
                            <div>
                                <h3 className="font-semibold mb-4">Quick Link</h3>
                                <ul className="text-sm space-y-2">
                                    <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Terms Of Use</a></li>
                                    <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                                    <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                                </ul>
                            </div>
                            {/* Download App */}
                            <div>
                                <h3 className="font-semibold mb-4">Download App</h3>
                                <p className="my-2 text-[12px] text-gray-400">
                                    Save $3 with App New User Only
                                </p>
                                <div className='flex gap-3 items-center justify-center sm:justify-start'>
                                    <img className='w-1/3' src='/QRcode.jpeg' alt='qr code'></img>
                                    <div className="flex flex-col h-full space-y-2">
                                        <img src="/ert.png" alt="Google Play" className="h-11 rounded-md border" />
                                        <img src="/erf.png" alt="App Store" className="h-11 rounded-md border" />
                                    </div></div>
                                {/* Social Icons */}
                                <div className="flex space-x-9 mt-3 items-center justify-center sm:justify-start">
                                    <a href="#" className="text-[#FAFAFA] "><i className="fab fa-facebook-f" /></a>
                                    <a href="#" className="text-[#FAFAFA]"><i className="fab fa-twitter" /></a>
                                    <a href="#" className="text-[#FAFAFA]"><i className="fab fa-instagram" /></a>
                                    <a href="#" className="text-[#FAFAFA]"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                        {/* Payment and App Download */}
                        {/* <div className="flex flex-col   items-center mt-6">
                        </div> */}
                    </div>
                </footer>
                {/* Copyright */}
                <div className="text-center w-full text-sm text-gray-500 mb-6 border-t border-[#353232] pt-4" >
                    @Copyright Rimel 2022. All right reserved.
                </div>
            </div>

        </>
    )
}
