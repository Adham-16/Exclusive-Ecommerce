import React from 'react'
import { Carousel } from './HomeComponents/carousel/Carousel'
import { TopRightSection } from './HomeComponents/topRightSection/TopRightSection'
import FlashSales from './HomeComponents/Flash Sales/FlashSales'
import CategoriesSection from './HomeComponents/Categories/CategoriesSection'
import BestSellingProducts from './HomeComponents/Best Selling Products/BestSellingProducts'
import UrgentOffers from './HomeComponents/Urgent Offers/UrgentOffers';
import OurProducts from './HomeComponents/OurProducts/OurProducts'
import { SectionFour } from '../AboutUs/SectionFour'
import NewArrival from './HomeComponents/NewArrival/NewArrival'
import { Toaster } from 'react-hot-toast'



export function Home() {



    return (
        <>

            <div >
                <section>
                    <div className='flex justify-around x flex-col md:flex-row'>
                        <TopRightSection className='order-2 md:order-1'></TopRightSection>
                        <Carousel className='order-1 md:order-2'></Carousel>
                    </div>
                </section>
                <section >
                    <div >
                        <FlashSales></FlashSales>
                    </div>
                </section>
                <section >
                    <div >
                        <CategoriesSection></CategoriesSection>
                    </div>
                </section>
                <section >
                    <div >
                        <BestSellingProducts></BestSellingProducts>
                    </div>
                </section>
                <section >
                    <div >
                        <UrgentOffers></UrgentOffers>
                    </div>
                </section>
                <section >
                    <div >
                        <OurProducts></OurProducts>
                    </div>
                </section>
                <section >
                    <div >
                        <NewArrival></NewArrival>
                    </div>
                </section>
                <section >
                    <div >
                        <SectionFour></SectionFour>
                    </div>
                </section>
            </div>
            <Toaster></Toaster>
        </>
    )
}
