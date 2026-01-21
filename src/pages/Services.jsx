import React from 'react';
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';
import comingSoonImg from '../assets/comingsoon.webp';

const Services = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow flex items-center justify-center pt-20">
                <div className="max-w-4xl w-full px-4">
                    <img
                        src={comingSoonImg}
                        alt="Services Coming Soon"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
            <NewFooter />
        </div>
    );
};

export default Services;
