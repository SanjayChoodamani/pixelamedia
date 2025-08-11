import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

import Laskshmi from '../assets/images/project1.png'

const projects = [
    {
        image: Laskshmi,
        category: 'Web Development',
        title: 'Sri Lakshmi Tractors Tech',
        description: 'John Deere dealer in Hassan, Karnataka. Advanced tractors, implements, and expert support for modern farming.',
        link: 'https://www.srilakshmitractortech.com/'
    },
]

const OurProjects = ({ isVisible }) => {
    return (
        <div className={`py-16 px-6 md:px-16 bg-[#111111] transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-[#00B78E]">Our Projects</h1>
                <p className="text-gray-300 text-lg">Explore some of our featured work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/projects" className="inline-block bg-gradient-to-r from-[#00B78E] to-[#002E90] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300">
                    See All Projects
                </Link>
            </div>
        </div>
    )
}

export default OurProjects