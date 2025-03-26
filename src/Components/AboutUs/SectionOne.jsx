import React from 'react'

export function SectionOne() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 flex flex-col items-center lg:items-start">
                    <h1 className="text-4xl w-fit font-semibold mb-4">Our Story</h1>
                    <div className='w-[89%]  space-y-5'>
                        <p className="text-sm text-center lg:text-left text-gray-950">
                            Launced in 2015, Exclusive is South Asia’s premier online
                            shopping makterplace with an active presense in Bangladesh.
                            Supported by wide range of tailored marketing, data and service solutions,
                            Exclusive has 10,500 sallers and 300 brands f and serves  3
                            millioons customers across the region.
                        </p>
                        <p className="text-sm text-center lg:text-left text-gray-950">
                            Exclusive has more than 1 Million products to offer, growing at a very fast.
                            Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 relative lg:left-0 flex lg:justify-end justify-center ">
                    <img
                        src="/Gem.jpeg"
                        alt="About the Company"
                        className="w-3/4 h-auto lg:me-[-80px]"
                    />
                </div>
            </div>
        </>
    )
}
