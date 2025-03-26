import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionThree.css'
import { FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

export function SectionThree() {




    const teamMembers = [
        {
            image: '/man1.png',
            name: 'Tom Cruise',
            position: 'Founder & Chairman',
            social: {
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },
        {
            image: '/man1.png',
            name: 'Emma Watson',
            position: 'Managing Director',
            social: {
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        }, {
            image: '/man2.png',
            name: 'Will Smith',
            position: 'Product Designer',
            social: {
                twitter: '#',
                instagram: '#',
                linkedin: '#'
            }
        },

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
            <div className="mb-40 Slider">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="px-3">
                            <div className="bg-white h-full text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className=" h-[350px] w-full px-5 bg-[#f5f5f5] mb-4 object-contain"
                                />
                                <div className='flex flex-col justify-start'>
                                    <h3 className="text-xl w-fit font-medium mb-1">{member.name}</h3>
                                    <p className="text-black text-sm w-fit mb-2">{member.position}</p>
                                    <div className="flex space-x-4">
                                        <a href={member.social.twitter} className=" hover:text-blue-600">
                                            <FaTwitter size={20} />
                                        </a>
                                        <a href={member.social.instagram} className=" hover:text-pink-700">
                                            <FaInstagram size={20} />
                                        </a>
                                        <a href={member.social.linkedin} className=" hover:text-blue-800">
                                            <FaLinkedinIn size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
