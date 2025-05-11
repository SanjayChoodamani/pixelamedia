import React, { useRef, useEffect } from 'react'
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
    { id: 4, name: 'Company 4', image: Pt3 },
    { id: 5, name: 'Company 5', image: Reeford },
    { id: 6, name: 'Company 6', image: Sai },
    { id: 7, name: 'Company 7', image: Sj },
    { id: 8, name: 'Company 8', image: Vidya },
    { id: 3, name: 'Company 3', image: Palaka },
];

const Innovators = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const container = containerRef.current;
        if (!scrollContainer || !container) return;

        // Clone logos to create a continuous scroll effect
        const cloneItems = () => {
            const items = scrollContainer.children;
            const itemWidth = items[0].offsetWidth + 48; // width + margin
            const totalWidth = itemWidth * items.length;
            
            // Make sure the animation has enough content to scroll continuously
            if (scrollContainer.offsetWidth > totalWidth / 2) {
                // Clone more items if needed
                Array.from(items).slice(0, items.length / 2).forEach(item => {
                    scrollContainer.appendChild(item.cloneNode(true));
                });
            }
        };
        
        cloneItems();
        
        let scrollPosition = 0;
        const speed = 1; // Adjust speed as needed
        
        const scroll = () => {
            if (!scrollContainer.isConnected) return; // Stop if element is removed
            
            scrollPosition += speed;
            
            // Reset position when we reach the end of original items
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            
            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(scroll);
        };
        
        const scrollAnimation = requestAnimationFrame(scroll);
        
        // Add pause on hover
        const handleMouseEnter = () => cancelAnimationFrame(scrollAnimation);
        const handleMouseLeave = () => requestAnimationFrame(scroll);
        
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            cancelAnimationFrame(scrollAnimation);
            if (container) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="py-16 md:py-24 px-6 md:px-16 bg-[#111111] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-white font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                    Trusted By Innovators
                </h1>

                {/* Carousel container with ref for better control */}
                <div 
                    ref={containerRef} 
                    className="relative overflow-hidden"
                >
                    <div
                        ref={scrollRef}
                        className="flex items-center space-x-12 overflow-x-auto whitespace-nowrap py-8"
                        style={{ 
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none',
                            '::-webkit-scrollbar': { display: 'none' }
                        }}
                    >
                        {innovatorLogos.map((logo) => (
                            <div 
                                key={`${logo.id}`} 
                                className="flex-shrink-0 transition-all duration-300 hover:scale-105 bg-[#1a1a1a] p-4 md:p-6 rounded-lg border border-gray-800 flex items-center justify-center"
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
                    
                    {/* Gradient overlays for fading effect */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10" />
                </div>
            </div>
        </div>
    );
};

export default Innovators;