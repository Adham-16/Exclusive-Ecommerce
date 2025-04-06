import React from 'react'
import { Link } from 'react-router-dom'

export function TopRightSection() {
    return (
        <>
            <div className=' flex flex-col justify-start ps-3 pe-7 pt-10 border-e-2 space-y-3 '>
                <div className='flex items-center justify-between'>
                    <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Women's Fashion</Link>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                    </svg>
                </div>
                <div className='flex items-center justify-between'>
                    <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Men's Fashion</Link>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                    </svg>
                </div>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Electronics</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Home and Lifestyle</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Medicine</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Sports and Outdoor</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Boys and Toys</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Durex and Bits</Link>
                <Link to={'/products'} className="btn w-fit hover:text-[#db4444]">Health and Beauty</Link>
            </div>
        </>
    )
}
