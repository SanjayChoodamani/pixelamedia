import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#111111] text-white w-full z-50 shadow-lg box-border">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 md:px-8">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="logo" className="h-10 w-10" />
                    <p className="text-xl font-semibold">PixelaMedia</p>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-8">
                        {['Home', 'About Us', 'Projects', 'Services', 'Contact'].map((item, index) => (
                            <li key={index} className="group relative cursor-pointer">
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                                      className="py-2 font-medium transition-colors duration-300 group-hover:text-[#02a581]">
                                    {item}
                                    {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#02a581] group-hover:w-full transition-all duration-300"></span> */}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {!isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden py-3 border-t border-gray-700 px-4">
                    <ul className="flex flex-col space-y-4">
                        {['Home', 'About Us', 'Projects', 'Services', 'Contact'].map((item, index) => (
                            <li key={index} className="group">
                                <Link 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                                    className="block py-2 relative overflow-hidden transition-colors duration-300 group-hover:text-[#02a581]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#02a581] group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar