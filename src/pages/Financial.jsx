import React from 'react';
import Navbar from './navbar';
import NewFooter from './NewFooter';
import '../styles/financial.css';

const Financial = () => {
    return (
        <div className="financial-page">
            <Navbar />

            <main className="financial-container">
                <div className="financial-header">
                    <h1 className="financial-title">Financial Information</h1>
                    <p className="financial-subtitle">
                        Transparency and accountability are core values at HOPE3 Foundation.
                        View our financial documents below.
                    </p>
                </div>

                <div className="financial-content">
                    <div className="pdf-viewer-container">
                        <div className="pdf-header">
                            <h3 className="pdf-title">2024 Federal Tax Return</h3>
                            <a
                                href="/hope3-web-test/2024-Federal-Tax-Return.pdf"
                                download
                                className="pdf-download-btn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download PDF
                            </a>
                        </div>

                        <div className="pdf-embed-wrapper">
                            <iframe
                                src="/hope3-web-test/2024-Federal-Tax-Return.pdf"
                                className="pdf-iframe"
                                title="2024 Federal Tax Return"
                            />
                        </div>
                    </div>

                    <div className="financial-info-box">
                        <h3>About Our Financials</h3>
                        <p>
                            HOPE3 Foundation is a registered 501(c)(3) non-profit organization
                            (EIN: 94-3184861). We are committed to maintaining the highest standards
                            of financial transparency and stewardship of donor contributions.
                        </p>
                        <p>
                            All donations are tax-deductible to the fullest extent allowed by law.
                            For questions about our financial information, please contact us at
                            <a href="mailto:info@hope3foundation.org"> info@hope3foundation.org</a>.
                        </p>
                    </div>
                </div>
            </main>

            <NewFooter />
        </div>
    );
};

export default Financial;
