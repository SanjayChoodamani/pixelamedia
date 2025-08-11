import React, { useState } from 'react'

const ProjectCard = ({ image, category, title, description, link }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`relative bg-[#1a1a1a] rounded-lg border border-gray-800 shadow-lg flex flex-col overflow-hidden transition-all duration-300
                ${hovered ? 'shadow-[0_0_40px_0_rgba(0,183,142,0.5)] scale-[1.03] border-[#00B78E]' : 'hover:shadow-[0_0_40px_0_rgba(0,183,142,0.3)]'}
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-[#00B78E] mb-2 uppercase">{category}</span>
                <h2 className="text-white font-['Space_Grotesk'] text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-300 font-['Poppins'] text-sm mb-4 flex-1">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <div></div>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center text-[#00B78E] font-medium transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                }`}
                        >
                            View Project
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;