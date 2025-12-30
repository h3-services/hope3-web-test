import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/Donate.css';

// Initialize Supabase client
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

const Donate = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (error) setError('');
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            setError('Please enter your full name');
            return false;
        }
        if (!formData.email.trim()) {
            setError('Please enter your email address');
            return false;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return false;
        }
        if (!formData.contactNumber.trim()) {
            setError('Please enter your contact number');
            return false;
        }
        // Basic phone validation (at least 10 digits)
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(formData.contactNumber)) {
            setError('Please enter a valid contact number');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setError('');

        try {
            const { error: supabaseError } = await supabase
                .from('donors')
                .insert([
                    {
                        name: formData.fullName,
                        email: formData.email,
                        contact_no: formData.contactNumber
                    }
                ]);

            if (supabaseError) {
                throw supabaseError;
            }

            setSuccess(true);
            setFormData({
                fullName: '',
                email: '',
                contactNumber: ''
            });
        } catch (err) {
            console.error('Error submitting donation:', err);
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="donate-page">
            <Navbar />

            {/* Hero Section */}
            <section className="donate-hero">
                <div className="donate-hero-content">
                    <h1 className="donate-hero-title">Support a Student. Change a Life.</h1>
                    <p className="donate-hero-description">
                        Your generosity makes a profound difference. Every contribution to HOPE3
                        helps provide quality education, mentorship, and life-changing opportunities
                        to students who dream of a brighter future. Together, we can break the cycle
                        of poverty and empower the next generation of leaders.
                    </p>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="donate-form-section">
                <div className="donate-card">
                    {success ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Thank you for supporting HOPE3!</h2>
                            <p>Your commitment to education means the world to us. We'll be in touch soon.</p>
                            <button
                                className="donate-again-btn"
                                onClick={() => setSuccess(false)}
                            >
                                Make Another Donation
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="form-title">Become a HOPE3 Donor</h2>
                            <p className="form-subtitle">
                                Fill in your details below and our team will connect with you
                                to complete your donation.
                            </p>

                            <form onSubmit={handleSubmit} className="donate-form">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="form-input"
                                        disabled={loading}
                                        aria-required="true"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="form-input"
                                        disabled={loading}
                                        aria-required="true"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactNumber" className="form-label">
                                        Contact Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your contact number"
                                        className="form-input"
                                        disabled={loading}
                                        aria-required="true"
                                    />
                                </div>

                                {error && (
                                    <div className="error-message" role="alert">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="donate-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loading-spinner">
                                            <span className="spinner"></span>
                                            Processing...
                                        </span>
                                    ) : (
                                        'Donate Now'
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </section>

            <NewFooter />
        </div>
    );
};

export default Donate;
