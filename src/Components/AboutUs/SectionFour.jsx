import React from 'react'

export function SectionFour() {

    const services = [
        {
            icon: '🚀',
            title: 'Fast Delivery',
            description: 'We ensure your order reaches you as quickly as possible.'
        },
        {
            icon: '🛡️',
            title: 'Quality Assurance',
            description: 'All our products undergo quality inspection.'
        },
        {
            icon: '💬',
            title: 'Technical Support',
            description: 'Our support team is available 24/7.'
        }
    ];

    return (
        <>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
