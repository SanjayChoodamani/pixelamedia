import React from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

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

const Projects = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 px-6 md:px-16 bg-[#111111]">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-[#00B78E]">Projects</h1>
                    <p className="text-gray-300 text-lg">Discover our work</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Projects