import React from 'react'
import bolt from '../assets/icons/bolt.png'
import flow from '../assets/icons/flow.png'
import dev from '../assets/icons/dev.png'

const data = [
    {
        logo: bolt,
        title: "Custom Solutions",
        description: "Tailored strategies and solutions for your unique needs"
    },
    {
        logo: flow,
        title: "Agile Approach",
        description: "Flexible and iterative development process"
    },
    {
        logo: dev,
        title: "Creative & Tech Harmony",
        description: "Perfect blend of design and functionality"
    }
]

const WhyChooseCard = ({ logo, title, description }) => {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00B78E]/10 border border-gray-800 text-center flex flex-col items-center">
            <img src={logo} alt={title} className="h-16 w-16 mb-4" />
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const WhyChoose = () => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111]">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">
                    Why Choose Pixela
                </h1>
                <p className="text-gray-300 text-xl md:text-2xl font-['Poppins']">
                    Excellence In Every Pixel
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <WhyChooseCard
                        key={index}
                        logo={item.logo}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhyChoose