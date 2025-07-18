import React, { useState, useEffect, useRef } from 'react'

const journeyData = [
    { number: 20, description: 'Service Provided' },
    { number: 50, description: 'Happy Clients' },
    { number: 15, description: 'Team Members' },
    { number: 4, description: 'Years of Experience' }
]

// Counter animation hook
const useCounter = (target, duration = 2000, isVisible = false) => {
    const [count, setCount] = useState(0);
    const startTimeRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        const animate = (timestamp) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
            const currentCount = Math.floor(progress * target);
            
            setCount(currentCount);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            startTimeRef.current = null;
        };
    }, [target, duration, isVisible]);

    return count;
};

// Intersection Observer hook
const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
                ...options
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};

const JourneyCard = ({ number, description, index, isVisible }) => {
    const count = useCounter(number, 2000, isVisible);

    return (
        <div className={`bg-[#1a1a1a] p-6 rounded-lg transition-all duration-700 ease-out hover:shadow-xl hover:shadow-[#00B78E]/10 border border-gray-800 text-center flex flex-col items-center transform group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: `${600 + (index * 200)}ms` }}>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {count}+
            </h2>
            <p className="text-white font-['Poppins'] text-sm md:text-base">{description}</p>
        </div>
    )
}

const Journey = () => {
    const [elementRef, isVisible] = useIntersectionObserver();

    return (
        <div ref={elementRef} className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#00B78E]/5 to-[#002E90]/5 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left side content */}
                <div className="mb-8 md:mb-0">
                    <div className="overflow-hidden">
                        <h1 className={`text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                            From Pixels to Progress
                        </h1>
                    </div>
                    
                    <div className={`transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                        <span className="block w-20 h-1 bg-gradient-to-r from-[#00B78E] to-[#002E90] mb-6"></span>
                    </div>
                    
                    <div className="overflow-hidden">
                        <p className={`text-gray-300 font-['Poppins'] text-lg transition-all duration-1000 ease-out delay-400 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            We believe in the power of digital transformation. Our journey began with a simple mission: to help businesses thrive in the digital age through innovative design and strategic thinking.
                        </p>
                    </div>
                </div>
                
                {/* Right side cards in 2x2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {journeyData.map((item, index) => (
                        <JourneyCard 
                            key={index} 
                            number={item.number} 
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

export default Journey