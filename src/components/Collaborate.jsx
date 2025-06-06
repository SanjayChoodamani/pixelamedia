import React, { useState } from 'react'
import Location from '../assets/icons/location.png'

const Collaborate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Replace with your Google Apps Script Web App URL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1_JBwL9nOfI_Fe3LteDWoX_O88sZ9rIuGDKDrV1HhbeeOOWB9Sd-UJcH9xa1OTrGs/exec';
            
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors' 
            });
            
            setStatus({ 
                submitting: false, 
                submitted: true, 
                error: null 
            });
            
            // Clear form
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: 'Failed to submit. Please try again.' 
            });
        }
    };

    return (
        <div className="py-16 md:py-10 px-6 md:px-16 bg-[#111111]">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00B78E] to-[#002E90] bg-clip-text text-transparent">
                    Let's Collaborate
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form - Left Side */}
                    <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 shadow-lg">
                        <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-2xl font-semibold mb-6">
                            Get in Touch
                        </h2>
                        
                        {status.submitted && (
                            <div className="bg-green-900/30 text-green-300 p-4 mb-6 rounded-md border border-green-800">
                                Thank you! Your message has been submitted.
                            </div>
                        )}
                        
                        {status.error && (
                            <div className="bg-red-900/30 text-red-300 p-4 mb-6 rounded-md border border-red-800">
                                {status.error}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name" 
                                    required
                                    className="w-full bg-[#242424] text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-[#00B78E] focus:text-white focus:bg-[#242424] transition-colors duration-300"
                                />
                            </div>
                            <div className="mb-6">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email" 
                                    required
                                    className="w-full bg-[#242424] text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-[#00B78E] focus:text-white focus:bg-[#242424] transition-colors duration-300"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea 
                                    rows="5" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    className="w-full bg-[#242424] text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-[#00B78E] focus:text-white focus:bg-[#242424] transition-colors duration-300 resize-none"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                disabled={status.submitting}
                                className="w-full px-6 py-3 rounded-full font-medium text-white text-lg bg-gradient-to-r from-[#00B78E] to-[#002E90] hover:shadow-lg transition-all duration-300 font-['Space_Grotesk'] disabled:opacity-70"
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information - Right Side */}
                    <div className="flex flex-col justify-between">
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 shadow-lg mb-6">
                            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-2xl font-semibold mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <img src={Location} alt="Location" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h3 className="text-white font-['Poppins'] font-medium">Address</h3>
                                        <p className="text-gray-300">Hassan, 573201</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <svg className="w-6 h-6 mt-1 text-[#00B78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-white font-['Poppins'] font-medium">Email</h3>
                                        <a href="mailto:pixelamedia@gmail.com" className="text-gray-300 hover:text-[#00B78E] transition-colors duration-300">
                                            pixelamedia@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <svg className="w-6 h-6 mt-1 text-[#00B78E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div>
                                        <h3 className="text-white font-['Poppins'] font-medium">Phone</h3>
                                        <a href="tel:+918867570215" className="text-gray-300 hover:text-[#00B78E] transition-colors duration-300">
                                            +91 88675 70215
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 shadow-lg">
                            <h2 className="text-[#00B78E] font-['Space_Grotesk'] text-2xl font-semibold mb-6">
                                Follow Us
                            </h2>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/profile.php?id=61575339745398&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bg-[#242424] p-3 rounded-full text-white hover:text-[#00B78E] transition-colors duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/pixelamedia.in?igsh=bzdoMzlsb2FjeTNm" target="_blank" rel="noopener noreferrer" className="bg-[#242424] p-3 rounded-full text-white hover:text-[#00B78E] transition-colors duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/pixelamedia/" target="_blank" rel="noopener noreferrer" className="bg-[#242424] p-3 rounded-full text-white hover:text-[#00B78E] transition-colors duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaborate