import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';
import bannerImg from '../assets/feedback/banner.jpeg';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const Feedback = () => {
    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    // Auto-expand textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [formData.message]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add submission logic here
        alert('Thank you for your feedback!');
        setFormData({ name: '', mobile: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Feedback Banner"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/30">
                    <h1 className="text-white text-xl md:text-2xl font-bold text-center max-w-4xl leading-tight drop-shadow-2xl uppercase" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                        As we receive feedback it gives us the opportunity to improve.
                    </h1>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-16 -mt-24 relative z-10 max-w-5xl">
                {/* Content Container (Flat) */}
                <section className="py-8 px-6 bg-blue-50 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-gray-100 max-w-2xl mx-auto">
                    {/* HOPE3 Intro Text */}
                    <div className="py-2 text-center text-gray-800 mb-8">
                        <p className="leading-relaxed text-gray-700 text-left" style={{ fontSize: '16px' }}>
                            HOPE3 strives on endless learning and opportunities to improve what we do.
                            We take feedback constructively to find better ways to help the future
                            of the organization and its impact on society.
                        </p>
                    </div>

                    {/* Feedback Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1.5 text-base">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all text-base"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Mobile Input */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1.5 text-base">
                                    Your Mobile <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all text-base"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1.5 text-base">
                                    Your E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all text-base"
                                />
                            </div>
                        </div>

                        {/* Message Area */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1.5 text-base">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                ref={textareaRef}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all text-base min-h-[140px] resize-none overflow-hidden"
                            ></textarea>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-12 rounded-xl font-bold text-base hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl mt-4 min-w-[200px]"
                            >
                                <span className="text-white">Send Feedback</span>
                                <Send size={20} color="white" className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <NewFooter />
        </div>
    );
};

export default Feedback;
