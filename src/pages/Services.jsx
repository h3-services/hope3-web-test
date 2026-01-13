import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';

const Services = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-8 mt-20">
                <div className="lg:hidden mb-6">
                    <Link to="/" className="inline-flex items-center text-gray-700 hover:text-black transition-colors">
                        <FaArrowLeft className="mr-2" />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-6">Services Page</h1>
                <p>This is the services page content.</p>
            </div>
            <NewFooter />
        </div>
    );
};

export default Services;
