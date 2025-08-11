import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import WhatWeDo from '../components/WhatWeDo'
import Innovators from '../components/Innovators'
import Journey from '../components/Journey'
import SeeBrand from '../components/SeeBrand'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import OurProjects from '../components/OurProjects' // <-- Add import

const Home = () => {
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
            <Hero/>
            <div id="who-we-are" data-animate>
                <WhoWeAre isVisible={visibleSections['who-we-are']} />
            </div>
            <div id="what-we-do" data-animate>
                <WhatWeDo isVisible={visibleSections['what-we-do']} />
            </div>
            <div id="our-projects" data-animate>
                <OurProjects isVisible={visibleSections['our-projects']} /> 
            </div>
            <div id="innovators" data-animate>
                <Innovators isVisible={visibleSections['innovators']} />
            </div>
            <div id="journey" data-animate>
                <Journey isVisible={visibleSections['journey']} />
            </div>
            <div id="see-brand" data-animate>
                <SeeBrand isVisible={visibleSections['see-brand']} />
            </div>
            <Footer/>
            <Whatsapp/>
        </div>
    )
}

export default Home