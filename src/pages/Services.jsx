import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

const Services = () => {
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <div id="what-we-offer" data-animate>
                <WhatWeOffer isVisible={visibleSections['what-we-offer']} />
            </div>
            <div id="why-choose" data-animate>
                <WhyChoose isVisible={visibleSections['why-choose']} />
            </div>
            <Footer/>
            <Whatsapp/>
        </div>
    )
}

export default Services