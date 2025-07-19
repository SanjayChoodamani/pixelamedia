import React from 'react'
import Step from '../assets/icons/step.png'
import Dev from '../assets/icons/dev.png'
import Section from '../assets/icons/section.png'
import Edit from '../assets/icons/edit.png'
import Monitor from '../assets/icons/monitor.png'
import Bolt from '../assets/icons/bolt.png'

const servicesData = [
    {
        icon: Step,
        title: 'Digital Marketing',
        description: 'Data-powered strategies to boost your visibility, engagement, and digital presence across all platforms.',
        features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    },
    {
        icon: Dev,
        title: 'Web Development',
        description: 'Custom, scalable, and fast websites built using modern web technologies and frameworks.',
        features: ['React Development', 'Node.js Backend', 'Database Design', 'API Integration'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    },
    {
        icon: Section,
        title: 'UI/UX Design',
        description: 'User-centered designs that create intuitive, enjoyable experiences across all digital platforms.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    },
    {
        icon: Edit,
        title: 'Graphic Design',
        description: 'Stunning visuals, brand kits, and creative assets that make your brand stand out.',
        features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Assets'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    },
    {
        icon: Bolt,
        title: 'Product Marketing',
        description: 'From strategy to promotion — we help your product reach the right audience at the right time.',
        features: ['Market Research', 'Launch Strategy', 'Campaign Management', 'Analytics'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    },
    {
        icon: Monitor,
        title: 'Web Design',
        description: 'Pixel-perfect layouts with strong visual hierarchy and modern design principles.',
        features: ['Responsive Design', 'Landing Pages', 'E-commerce Design', 'Mobile Optimization'],
        link: `https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services`
    }
]

const ServiceCard = ({ icon, title, description, features, link, index, isVisible }) => {
    return (
        <div className={`bg-[#1a1a1a] p-8 rounded-lg transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-[#00B78E]/30 border border-gray-800 flex flex-col transform group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="flex items-center mb-6">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <img src={icon} alt={title} className="h-12 w-12 mr-4" />
                </div>
                <h3 className="text-[#00B78E] font-['Space_Grotesk'] text-xl font-semibold">{title}</h3>
            </div>
            
            <p className="text-gray-300 font-['Poppins'] text-sm mb-6 flex-grow">{description}</p>
            
            <ul className="space-y-2 mb-6">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-[#00B78E] rounded-full mr-3"></div>
                        {feature}
                    </li>
                ))}
            </ul>
            
            <a 
                href={link} 
                className="bg-gradient-to-r from-[#00B78E] to-[#002E90] text-white px-6 py-3 rounded-lg font-medium text-center hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
            >
                Get Started
            </a>
        </div>
    )
}

const WhatWeOffer = ({ isVisible }) => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00B78E]/5 to-[#002E90]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#002E90]/5 to-[#00B78E]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="overflow-hidden">
                        <h1 className={`text-white font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                            What We Offer
                        </h1>
                    </div>
                    
                    <div className="overflow-hidden">
                        <p className={`text-gray-300 font-['Poppins'] text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            Comprehensive digital solutions tailored to your business needs. From design to development, we've got you covered.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            link={service.link}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer