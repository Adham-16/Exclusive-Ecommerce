import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SelectedProductView from '../selectedProductView/selectedProductView';
import { addToWishlist } from '../../../Wishlist/addToWishlist';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Cart/AddtoCart';

export default function FlashSales() {
    const [products, setProducts] = useState([]);
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sliderRef, setSliderRef] = useState(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = { ...prevTime };

                if (newTime.seconds > 0) newTime.seconds--;
                else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) newTime.minutes--;
                    else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) newTime.hours--;
                        else {
                            newTime.hours = 23;
                            if (newTime.days > 0) newTime.days--;
                        }
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5, // Shows 4 full slides and part of the 5th
        slidesToScroll: 1,
        // rtl: true,
        ltr: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rtl: true,
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    rtl: true,
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 640,
                settings: {
                    rtl: true,
                    slidesToShow: 1.5
                }
            }
        ]
    };

    // Format time with leading zero
    const formatTime = (time) => time.toString().padStart(2, '0');


    return (
        <section className="py-12 pb-0 px-6 mt-20 md:px-20 relative">
            {/* Header with countdown */}
            <div className="flex flex-col mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-5 h-10 bg-[#DB4444] rounded mr-3"></div>
                    <p className="text-[#DB4444] font-semibold">Today's</p>
                </div>

                <div className="flex items-center justify-between space-x-16 mb-6 md:mb-0">
                    <div className="flex items-center space-x-16">
                        <h2 className="text-2xl md:text-3xl font-semibold">Flash Sales</h2>
                        <div className='flex items-center space-x-2'>
                            <div className="text-center">
                                <p className="text-xs text-black">Days</p>
                                <p className="font-bold text-2xl">{formatTime(timeLeft.days)}</p>
                            </div>
                            <span className="text-[#DB4444]">:</span>
                            <div className="text-center">
                                <p className="text-xs text-black">Hours</p>
                                <p className="font-bold text-2xl">{formatTime(timeLeft.hours)}</p>
                            </div>
                            <span className="text-[#DB4444]">:</span>
                            <div className="text-center">
                                <p className="text-xs text-black">Minutes</p>
                                <p className="font-bold text-2xl">{formatTime(timeLeft.minutes)}</p>
                            </div>
                            <span className="text-[#DB4444]">:</span>
                            <div className="text-center">
                                <p className="text-xs text-black">Seconds</p>
                                <p className="font-bold text-2xl">{formatTime(timeLeft.seconds)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mb-6 space-x-4">
                        <button
                            onClick={() => sliderRef?.slickPrev()}
                            className="p-2 rounded-full bg-gray-200 hover:bg-[#DB4444] hover:text-white"
                        >
                            <ArrowLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => sliderRef?.slickNext()}
                            className="p-2 rounded-full bg-gray-200 hover:bg-[#DB4444] hover:text-white"
                        >
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Products carousel */}
            <div className="relative">


                <Slider ref={slider => setSliderRef(slider)} {...sliderSettings}>
                    {products.map(product => (
                        <div key={product.id} className="px-2">
                            <div className="group relative">
                                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center relative">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="max-h-full max-w-full object-contain cursor-pointer"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <HeartIcon onClick={() => addToWishlist(product.id)} className="h-5 w-5 text-gray-600 hover:text-[#DB4444]" />
                                    </button>
                                    <button onClick={() => setSelectedProduct(product)} className="absolute top-14 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <EyeIcon className="h-5 w-5 text-gray-600 hover:text-[#DB4444]" />
                                    </button>
                                    <button onClick={() => addToCart(product.id, 1)} className="absolute bottom-0 left-0 right-0 bg-[#000]  text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
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

            {/* View All button */}
            <div className="text-center mt-10">
                <Link to={'/products'} className="px-8 py-3 bg-[#DB4444] text-white rounded hover:bg-[#b33c3c]">
                    View All Products
                </Link>
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <SelectedProductView selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></SelectedProductView>
            )}
            <hr className='mt-14'></hr>
        </section>

    );
}