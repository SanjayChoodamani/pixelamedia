import React from 'react'
import { Link } from 'react-router-dom'

const SeeBrand = ({ isVisible }) => {
    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .absolute:nth-child(n) {
                    animation: float 8s ease-in-out infinite;
                }
            `}</style>

            <div className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-br from-[#00B78E] to-[#002E90] overflow-hidden relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="overflow-hidden">
                        <h1 className={`font-['Space_Grotesk'] text-3xl md:text-5xl font-bold mb-12 text-white leading-tight transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}>
                            Your Brand Deserves to Be Seen
                        </h1>
                    </div>

                    <div className={`flex flex-col md:flex-row gap-6 justify-center items-center mt-10 transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                        <Link to="/contact">
                            <button className="group px-8 py-4 rounded-full font-medium text-black text-lg bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg min-w-[200px] hover:scale-105 transform">
                                Contact Us
                            </button>
                        </Link>

                        <Link to="/services">
                            <button className="group px-8 py-4 rounded-full font-medium text-white text-lg bg-transparent border-2 border-white hover:bg-white/10 transition-all duration-300 min-w-[200px] hover:scale-105 transform">
                                View Our Work
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SeeBrand