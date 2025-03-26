import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function SectionThree() {




    const teamMembers = [
        {
            image: '/team1.jpg',
            name: 'Ahmed Mohamed',
            position: 'CEO',
            social: {
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        // You can add more team members here
    ];

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="mb-16">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="px-3">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-500 mb-4">{member.position}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href={member.social.instagram} className="text-pink-500 hover:text-pink-700">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
