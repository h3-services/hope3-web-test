import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen not-found-wrapper">
            <main className="not-found-container flex-grow">
                <div className="radial-overlay"></div>

                <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <h2 className="not-found-subtitle">Oops! Page Lost in the Journey</h2>
                    <p className="not-found-description">
                        The page you are looking for might have been moved, deleted, or never existed in the first place.
                        Let's get you back on the right path.
                    </p>

                    <Link to="/" className="back-home-btn">
                        <span>←</span> Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
