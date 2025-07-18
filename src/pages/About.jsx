import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import WhoWeAre from '../components/WhoWeAre'
import Journey from '../components/Journey'
import Innovators from '../components/Innovators'
import SeeBrand from '../components/SeeBrand'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

const About = () => {
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
            <Navbar />
            <div id="who-we-are-about" data-animate>
                <WhoWeAre isVisible={visibleSections['who-we-are-about']} />
            </div>
            <div id="journey-about" data-animate>
                <Journey isVisible={visibleSections['journey-about']} />
            </div>
            <div id="innovators-about" data-animate>
                <Innovators isVisible={visibleSections['innovators-about']} />
            </div>
            <div id="see-brand-about" data-animate>
                <SeeBrand isVisible={visibleSections['see-brand-about']} />
            </div>
            <Footer/>
            <Whatsapp/>
        </div>
    )
}

export default About