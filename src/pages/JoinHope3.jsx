import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from '../layouts/Navbar.jsx';
import NewFooter from '../layouts/Footer.jsx';
import bannerImage from '../assets/images/pages/join/Join Hope3.jpg';
import '../styles/JoinHope3.css';
import { GraduationCap, Handshake, ChevronDown, Check } from 'lucide-react';
import ErrorTooltip from '../components/common/ErrorTooltip';
import SearchableSelect from '../components/common/SearchableSelect';

import { GoogleSheetService } from '../services/GoogleSheetService';

const JoinHope3 = () => {
    // Scroll to top on component mount and handle hash navigation
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#volunteer') {
            // Set active tab to volunteers
            setActiveTab('volunteers');
            // Scroll to volunteer section after a short delay to ensure content is rendered
            setTimeout(() => {
                const volunteerSection = document.getElementById('volunteer-section');
                if (volunteerSection) {
                    volunteerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({});
    const [studentSuccess, setStudentSuccess] = useState('');
    const [volunteerSuccess, setVolunteerSuccess] = useState('');
    const [activeTab, setActiveTab] = useState('students');

    const [formData, setFormData] = useState({
        studentName: '',
        fatherName: '',
        motherName: '',
        mobileNumber: '',
        schoolName: '',
        mediumOfInstruction: '',
        dob: '',
        city: '',
        district: '',
        pincode: '',
        score10th: '',
        score12thHalfYearly: ''
    });

    const [volunteerFormData, setVolunteerFormData] = useState({
        volunteerName: '',
        dob: '',
        mobileNumber: '',
        languagePref1: '',
        languagePref2: '',
        city: '',
        district: '',
        pincode: '',
        preferredRoles: []
    });

    const rolesList = [
        { title: "Subject Teacher", description: "Teach core subjects (Math, Science, English, etc.) to underprivileged children." },
        { title: "Remedial Tutor", description: "Help struggling students with extra classes or one-on-one sessions." },
        { title: "Language Trainer", description: "Teach spoken English or local/regional languages." },
        { title: "Digital Literacy Instructor", description: "Teach computer basics, typing, internet use, or coding." },
        { title: "Exam Preparation Mentor", description: "Guide students for board exams, entrance tests, or scholarships." },
        { title: "Soft Skills Trainer", description: "Teach communication, teamwork, time management, etc." },
        { title: "Career Mentor", description: "Help students explore career paths, resume writing, and interviews." },
        { title: "Entrepreneurship Mentor", description: "Guide youth in small business or startup basics." },
        { title: "Community Mobilizer", description: "Encourage parents to send children to school" },
        { title: "Awareness Campaign Volunteer", description: "Spread awareness about education, health, and child rights" },
        { title: "Field Coordinator", description: "Help manage education programs in rural or urban areas" },
        { title: "Survey & Data Collector", description: "Gather information about students or community needs" },
        { title: "Curriculum Designer", description: "Create lesson plans, worksheets, or online course content" },
        { title: "E-learning Volunteer", description: "Record educational videos or assist with online classes" },
        { title: "Graphic Designer / Video Editor", description: "Design posters, visuals, or social media content" },
        { title: "IT Support Volunteer", description: "Manage computers, software, or online learning platforms" },
        { title: "Fundraising Volunteer", description: "Help raise donations or sponsorships for education programs" },
        { title: "Event Organizer", description: "Plan and run educational camps, competitions, or workshops" },
        { title: "Social Media Volunteer", description: "Promote NGO activities and success stories online" },
        { title: "Documentation & Report Writer", description: "Prepare reports, newsletters, or impact stories" },
        { title: "Student Counselor", description: "Support children emotionally and academically." },
        { title: "Parent Counselor", description: "Help parents understand the value of education" },
        { title: "Health & Hygiene Educator", description: "Teach children about health, nutrition, and cleanliness" }
    ];

    const tnDistricts = [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode",
        "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
        "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem",
        "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "The Nilgiris", "Thiruvallur", "Thiruvarur",
        "Thoothukudi (Tuticorin)", "Tiruchirappalli (Trichy)", "Tirunelveli", "Tirupathur", "Tiruppur",
        "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar", "Other"
    ];

    const languageOptions = ["English", "Tamil", "Other"];
    const mediumOptions = ["Tamil", "English", "Other"];



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleVolunteerChange = (e) => {
        const { name, value } = e.target;
        setVolunteerFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleRoleChange = (role) => {
        setVolunteerFormData(prev => {
            const currentRoles = prev.preferredRoles;
            if (currentRoles.includes(role)) {
                return { ...prev, preferredRoles: currentRoles.filter(r => r !== role) };
            } else {
                return { ...prev, preferredRoles: [...currentRoles, role] };
            }
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = [
            { id: 'studentName', label: 'Student Name' },
            { id: 'fatherName', label: 'Father Name' },
            { id: 'mobileNumber', label: 'Mobile Number' },
            { id: 'schoolName', label: 'School Name' },
            { id: 'mediumOfInstruction', label: 'Medium of Instruction' },
            { id: 'dob', label: 'Date of Birth' },
            { id: 'city', label: 'City' },
            { id: 'district', label: 'District' },
            { id: 'pincode', label: 'Pin Code' },
            { id: 'score10th', label: '10th Score' },
            { id: 'score12thHalfYearly', label: '12th Score' }
        ];

        for (const field of requiredFields) {
            if (!formData[field.id].trim()) {
                newErrors[field.id] = `Please fill out this field.`;
                break; // Show only the first error
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await GoogleSheetService.createStudent(formData);

            if (result.success) {
                setStudentSuccess('Application submitted successfully! We will contact you soon.');
                setFormData({
                    studentName: '', fatherName: '', motherName: '', mobileNumber: '',
                    schoolName: '', mediumOfInstruction: '', dob: '', city: '',
                    district: '', pincode: '', score10th: '', score12thHalfYearly: ''
                });
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setLoading(false);
        }
    };

    const handleVolunteerSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        const required = [
            { id: 'volunteerName', label: 'Your Name' },
            { id: 'dob', label: 'Date of Birth' },
            { id: 'mobileNumber', label: 'Mobile Number' },
            { id: 'languagePref1', label: '1st Preference' },
            { id: 'city', label: 'City' },
            { id: 'district', label: 'District' },
            { id: 'pincode', label: 'Pin Code' }
        ];

        for (const field of required) {
            if (!volunteerFormData[field.id].trim()) {
                newErrors[field.id] = `Please fill out this field.`;
                break; // Show only the first error
            }
        }

        if (Object.keys(newErrors).length === 0 && volunteerFormData.preferredRoles.length === 0) {
            newErrors.preferredRoles = 'Please select at least one preferred role';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await GoogleSheetService.createVolunteer(volunteerFormData);

            if (result.success) {
                setVolunteerSuccess('Volunteer application submitted successfully! We will contact you soon.');
                setVolunteerFormData({
                    volunteerName: '', dob: '', mobileNumber: '', languagePref1: '', languagePref2: '',
                    city: '', district: '', pincode: '', preferredRoles: []
                });
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="join-hope3-page">
            <Navbar />

            {/* Banner Section */}
            <section className="join-banner-section">
                <img src={bannerImage} alt="Join Hope3 Banner" className="join-banner-image" />
                <div className="join-banner-overlay">
                    <div className="join-banner-text">
                        <h1>
                            <span className="blue-text">GIVE A MAN FISH</span> <br />
                            <span className="banner-subtext">and you feed him for a day</span> <br />
                            <span className="blue-text">Teach a man to fish</span> <br />
                            <span className="banner-subtext">AND YOU FEED HIM FOR A LIFETIME.</span>
                        </h1>
                    </div>
                </div>
            </section>



            {/* Registration Form Section */}
            <section className="join-form-section">
                <div className="join-form-container">
                    {/* Toggle Buttons from Donate Page */}
                    <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center mb-8 px-2">
                        <button
                            type="button"
                            onClick={() => setActiveTab('students')}
                            onMouseEnter={() => setActiveTab('students')}
                            style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                            className={`flex-1 sm:flex-none sm:w-auto px-4 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-2xl ${activeTab === 'students'
                                ? 'bg-gradient-to-br from-[#332EB2] to-[#4FB3E8] !text-white ring-4 ring-blue-500/20 shadow-blue-500/30'
                                : 'bg-white text-gray-700 border border-gray-100 hover:border-blue-400 hover:bg-blue-50'
                                }`}
                        >
                            <GraduationCap size={24} color={activeTab === 'students' ? 'white' : '#332EB2'} />
                            <span className={activeTab === 'students' ? '!text-white' : ''}>Students</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('volunteers')}
                            onMouseEnter={() => setActiveTab('volunteers')}
                            style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                            className={`flex-1 sm:flex-none sm:w-auto px-4 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-2xl ${activeTab === 'volunteers'
                                ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 !text-white ring-4 ring-indigo-500/20 shadow-indigo-500/30'
                                : 'bg-white text-gray-700 border border-gray-100 hover:border-indigo-400 hover:bg-slate-50'
                                }`}
                        >
                            <Handshake size={24} color={activeTab === 'volunteers' ? 'white' : '#4f46e5'} />
                            <span className={activeTab === 'volunteers' ? '!text-white' : ''}>Volunteers</span>
                        </button>
                    </div>

                    {activeTab === 'students' && (
                        <>



                            {/* Description Text Section - Moved Above Form */}
                            <div className="mb-8 text-center">
                                <h3 className="cinzel-section-header !normal-case !text-[2rem] mb-6">Join HOPE3 as a Student</h3>
                                <p className="join-description-text text-center">
                                    Every hardworking, deserving student—regardless of their background, language of instruction, or where they come from - deserves a real opportunity to rise, achieve, and build a better future. Together, HOPE3 transforms this dream into action - creating new dimensions of learning, access, and opportunity for Tamil medium students across Tamil Nadu. This belief is the heart of HOPE3.
                                </p>
                            </div>

                            {studentSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in bg-white rounded-2xl shadow-sm border border-green-100">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#332EB2]" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                                        Success!
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed font-medium">
                                        {studentSuccess}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="student-registration-form">
                                    <div className="form-group full-width relative">
                                        <label>Student Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="studentName"
                                            placeholder="Enter name.."
                                            value={formData.studentName}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.studentName} isVisible={!!errors.studentName} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Date of birth <span className="required">*</span></label>
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.dob} isVisible={!!errors.dob} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Mobile Number <span className="required">*</span></label>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            placeholder="Enter mobile number.."
                                            value={formData.mobileNumber}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.mobileNumber} isVisible={!!errors.mobileNumber} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Father Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="fatherName"
                                            placeholder="Enter father name.."
                                            value={formData.fatherName}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.fatherName} isVisible={!!errors.fatherName} />
                                    </div>

                                    <div className="form-group">
                                        <label>Mother Name</label>
                                        <input
                                            type="text"
                                            name="motherName"
                                            placeholder="Enter mother name.."
                                            value={formData.motherName}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group relative">
                                        <label>School Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="schoolName"
                                            placeholder="Enter school name.."
                                            value={formData.schoolName}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.schoolName} isVisible={!!errors.schoolName} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Medium of Instruction <span className="required">*</span></label>
                                        <SearchableSelect
                                            name="mediumOfInstruction"
                                            value={formData.mediumOfInstruction}
                                            onChange={handleInputChange}
                                            options={mediumOptions}
                                            placeholder="Select Medium.."
                                            isStringArray={true}
                                        />
                                        <ErrorTooltip message={errors.mediumOfInstruction} isVisible={!!errors.mediumOfInstruction} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>City / town <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="Enter.."
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.city} isVisible={!!errors.city} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>District <span className="required">*</span></label>
                                        <SearchableSelect
                                            name="district"
                                            value={formData.district}
                                            onChange={handleInputChange}
                                            options={tnDistricts}
                                            placeholder="Select District.."
                                            isStringArray={true}
                                        />
                                        <ErrorTooltip message={errors.district} isVisible={!!errors.district} />
                                    </div>

                                    <div className="form-group full-width relative">
                                        <label>Pin Code <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            placeholder="Enter.."
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.pincode} isVisible={!!errors.pincode} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>10th score <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="score10th"
                                            placeholder="Enter.."
                                            value={formData.score10th}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.score10th} isVisible={!!errors.score10th} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>12th half yearly score <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="score12thHalfYearly"
                                            placeholder="Enter.."
                                            value={formData.score12thHalfYearly}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorTooltip message={errors.score12thHalfYearly} isVisible={!!errors.score12thHalfYearly} />
                                    </div>

                                    {error && <div className="error-msg" style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center' }}>{error}</div>}

                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Join HOPE3'}
                                    </button>


                                </form>
                            )}
                        </>
                    )}



                    {activeTab === 'volunteers' && (
                        <div id="volunteer-section">
                            {/* Volunteer Description Text */}
                            <div className="mb-8 text-center">
                                <h3 className="cinzel-section-header !normal-case !text-[2rem] mb-6">Join HOPE3 as a Volunteer</h3>
                                <p className="join-description-text text-center">
                                    Volunteers play a central role at HOPE3 by teaching various subjects online or organizing subject-specific boot camps. The most urgent needs include English teachers, soft skills trainers, career mentors, and fundraising volunteers who can help broaden opportunities for students.
                                </p>
                            </div>

                            {volunteerSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-fade-in bg-white rounded-2xl shadow-sm border border-green-100">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#332EB2]" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                                        Success!
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed font-medium">
                                        {volunteerSuccess}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleVolunteerSubmit} className="student-registration-form">
                                    <div className="full-width mt-6 mb-8 relative">
                                        <label className="font-semibold text-gray-700 block mb-4 text-sm uppercase tracking-wider">Preferred Roles <span className="required">*</span> (Select at least 1)</label>
                                        <div className="grid grid-cols-1 gap-4">
                                            {rolesList.map((role) => (
                                                <div
                                                    key={role.title}
                                                    className={`group relative flex flex-col p-4 border rounded-2xl cursor-pointer transition-all duration-300 w-full ${volunteerFormData.preferredRoles.includes(role.title)
                                                        ? 'bg-blue-50 border-blue-500 shadow-md transform -translate-y-0.5'
                                                        : 'bg-white border-gray-100 hover:border-blue-300 hover:bg-slate-50 hover:shadow-sm'
                                                        }`}
                                                    onClick={() => handleRoleChange(role.title)}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="">
                                                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${volunteerFormData.preferredRoles.includes(role.title)
                                                                ? 'bg-blue-600 border-blue-600'
                                                                : 'border-gray-300 group-hover:border-blue-400'
                                                                }`}>
                                                                {volunteerFormData.preferredRoles.includes(role.title) && (
                                                                    <Check size={14} className="text-white" strokeWidth={3} />
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col">
                                                            <span className={`font-medium text-sm sm:text-base leading-tight transition-colors ${volunteerFormData.preferredRoles.includes(role.title) ? 'text-blue-700' : 'text-gray-800'
                                                                }`}>
                                                                {role.title}
                                                            </span>
                                                            {role.description && (
                                                                <div className="max-h-20 opacity-100 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-20 sm:group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                                                    <p className="text-[11px] sm:text-xs leading-relaxed text-gray-500 mt-1 italic">
                                                                        {role.description}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <ErrorTooltip message={errors.preferredRoles} isVisible={!!errors.preferredRoles} position="bottom" />
                                    </div>

                                    <div className="form-group full-width relative">
                                        <label>Your Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="volunteerName"
                                            placeholder="Enter name.."
                                            value={volunteerFormData.volunteerName}
                                            onChange={handleVolunteerChange}
                                        />
                                        <ErrorTooltip message={errors.volunteerName} isVisible={!!errors.volunteerName} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Date of birth <span className="required">*</span></label>
                                        <input
                                            type="date"
                                            name="dob"
                                            value={volunteerFormData.dob}
                                            onChange={handleVolunteerChange}
                                        />
                                        <ErrorTooltip message={errors.dob} isVisible={!!errors.dob} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>Mobile Number <span className="required">*</span></label>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            placeholder="Enter mobile number.."
                                            value={volunteerFormData.mobileNumber}
                                            onChange={handleVolunteerChange}
                                        />
                                        <ErrorTooltip message={errors.mobileNumber} isVisible={!!errors.mobileNumber} />
                                    </div>

                                    <div className="form-group full-width mb-2 mt-4 relative">
                                        <label className="font-bold text-gray-700">Language Proficient in <span className="required">*</span></label>
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            <div className="form-group" style={{ marginBottom: 0 }}>
                                                <label style={{ fontSize: '0.9rem' }}>1st Preference *</label>
                                                <SearchableSelect
                                                    name="languagePref1"
                                                    value={volunteerFormData.languagePref1}
                                                    onChange={handleVolunteerChange}
                                                    options={languageOptions}
                                                    placeholder="Select.."
                                                    isStringArray={true}
                                                />
                                            </div>
                                            <div className="form-group" style={{ marginBottom: 0 }}>
                                                <label style={{ fontSize: '0.9rem' }}>2nd Preference *</label>
                                                <SearchableSelect
                                                    name="languagePref2"
                                                    value={volunteerFormData.languagePref2}
                                                    onChange={handleVolunteerChange}
                                                    options={languageOptions}
                                                    placeholder="Select.."
                                                    isStringArray={true}
                                                />
                                            </div>
                                        </div>
                                        <ErrorTooltip message={errors.languagePref1} isVisible={!!errors.languagePref1} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>City / town <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="Enter.."
                                            value={volunteerFormData.city}
                                            onChange={handleVolunteerChange}
                                        />
                                        <ErrorTooltip message={errors.city} isVisible={!!errors.city} />
                                    </div>

                                    <div className="form-group relative">
                                        <label>District <span className="required">*</span></label>
                                        <SearchableSelect
                                            name="district"
                                            value={volunteerFormData.district}
                                            onChange={handleVolunteerChange}
                                            options={tnDistricts}
                                            placeholder="Select District.."
                                            isStringArray={true}
                                        />
                                        <ErrorTooltip message={errors.district} isVisible={!!errors.district} />
                                    </div>

                                    <div className="form-group full-width relative">
                                        <label>Pin Code <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            placeholder="Enter.."
                                            value={volunteerFormData.pincode}
                                            onChange={handleVolunteerChange}
                                        />
                                        <ErrorTooltip message={errors.pincode} isVisible={!!errors.pincode} />
                                    </div>





                                    {error && <div className="error-msg" style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</div>}

                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Volunteer with HOPE3'}
                                    </button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <NewFooter />
        </div>
    );
};

export default JoinHope3;
