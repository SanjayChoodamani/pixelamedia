import React from 'react'

const data = [
    {
        title: "Our Mission",
        description: "To transform digital landscapes through innovative design and strategic solutions that drive real business growth."
    },
    {
        title: "Our Values",
        description: "Excellence, innovation, and client success drive everything we do. We believe in creating lasting partnerships built on trust and results."
    },
    {
        title: "Our Stories",
        description: "Founded in 2020, Pixela Media has grown from a boutique design studio to a full-service digital solutions provider trusted by global brands."
    }
]

const Card = ({ title, description, index, isVisible }) => {
    return (
        <div className={`bg-[#1a1a1a] p-6 rounded-lg transition-all duration-700 ease-out hover:shadow-xl hover:shadow-[#00B78E]/10 border border-gray-800 text-center flex flex-col items-center transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}>
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const WhoWeAre = ({ isVisible }) => {
    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#00B78E]/5 to-[#002E90]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#002E90]/5 to-[#00B78E]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
                <div className="overflow-hidden">
                    <h1 className={`text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center transition-all duration-1000 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}>
                        Who We Are
                    </h1>
                </div>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <Card 
                            key={index} 
                            title={item.title} 
                            description={item.description} 
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre