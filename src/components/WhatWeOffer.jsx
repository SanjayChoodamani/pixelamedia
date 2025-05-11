import React from 'react'
import Step from '../assets/icons/step.png'
import Dev from '../assets/icons/dev.png'
import Section from '../assets/icons/section.png'
import Edit from '../assets/icons/edit.png'
import Monitor from '../assets/icons/monitor.png'
import Bolt from '../assets/icons/bolt.png'

const WhatWeOfferData = [
    {
        icon: Step,
        title: 'Digital Marketing',
        description: 'Data-powered strategies to boost your visibility, engagement, and digital presence across all platforms.',
    },
    {
        icon: Dev,
        title: 'Web Development',
        description: 'Custom, scalable, and fast websites built using modern web technologies and frameworks.',
    },
    {
        icon: Section,
        title: 'UI/UX Design',
        description: 'User-centered designs that create intuitive, enjoyable experiences across all digital platforms.',
    },
    {
        icon: Edit,
        title: 'Graphic Design',
        description: 'Stunning visuals, brand kits, and social...',
    },
    {
        icon: Bolt,
        title: 'Product Marketing',
        description: 'From strategy to promotion — we help your product reach the right audience at the right time.',
    },
    {
        icon: Monitor,
        title: 'Web Design',
        description: 'Pixel-perfect layouts with strong visual...',
    }
]

const WhatWeOfferCard = ({icon, title, description}) => {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00B78E]/30 border border-gray-800 text-center flex flex-col items-center">
            <img src={icon} alt={title} className="h-16 w-16 mb-4" />
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const WhatWeOffer = () => {
    return (
        <div className="py-16 md:py-10 px-6 md:px-16 bg-[#111111]">
            <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">
                What We Offer
            </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {WhatWeOfferData.map((item, index) => (
                    <WhatWeOfferCard 
                        key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} 
                    />
                ))}
            </div>
        </div>
    )
}

export default WhatWeOffer