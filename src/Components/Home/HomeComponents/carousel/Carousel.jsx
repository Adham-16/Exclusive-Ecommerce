import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Carousel.css'

export function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ],
        customPaging: function (i) {
            return (
                <button className="dot-button">
                    {i + 1}
                </button>
            );
        },
        dotsClass: "slick-dots slick-thumb"
    };


    const slides = [
        {
            id: 'New offer from iPhone',
            image: "/carousel1.jpeg",
            title: "Exclusive Offers",
            description: "Up to 10% off Voucher",
            buttonText: "Shop Now",
            buttonLink: "/products"
        },
        {
            id: 'New collection of sportswear',
            image: "/carousel2.jpeg",
            title: "New Collection",
            description: "Discover the latest fashion trends of the season",
            buttonText: "Shop Now",
            buttonLink: "/new-arrivals"
        },
        {
            id: 'New developments in PlayStation 5',
            image: "/carousel3.jpeg",
            title: "Summer Sale",
            description: "Explore the hottest styles for this summer",
            buttonText: "Shop Now",
            buttonLink: "/products"
        },
        {
            id: 'The new version of the latest audio devices',
            image: "/carousel4.jpeg",
            title: "Eid Discounts",
            description: "Celebrate Eid with exclusive festive discounts",
            buttonText: "Shop Now",
            buttonLink: "/new-arrivals"
        },
        {
            id: 'The latest Western fashion releases',
            image: "/carousel5.jpeg",
            title: "New Collection",
            description: "Stay trendy with our latest fashion arrivals",
            buttonText: "Shop Now",
            buttonLink: "/new-arrivals"
        }
    ];
    return (
        <>
            <div className="lg:w-3/5 w-full relative bg-black mt-10">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative flex justify-between">
                            <div className='w-full h-80 flex justify-end'>
                                <img
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="w-[45%] h-full object-contain"
                                    loading='lazy'
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white bg-black bg-opacity-30">
                                <h2 className="md:text-3xl text-xl font-bold mb-2">{slide.title}</h2>
                                <p className="md:text-4xl text-xl mb-4 w-1/2">{slide.description}</p>

                                <div className='flex items-center'>
                                    <Link
                                        to={'/products'}
                                        className="bg-black hover:text-[#DB4444] underline underline-offset-8 text-white  pe-3 py-2 rounded-md transition duration-300"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    )
}
