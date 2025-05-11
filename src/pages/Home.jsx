import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import WhatWeDo from '../components/WhatWeDo'
import Innovators from '../components/Innovators'
import Journey from '../components/Journey'
import SeeBrand from '../components/SeeBrand'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <WhoWeAre/>
            <WhatWeDo/>
            <Innovators/>
            <Journey/>
            <SeeBrand/>
            <Footer/>
            <Whatsapp/>
        </div>
    )
}

export default Home
