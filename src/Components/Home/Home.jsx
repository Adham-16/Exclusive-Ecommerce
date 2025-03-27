import React from 'react'
import { Carousel } from './Home Componaents/carousel/carousel'
import { TopRightSection } from './Home Componaents/topRightSection/topRightSection'
import FlashSales from './Home Componaents/Flash Sales/FlashSales'
import CategoriesSection from './Home Componaents/Categories/CategoriesSection'
import BestSellingProducts from './Home Componaents/Best Selling Products/BestSellingProducts'
import UrgentOffers from './Home Componaents/Urgent Offers/UrgentOffers';
import OurProducts from './Home Componaents/OurProducts/OurProducts'
import { SectionFour } from '../AboutUs/SectionFour'
import NewArrival from './Home Componaents/NewArrival/NewArrival'


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
        </>
    )
}
