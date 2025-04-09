import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { addToCart } from '../Cart/AddtoCart';
import { addToWishlist } from '../Wishlist/addToWishlist';
import { Toaster } from 'react-hot-toast';
import RelatedItem from './RelatedItem';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [selectedColor, setSelectedColor] = useState('#FF0000');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('m');
    const [bgColor, setBgColor] = useState('#FFFFFF');

    // Sample colors (in a real app, these would come from the product data)
    const colors = ['#a0bce0', '#e07575'];

    // Sample sizes
    const sizes = ['xs', 's', 'm', 'l', 'xl'];

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
                setMainImage(data.thumbnail);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setBgColor(color);
    };


    if (loading) return <div className="text-center py-12">Loading...</div>;
    if (error) return <div className="text-center py-12 text-red-500">{error}</div>;
    if (!product) return <div className="text-center py-12">Product not found</div>;

    return (
        <div className="container mx-auto px-4 sm:px-20 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Product Images */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Side images (if available) */}
                    {product.images && product.images.length > 1 && (
                        <div className="flex flex-col gap-2 order-1 md:order-none">
                            {product?.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product view ${index + 1}`}
                                    className="w-16 h-16 object-cover cursor-pointer border"
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Main image */}
                    <div className="flex-1" style={{ backgroundColor: bgColor }}>
                        <img
                            src={mainImage}
                            alt={product?.title}
                            className="w-full h-auto max-h-96 object-contain"
                        />
                    </div>
                </div>

                {/* Right Column - Product Info */}
                <div className='sm:px-10 p-1 space-y-4 sm:space-y-0'>
                    {/* Product title */}
                    <h1 className="text-2xl font-bold mb-1">{product.title}</h1>

                    {/* Rating and stock */}
                    <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
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
                            <span className="text-gray-500 text-xs ml-1 mr-3">({product.rating} Reviews) </span>|
                        </div>
                        <span className={product.stock > 0 ? 'text-green-500' : 'text-red-500'}>
                            {product.stock > 0 ? 'In Stock' : 'Unavailable'}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="text-xl font-normal  mb-2">
                        ${product.price.toFixed(2)}
                        {product.discountPercentage && (
                            <span className="text-gray-500 text-sm line-through ml-2">
                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-[14px] mb-2">{product.description}</p>

                    <div className=" border-t-2 border-gray-500 pt-6 "></div>

                    {/* Colors */}
                    <div className="mb-1 flex items-center gap-3">
                        <div className="font-normal text-xl">Colours :</div>
                        <div className="flex gap-2">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    className={`w-4 h-4 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-1 ring-gray-800' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorSelect(color)}
                                />
                            ))}

                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-2 flex items-center gap-3">
                        <div className="font-normal text-xl ">Size:</div>
                        <div className="flex gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    className={`w-7 h-7 border rounded text-sm flex items-center justify-center ${selectedSize === size ? 'bg-[#DB4444] text-white ' : ' border-gray-400 '
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and buttons */}
                    <div className="flex items-center gap-4 mb-2">
                        <div className="flex flex-grow items-center border rounded">
                            <button
                                onClick={decreaseQuantity}
                                className="px-3 py-2 hover:bg-[#DB4444] rounded hover:text-white transition-colors "
                            >
                                -
                            </button>
                            <span className="px-4 flex-grow text-center">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="px-3 py-2 hover:bg-[#DB4444] rounded hover:text-white transition-colors"
                            >
                                +
                            </button>
                        </div>

                        <button onClick={() => addToCart(product.id, quantity)} className="bg-[#DB4444] flex-grow text-white px-6 py-2 rounded hover:bg-[#c13333] transition-colors">
                            Buy Now
                        </button>

                        <button
                            onClick={() => addToWishlist(product.id)}
                            className="p-2 border border-gray-300 rounded hover:bg-gray-100 "
                        >
                            <HeartIcon className="h-6 w-6 text-gray-600 hover:text-[#DB4444]" />
                        </button>
                    </div>

                    {/* Delivery info */}
                    <div className=" border rounded border-gray-500">
                        <div className="flex items-start gap-4 p-4 ">
                            <svg width="28" height="28" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10840_3517)">
                                    <path d="M12.1663 31.6667C14.0073 31.6667 15.4997 30.1743 15.4997 28.3333C15.4997 26.4924 14.0073 25 12.1663 25C10.3254 25 8.83301 26.4924 8.83301 28.3333C8.83301 30.1743 10.3254 31.6667 12.1663 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.83301 28.3335H7.49967C6.3951 28.3335 5.49967 27.4381 5.49967 26.3335V21.6668M3.83301 8.3335H20.1663C21.2709 8.3335 22.1663 9.22893 22.1663 10.3335V28.3335M15.4997 28.3335H25.4997M32.1663 28.3335H33.4997C34.6042 28.3335 35.4997 27.4381 35.4997 26.3335V18.3335M35.4997 18.3335H22.1663M35.4997 18.3335L31.0823 10.9712C30.7208 10.3688 30.0698 10.0002 29.3673 10.0002H22.1663" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.5 11.8181H12.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.31836 15.4546H8.98503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.5 19.0908H12.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10840_3517">
                                        <rect width="40" height="40" fill="black" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <div className="font-medium">Free Delivery</div>
                                <div className="text-sm text-gray-500 underline">
                                    Enter your postal code for Delivery Availability
                                </div>
                            </div>
                        </div>
                        <div className=" border-t border-gray-500  "></div>
                        <div className="flex items-start gap-4 p-4 ">
                            <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <div>
                                <div className="font-medium">Return Delivery</div>
                                <div className="text-sm text-gray-500">
                                    Free 30 Days Delivery Returns. Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
            <RelatedItem></RelatedItem>
        </div>
    );
};

export default ProductDetails;