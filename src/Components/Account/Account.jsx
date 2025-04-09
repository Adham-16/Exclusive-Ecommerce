import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LeftSection } from './LeftSection'
import { RightSection } from './RightSection'

export function Account() {
    const userData = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <div className="flex flex-wrap min-h-screen justify-around relative  p-4">
                <div className='w-fit h-fit absolute right-[7%] top-[-4%]  sm:top-[-2%] '>
                    Welcome <span className='text-[#db4444]'> {userData.name}</span>
                </div>
                <LeftSection></LeftSection>
                <RightSection></RightSection>
            </div>
        </>
    )
}
