import React from 'react'
import { Link } from 'react-router-dom'
import RightArrow from '../assets/icons/rightArrow.png'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[90dvh] px-6 md:px-16 bg-[#111111]font-space-grotesk">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-5xl lg:text-7xl font-bold mb-2 leading-tight bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">
                    Designing Success,
                </h1>
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">
                    Pixel by Pixel
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Where creativity meets technology to build extraordinary digital experiences
                </p>

                <Link to="/contact">
                    <button className="px-8 py-2 rounded-full font-medium text-white text-lg bg-gradient-to-r from-[#00B78E] to-[#002E90] hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto font-[Space_Grotesk]">
                        Let's Build Something Beautiful
                        <img src={RightArrow} alt="right arrow" className="ml-1.5 w-5 mr-0 h-4" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero