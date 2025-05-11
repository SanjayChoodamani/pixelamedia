import React from 'react'
import { Link } from 'react-router-dom'

const SeeBrand = () => {
    return (
        <div className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-br from-[#00B78E] to-[#002E90] overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold mb-12 text-white leading-tight">
                    Your Brand Deserves to Be Seen
                </h1>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
                    <Link to="/contact">
                        <button className="px-8 py-4 rounded-full font-medium text-black text-lg bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg min-w-[200px]">
                            Contact Us
                        </button>
                    </Link>
                    
                    <Link to="/services">
                        <button className="px-8 py-4 rounded-full font-medium text-white text-lg bg-transparent border-2 border-white hover:bg-white/10 transition-all duration-300 min-w-[200px]">
                            View Our Work
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeeBrand