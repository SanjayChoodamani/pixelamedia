import React from 'react'
import { Link } from 'react-router-dom'
import Step from '../assets/icons/step.png'
import Dev from '../assets/icons/dev.png'
import Section from '../assets/icons/section.png'
import Edit from '../assets/icons/edit.png'
import Monitor from '../assets/icons/monitor.png'
import Bolt from '../assets/icons/bolt.png'

const WhatWeDoData = [
    {
        icon: Step,
        title: 'Digital Marketing',
        description: 'Data-powered strategies to boost your visibility, engagement, and digital presence across all platforms.',
        link: '/'
    },
    {
        icon: Dev,
        title: 'Web Development',
        description: 'Custom, scalable, and fast websites built using modern web technologies and frameworks.',
        link: '/'
    },
    {
        icon: Section,
        title: 'UI/UX Design',
        description: 'User-centered designs that create intuitive, enjoyable experiences across all digital platforms.',
        link: '/'
    },
    {
        icon: Edit,
        title: 'Graphic Design',
        description: 'Stunning visuals, brand kits, and social...',
        link: '/'
    },
    {
        icon: Bolt,
        title: 'Product Marketing',
        description: 'From strategy to promotion — we help your product reach the right audience at the right time.',
        link: '/'
    },
    {
        icon: Monitor,
        title: 'Web Design',
        description: 'Pixel-perfect layouts with strong visual...',
        link: '/'
    }
]

const WhatWeDoCard = ({icon, title, description, link}) => {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00B78E]/30 border border-gray-800 text-center flex flex-col items-center">
            <img src={icon} alt={title} className="h-16 w-16 mb-4" />
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base mb-6">{description}</p>
            <Link 
                to={link} 
                className="text-[#00B78E] font-['Space_Grotesk'] font-medium hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>
        </div>
    )
}

const WhatWeDo = () => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111]">
            <h1 className="text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                What We Do
            </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {WhatWeDoData.map((item, index) => (
                    <WhatWeDoCard 
                        key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} 
                        link={item.link} 
                    />
                ))}
            </div>
        </div>
    )
}

export default WhatWeDo