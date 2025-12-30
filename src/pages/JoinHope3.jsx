import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import '../styles/JoinHope3.css';

// Initialize Supabase client
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

const JoinHope3 = () => {
    const [activeTab, setActiveTab] = useState('student');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Form states
    const [studentForm, setStudentForm] = useState({
        name: '', district: '', passion: '', email: '', contactNumber: ''
    });
    const [volunteerForm, setVolunteerForm] = useState({
        name: '', district: '', volunteerLocation: '', email: '', contactNumber: ''
    });
    const [donorForm, setDonorForm] = useState({
        name: '', email: '', contactNumber: ''
    });

    const tabs = [
        { id: 'student', label: 'I Want to Be a Student', icon: '🎓' },
        { id: 'volunteer', label: 'I Want to Volunteer', icon: '🤝' },
        { id: 'donate', label: 'I Want to Donate', icon: '💝' }
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setError('');
        setSuccess('');
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\+?[\d\s-]{10,}$/.test(phone);

    // Student Form Handler
    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        const { name, district, email, contactNumber } = studentForm;

        if (!name.trim() || !district.trim() || !email.trim() || !contactNumber.trim()) {
            setError('Please fill in all required fields');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (!validatePhone(contactNumber)) {
            setError('Please enter a valid contact number');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const { error: supabaseError } = await supabase
                .from('interest_students')
                .insert([{
                    name: studentForm.name,
                    district: studentForm.district,
                    passion: studentForm.passion || null,
                    email: studentForm.email,
                    contact_no: studentForm.contactNumber
                }]);

            if (supabaseError) throw supabaseError;

            setSuccess('Thank you for your interest! We will contact you soon about becoming a HOPE3 student.');
            setStudentForm({ name: '', district: '', passion: '', email: '', contactNumber: '' });
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Volunteer Form Handler
    const handleVolunteerSubmit = async (e) => {
        e.preventDefault();
        const { name, district, volunteerLocation, email, contactNumber } = volunteerForm;

        if (!name.trim() || !district.trim() || !volunteerLocation.trim() || !email.trim() || !contactNumber.trim()) {
            setError('Please fill in all required fields');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (!validatePhone(contactNumber)) {
            setError('Please enter a valid contact number');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const { error: supabaseError } = await supabase
                .from('volunteers')
                .insert([{
                    name: volunteerForm.name,
                    district: volunteerForm.district,
                    volunteer_location: volunteerForm.volunteerLocation,
                    email: volunteerForm.email,
                    contact_no: volunteerForm.contactNumber
                }]);

            if (supabaseError) throw supabaseError;

            setSuccess('Thank you for volunteering! Your contribution will help transform lives.');
            setVolunteerForm({ name: '', district: '', volunteerLocation: '', email: '', contactNumber: '' });
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Donor Form Handler
    const handleDonorSubmit = async (e) => {
        e.preventDefault();
        const { name, email, contactNumber } = donorForm;

        if (!name.trim() || !email.trim() || !contactNumber.trim()) {
            setError('Please fill in all required fields');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (!validatePhone(contactNumber)) {
            setError('Please enter a valid contact number');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const { error: supabaseError } = await supabase
                .from('donors')
                .insert([{
                    name: donorForm.name,
                    email: donorForm.email,
                    contact_no: donorForm.contactNumber
                }]);

            if (supabaseError) throw supabaseError;

            setSuccess('Thank you for supporting HOPE3! Your generosity changes lives.');
            setDonorForm({ name: '', email: '', contactNumber: '' });
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="join-hope3-page">
            <Navbar />

            {/* Hero Section */}
            <section className="join-hero">
                <div className="join-hero-content">
                    <h1>Join the HOPE3 Family</h1>
                    <p>Be part of a movement that transforms lives through education. Choose how you'd like to engage with us.</p>
                </div>
            </section>

            {/* Tab Section */}
            <section className="join-tabs-section">
                <div className="tabs-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab.id)}
                            disabled={loading}
                        >
                            <span className="tab-icon">{tab.icon}</span>
                            <span className="tab-label">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Form Cards */}
                <div className="form-cards-container">
                    {/* Student Form */}
                    <div className={`form-card ${activeTab === 'student' ? 'active' : ''}`}>
                        {success && activeTab === 'student' ? (
                            <div className="success-state">
                                <div className="success-icon">🎓</div>
                                <h2>Application Received!</h2>
                                <p>{success}</p>
                                <button className="reset-btn" onClick={() => setSuccess('')}>Submit Another</button>
                            </div>
                        ) : (
                            <>
                                <h2>Become a HOPE3 Student</h2>
                                <p className="form-description">Take the first step towards a brighter future. Fill in your details below.</p>
                                <form onSubmit={handleStudentSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="student-name">Name <span className="required">*</span></label>
                                        <input
                                            type="text" id="student-name" placeholder="Enter your full name"
                                            value={studentForm.name}
                                            onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="student-district">District <span className="required">*</span></label>
                                        <input
                                            type="text" id="student-district" placeholder="Enter your district"
                                            value={studentForm.district}
                                            onChange={(e) => setStudentForm({ ...studentForm, district: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="student-passion">Passion (Optional)</label>
                                        <input
                                            type="text" id="student-passion" placeholder="What are you passionate about?"
                                            value={studentForm.passion}
                                            onChange={(e) => setStudentForm({ ...studentForm, passion: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="student-email">Email <span className="required">*</span></label>
                                        <input
                                            type="email" id="student-email" placeholder="Enter your email"
                                            value={studentForm.email}
                                            onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="student-contact">Contact Number <span className="required">*</span></label>
                                        <input
                                            type="tel" id="student-contact" placeholder="Enter your phone number"
                                            value={studentForm.contactNumber}
                                            onChange={(e) => setStudentForm({ ...studentForm, contactNumber: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    {error && activeTab === 'student' && <div className="error-msg">{error}</div>}
                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? <span className="spinner"></span> : 'Apply Now'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Volunteer Form */}
                    <div className={`form-card ${activeTab === 'volunteer' ? 'active' : ''}`}>
                        {success && activeTab === 'volunteer' ? (
                            <div className="success-state">
                                <div className="success-icon">🤝</div>
                                <h2>Thank You!</h2>
                                <p>{success}</p>
                                <button className="reset-btn" onClick={() => setSuccess('')}>Submit Another</button>
                            </div>
                        ) : (
                            <>
                                <h2>Become a Volunteer</h2>
                                <p className="form-description">Share your skills and time to make a difference in students' lives.</p>
                                <form onSubmit={handleVolunteerSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-name">Name <span className="required">*</span></label>
                                        <input
                                            type="text" id="volunteer-name" placeholder="Enter your full name"
                                            value={volunteerForm.name}
                                            onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-district">District <span className="required">*</span></label>
                                        <input
                                            type="text" id="volunteer-district" placeholder="Enter your district"
                                            value={volunteerForm.district}
                                            onChange={(e) => setVolunteerForm({ ...volunteerForm, district: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-location">Where do you volunteer? <span className="required">*</span></label>
                                        <input
                                            type="text" id="volunteer-location" placeholder="City, organization, or remote"
                                            value={volunteerForm.volunteerLocation}
                                            onChange={(e) => setVolunteerForm({ ...volunteerForm, volunteerLocation: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-email">Email <span className="required">*</span></label>
                                        <input
                                            type="email" id="volunteer-email" placeholder="Enter your email"
                                            value={volunteerForm.email}
                                            onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteer-contact">Contact Number <span className="required">*</span></label>
                                        <input
                                            type="tel" id="volunteer-contact" placeholder="Enter your phone number"
                                            value={volunteerForm.contactNumber}
                                            onChange={(e) => setVolunteerForm({ ...volunteerForm, contactNumber: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    {error && activeTab === 'volunteer' && <div className="error-msg">{error}</div>}
                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? <span className="spinner"></span> : 'Join as Volunteer'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Donor Form */}
                    <div className={`form-card ${activeTab === 'donate' ? 'active' : ''}`}>
                        {success && activeTab === 'donate' ? (
                            <div className="success-state">
                                <div className="success-icon">💝</div>
                                <h2>Thank You!</h2>
                                <p>{success}</p>
                                <button className="reset-btn" onClick={() => setSuccess('')}>Donate Again</button>
                            </div>
                        ) : (
                            <>
                                <h2>Support HOPE3</h2>
                                <p className="form-description">Your contribution helps students achieve their dreams.</p>
                                <form onSubmit={handleDonorSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="donor-name">Name <span className="required">*</span></label>
                                        <input
                                            type="text" id="donor-name" placeholder="Enter your full name"
                                            value={donorForm.name}
                                            onChange={(e) => setDonorForm({ ...donorForm, name: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="donor-email">Email <span className="required">*</span></label>
                                        <input
                                            type="email" id="donor-email" placeholder="Enter your email"
                                            value={donorForm.email}
                                            onChange={(e) => setDonorForm({ ...donorForm, email: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="donor-contact">Contact Number <span className="required">*</span></label>
                                        <input
                                            type="tel" id="donor-contact" placeholder="Enter your phone number"
                                            value={donorForm.contactNumber}
                                            onChange={(e) => setDonorForm({ ...donorForm, contactNumber: e.target.value })}
                                            disabled={loading}
                                        />
                                    </div>
                                    {error && activeTab === 'donate' && <div className="error-msg">{error}</div>}
                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? <span className="spinner"></span> : 'Donate Now'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <NewFooter />
        </div>
    );
};

export default JoinHope3;
