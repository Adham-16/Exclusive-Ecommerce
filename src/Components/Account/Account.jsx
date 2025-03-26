import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Account() {
    return (
        <><div className="flex min-h-screen justify-around  p-4">
            <div className="w-[22%] bg-white p-6 rounded-lg ">
                <div className="space-y-8">
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium mb-3">
                            <Link to={''}> Manage My Account</Link>
                        </h3>
                        <ul className="space-y-2 pl-4">
                            <li className="text-gray-700"> <NavLink to={''} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Profile  </NavLink></li>
                            <li className="text-gray-700"> <NavLink to={''} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> Address Book </NavLink> </li>
                            <li className="text-gray-700"> <NavLink to={''} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Payment Options </NavLink> </li>
                        </ul>
                    </div>
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium mb-3">
                            <Link to={''}> My Orders</Link>
                        </h3>
                        <ul className="space-y-2 pl-4">
                            <li className="text-gray-700"> <NavLink to={''} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Returns  </NavLink></li>
                            <li className="text-gray-700"> <NavLink to={''} className={({ isActive }) => isActive ? 'font-medium text-red-500' : ' hover:text-red-500'}> My Cancellations </NavLink> </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">
                            <Link to={''}> My WishList</Link>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="w-3/5 ">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium mb-6 text-[#Db4444]">Edit Your Profile</h2>
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' Md ' />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' Rimel ' />
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' rimel1111@gmail.com ' />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' Kingston, 5236, United States ' />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password Changes</label>
                            <div className="w-full">
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' Current Password' />
                            </div>
                            <div className="w-full">
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' New Password  ' />
                            </div>
                            <div className="w-full">
                                <input type="text" className="w-full p-2 rounded bg-[#f5f5f5]" placeholder=' Confirm New Password  ' />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-8">
                        <button className="px-4 py-2 border rounded text-gray-700 hover:border-[#b43c3c] hover:bg-[#Db4444] hover:text-white">
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-[#Db4444] text-white rounded hover:bg-white hover:text-gray-700 hover:border">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

        </div></>
    )
}
