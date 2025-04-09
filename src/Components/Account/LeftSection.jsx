import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export function LeftSection() {
    return (
        <>
            <div className="sm:w-[22%] bg-white p-6 rounded-lg ">
                <div className="space-y-8">
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium mb-3">
                            <Link to={''}> Manage My Account</Link>
                        </h3>
                        <ul className="space-y-2 pl-4">
                            <li className="text-gray-700"> <NavLink to={'/account'} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Profile  </NavLink></li>
                            <li className="text-gray-700"> <NavLink to={'/Address'} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> Address Book </NavLink> </li>
                            <li className="text-gray-700"> <NavLink to={'/ght'} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Payment Options </NavLink> </li>
                        </ul>
                    </div>
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium mb-3">
                            <Link to={'/Cart'}> My Orders</Link>
                        </h3>
                        <ul className="space-y-2 pl-4">
                            <li className="text-gray-700"> <NavLink to={'/vbn'} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Returns  </NavLink></li>
                            <li className="text-gray-700"> <NavLink to={'/cvf'} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Cancellations </NavLink> </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">
                            <Link to={'/wishlist'}> My WishList</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
