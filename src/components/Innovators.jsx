import React, { useRef, useEffect, useState } from 'react'
import Achiever from '../assets/images/achiever.jpg'
import BGS from '../assets/images/bgs.jpg'
import Palaka from '../assets/images/palaka.png'
import Pt3 from '../assets/images/pt3.jpg'
import Reeford from '../assets/images/reeford.png'
import Sai from '../assets/images/sai.jpg'
import Sj from '../assets/images/sj.jpg'
import Vidya from '../assets/images/vidya.jpg'

const innovatorLogos = [
    { id: 1, name: 'Company 1', image: Achiever },
    { id: 2, name: 'Company 2', image: BGS },
    { id: 3, name: 'Company 3', image: Palaka },
    { id: 4, name: 'Company 4', image: Pt3 },
    { id: 5, name: 'Company 5', image: Reeford },
    { id: 6, name: 'Company 6', image: Sai },
    { id: 7, name: 'Company 7', image: Sj },
    { id: 8, name: 'Company 8', image: Vidya },
];

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

const Innovators = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const [observerRef, isVisible] = useIntersectionObserver();

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const container = containerRef.current;
        if (!scrollContainer || !container) return;

        // Clone items for seamless loop
        const originalItems = Array.from(scrollContainer.children);
        originalItems.forEach(item => {
            scrollContainer.appendChild(item.cloneNode(true));
        });
        
        let scrollPosition = 0;
        const speed = 1; // Adjust speed as needed
        
        const scroll = () => {
            if (!scrollContainer || !scrollContainer.isConnected) return;
            
            scrollPosition += speed;
            
            // Reset position when scrolled halfway through
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            
            scrollContainer.scrollLeft = scrollPosition;
            animationRef.current = requestAnimationFrame(scroll);
        };
        
        // Start animation
        animationRef.current = requestAnimationFrame(scroll);
        
        // Pause on hover
        const handleMouseEnter = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };
        
        const handleMouseLeave = () => {
            if (!animationRef.current) {
                animationRef.current = requestAnimationFrame(scroll);
            }
        };
        
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (container) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div ref={observerRef} className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] overflow-hidden relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-[#00B78E]/5 to-[#002E90]/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-[#002E90]/5 to-[#00B78E]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="overflow-hidden">
                        <h1 className={`text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center transition-all duration-1000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}>
                            Trusted By Innovators
                        </h1>
                    </div>

                    <div 
                        ref={containerRef} 
                        className={`relative overflow-hidden transition-all duration-1000 ease-out delay-400 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                    >
                        <div
                            ref={scrollRef}
                            className="flex items-center space-x-12 overflow-x-auto whitespace-nowrap py-8 hide-scrollbar"
                        >
                            {innovatorLogos.map((logo, index) => (
                                <div 
                                    key={`${logo.id}-${index}`} 
                                    className="flex-shrink-0 transition-all duration-300 hover:scale-105 bg-[#1a1a1a] p-4 md:p-6 rounded-lg border border-gray-800 flex items-center justify-center hover:shadow-xl hover:shadow-[#00B78E]/10"
                                    style={{ minWidth: '160px' }}
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="h-14 md:h-20 w-28 md:w-40 object-contain transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Innovators;