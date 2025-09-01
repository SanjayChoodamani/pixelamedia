import { HashLink } from 'react-router-hash-link'
import Bolt from '../assets/icons/bolt.png'
import Dev from '../assets/icons/dev.png'
import Edit from '../assets/icons/edit.png'
import Monitor from '../assets/icons/monitor.png'
import Section from '../assets/icons/section.png'
import Step from '../assets/icons/step.png'

const WhatWeDoData = [
    {
        icon: Step,
        title: 'Digital Marketing',
        description: 'Data-powered strategies to boost your visibility, engagement, and digital presence across all platforms.',
        link: '/services#what-we-offer'
    },
    {
        icon: Dev,
        title: 'Web Development',
        description: 'Custom, scalable, and fast websites built using modern web technologies and frameworks.',
        link: '/services#what-we-offer'
    },
    {
        icon: Section,
        title: 'UI/UX Design',
        description: 'User-centered designs that create intuitive, enjoyable experiences across all digital platforms.',
        link: '/services#what-we-offer'
    },
    {
        icon: Edit,
        title: 'Graphic Design',
        description: 'Stunning visuals, brand kits, and social...',
        link: '/services#what-we-offer'
    },
    {
        icon: Bolt,
        title: 'Product Marketing',
        description: 'From strategy to promotion — we help your product reach the right audience at the right time.',
        link: '/services#what-we-offer'
    },
    {
        icon: Monitor,
        title: 'Web Design',
        description: 'Pixel-perfect layouts with strong visual...',
        link: '/services#what-we-offer'
    }
]

const WhatWeDoCard = ({ icon, title, description, link, index, isVisible }) => {
    return (
        <div className={`bg-[#1a1a1a] p-6 rounded-lg transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-[#00B78E]/30 border border-gray-800 text-center flex flex-col items-center transform group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img src={icon} alt={title} className="h-16 w-16 mb-4" />
            </div>
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base mb-6">{description}</p>
            <HashLink
                smooth
                to={link}
                className="text-[#00B78E] font-['Space_Grotesk'] font-medium hover:text-white transition-colors duration-300 flex items-center gap-2 group-hover:scale-105"
            >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </HashLink>
        </div>
    )
}

const WhatWeDo = ({ isVisible }) => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-[#00B78E]/5 to-[#002E90]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-[#002E90]/5 to-[#00B78E]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
                <div className="overflow-hidden">
                    <h1 className={`text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                        What We Do
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WhatWeDoData.map((item, index) => (
                        <WhatWeDoCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
