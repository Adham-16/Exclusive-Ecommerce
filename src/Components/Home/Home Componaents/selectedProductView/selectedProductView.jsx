import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SelectedProductView({ setSelectedProduct, selectedProduct }) {

    // Close modal when clicking outside
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedProduct(null);
        }
    };
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
                        <button
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                            onClick={() => setSelectedProduct(null)}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/2">
                                    <img
                                        src={selectedProduct.thumbnail}
                                        alt={selectedProduct.title}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.round(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-gray-500 text-sm ml-1">
                                            ({selectedProduct.rating} rating, {selectedProduct.stock} in stock)
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-[#DB4444] font-bold text-xl mr-2">
                                            ${selectedProduct.price}
                                        </span>
                                        {selectedProduct.discountPercentage && (
                                            <span className="text-gray-500 text-sm line-through">
                                                ${(selectedProduct.price / (1 - selectedProduct.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                        )}
                                        {selectedProduct.discountPercentage && (
                                            <span className="ml-2 text-sm bg-[#DB4444] text-white px-2 py-1 rounded">
                                                {selectedProduct.discountPercentage}% OFF
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                                    <div className="mb-4">
                                        <h3 className="font-semibold mb-2">Brand: {selectedProduct.brand}</h3>
                                        <h3 className="font-semibold">Category: {selectedProduct.category}</h3>
                                    </div>

                                    <button className="w-full py-3 bg-[#DB4444] text-white rounded hover:bg-[#b33c3c]">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
