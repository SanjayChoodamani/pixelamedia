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

const Card = ({ title, description }) => {
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#00B78E]/10 border border-gray-800 text-center flex flex-col items-center">
            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-xl md:text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const WhoWeAre = () => {
    return (
        <div className="py-10w md:py-24 px-6 md:px-16 bg-[#111111]">
            <h1 className="text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Who We Are
            </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default WhoWeAre