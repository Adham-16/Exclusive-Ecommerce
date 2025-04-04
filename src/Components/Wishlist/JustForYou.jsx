import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function JustForYou() {
    const [products, setProducts] = useState([]);



    // Fetch best selling products from API
    useEffect(() => {
        const fetchBestSellingProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/category/fragrances');
                const data = await response.json();
                setProducts(data.products.slice(0, 8)); // عرض أول 8 منتجات فقط
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchBestSellingProducts();
    }, []);

    // Slider settings for 4 products
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="py-12   relative">
            {/* Header */}
            <div className="flex flex-col  justify-between items-start space-y-5 mb-14">
                <div className="flex justify-between items-center w-full mb-4 md:mb-0">
                    <div className='flex space-x-2 items-center'>
                        <div className="w-5 h-10 bg-[#DB4444] rounded mr-3"></div>
                        <p className=" font-normal text-2xl">Just For You</p>
                    </div>
                    <Link to={'/products'} className="px-10 py-3 bg-[#fff] border border-[#000] rounded hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]">
                        See All
                    </Link>
                </div>


            </div>

            {/* Products carousel */}
            <div className="relative">
                <Slider {...sliderSettings}>
                    {products.map(product => (
                        <div key={product.id} className="px-2">
                            <div className="group relative">
                                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center relative">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                    <button className="absolute top-2 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <EyeIcon className="h-5 w-5 text-gray-600 hover:text-[#DB4444]" />
                                    </button>
                                    <button className="absolute bottom-0 left-0 right-0 bg-[#000] text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <div className="flex items-center mt-1">
                                        <p className="text-[#DB4444] font-bold mr-2">${product.price}</p>
                                        {product.discountPercentage && (
                                            <p className="text-gray-500 text-sm line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


        </section>
    );
}