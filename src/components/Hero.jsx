import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .floating-particle {
                    animation: float 8s ease-in-out infinite;
                }
                
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animated-gradient {
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease infinite;
                }
                
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                
                .custom-pulse {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
            `}</style>

            <div className="flex flex-col justify-center items-center h-[90dvh] px-6 md:px-16 bg-[#111111] font-space-grotesk relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00B78E]/10 to-[#002E90]/10 rounded-full blur-3xl custom-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#002E90]/10 to-[#00B78E]/10 rounded-full blur-3xl custom-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="floating-particle absolute w-1 h-1 bg-gradient-to-r from-[#00B78E] to-[#002E90] rounded-full opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Main heading with staggered animation */}
                    <div className="overflow-hidden">
                        <h1 className={`font-['Space_Grotesk'] text-3xl md:text-5xl lg:text-7xl font-bold mb-2 leading-tight bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent animated-gradient transition-all duration-1000 ease-out ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                            Designing Success,
                        </h1>
                    </div>
                    
                    <div className="overflow-hidden">
                        <h1 className={`font-['Space_Grotesk'] text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent animated-gradient transition-all duration-1000 ease-out delay-200 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                            Pixel by Pixel
                        </h1>
                    </div>

                    {/* Subtitle with fade-in animation */}
                    <p className={`text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-400 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        Where creativity meets technology to build extraordinary digital experiences
                    </p>

                    {/* Animated CTA button */}
                    <div className={`transition-all duration-1000 ease-out delay-600 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <a href="https://wa.me/918867570215?text=Hi%2C%20I'm%20interested%20in%20your%20services" className="group relative inline-block">
                        <button className="group relative px-8 py-4 rounded-full font-medium text-white text-lg bg-gradient-to-r from-[#00B78E] to-[#002E90] hover:from-[#00D4A5] hover:to-[#0040B0] transition-all duration-300 flex items-center gap-2 mx-auto font-[Space_Grotesk] hover:scale-105 hover:shadow-2xl hover:shadow-[#00B78E]/25 transform">
                            <span className="relative z-10">Let's Build Something Beautiful</span>
                            <ChevronRight 
                                size={20} 
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                            />
                            
                            {/* Button glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00B78E] to-[#002E90] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                        </button>
                    </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-800 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="flex flex-col items-center">
                        <div className="w-[2px] h-12 bg-gradient-to-b from-[#00B78E] to-transparent animate-pulse"></div>
                        <div className="w-1 h-1 bg-[#00B78E] rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;