import React from 'react'
import { Carousel } from './Home Componaents/carousel/carousel'
import { Account } from '../Account/Account'
import { NotFound } from '../Not-Found/NotFound'
import { About } from '../AboutUs/About'


export function Home() {



    return (
        <>
            <About></About>
            {/* <Account></Account> */}
            {/* <div className='flex justify-around '>
                <div className=' flex flex-col justify-start ps-3 pe-7 pt-10 border-e-2 space-y-3 '>
                    <div className='flex items-center justify-between'>
                        <button className="btn w-fit">Women's Fashion</button>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                        </svg>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className="btn w-fit">Men's Fashion</button>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                        </svg>
                    </div>
                    <button className="btn w-fit">Electronics</button>
                    <button className="btn w-fit">Home and Lifestyle</button>
                    <button className="btn w-fit">Medicine</button>
                    <button className="btn w-fit">Sports and Outdoor</button>
                    <button className="btn w-fit">Boys and Toys</button>
                    <button className="btn w-fit">Durex and Bits</button>
                    <button className="btn w-fit">Health and Beauty</button>
                </div>
                <Carousel></Carousel>
            </div> */}
        </>
    )
}
