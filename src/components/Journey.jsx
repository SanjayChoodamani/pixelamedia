import React from 'react'

const journeyData = [
    { number: 20, description: 'Service Provided' },
    { number: 50, description: 'Happy Clients' },
    { number: 15, description: 'Team Members' },
    { number: 4, description: 'Years of Experience' }
]

const JourneyCard = ({ number, description }) => {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00B78E]/10 border border-gray-800 text-center flex flex-col items-center">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">{number}+</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const Journey = () => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side content */}
                <div className="mb-8 md:mb-0">
                    <h1 className="text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        From Pixels to Progress
                    </h1>
                    <span className="block w-20 h-1 bg-gradient-to-r from-[#00B78E] to-[#002E90] mb-6"></span>
                    <p className="text-gray-300 font-['Poppins'] text-lg">
                        We believe in the power of digital transformation. Our journey began with a simple mission: to help businesses thrive in the digital age through innovative design and strategic thinking.
                    </p>
                </div>
                
                {/* Right side cards in 2x2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {journeyData.map((item, index) => (
                        <JourneyCard 
                            key={index} 
                            number={item.number} 
                            description={item.description} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Journey