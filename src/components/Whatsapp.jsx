import React from 'react'
import WhatsappLogo from '../assets/images/whatsapp.png'

const Whatsapp = () => {
    const phoneNumber = "918867570215";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%2C%20I'm%20interested%20in%20your%20services`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-8 z-50 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>

                {/* WhatsApp image as button */}
                <div className="relative transform hover:scale-110 transition-all duration-300 hover:shadow-xl">
                    <img
                        src={WhatsappLogo}
                        alt="WhatsApp"
                        className="w-15 h-15 rounded-full object-contain shadow-lg"
                    />
                </div>
            </div>
        </a>
    )
}

export default Whatsapp