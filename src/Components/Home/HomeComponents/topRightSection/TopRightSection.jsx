import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function TopRightSection() {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const categories = [
        {
            id: 1,
            name: "Women's Fashion",
            subcategories: [
                { slug: "womens-bags", name: "Bags" },
                { slug: "womens-dresses", name: "Dresses" },
                { slug: "womens-jewellery", name: "Jewellery" },
                { slug: "womens-shoes", name: "Shoes" },
                { slug: "womens-watches", name: "Watches" }
            ]
        },
        {
            id: 2,
            name: "Men's Fashion",
            subcategories: [
                { slug: "mens-shirts", name: "Shirts" },
                { slug: "mens-shoes", name: "Shoes" },
                { slug: "mens-watches", name: "Watches" }
            ]
        },
        {
            id: 3,
            name: "Electronics",
            subcategories: [
                { slug: "smartphones", name: "Smartphones" },
                { slug: "laptops", name: "Laptops" },
                { slug: "tablets", name: "Tablets" }
            ]
        },
        {
            id: 4,
            name: "Home and Lifestyle",
            subcategories: [
                { slug: "home-decoration", name: "Decoration" },
                { slug: "furniture", name: "Furniture" },
                { slug: "lighting", name: "Lighting" }
            ]
        },
        {
            id: 5,
            name: "Medicine",
            subcategories: [
                { slug: "skin-care", name: "Skin Care" },
                { slug: "fragrances", name: "Fragrances" }
            ]
        }
    ];

    const toggleCategory = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <div className='flex flex-col justify-start ps-3 pe-7 pt-10 border-e-2 space-y-3'>
            {categories.map(category => (
                <div key={category.id} className="space-y-1">
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
                        onClick={() => toggleCategory(category.id)}
                    >
                        <span className="font-medium">{category.name}</span>
                        <svg
                            width="8"
                            height="13"
                            viewBox="0 0 8 13"
                            fill="none"
                            className={`transform ${expandedCategory === category.id ? 'rotate-90' : ''} transition-transform`}
                        >
                            <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black" />
                        </svg>
                    </div>

                    {expandedCategory === category.id && (
                        <div className="ml-4 space-y-2">
                            {category.subcategories.map(sub => (
                                <Link
                                    key={sub.slug}
                                    to={`/products/category/${sub.slug}`}
                                    className="block text-sm hover:text-[#db4444] p-1 hover:bg-gray-50 rounded"
                                >
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}