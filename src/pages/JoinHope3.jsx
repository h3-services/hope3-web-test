import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import bannerImage from '../assets/Join Hope3.jpg';
import '../styles/JoinHope3.css';

// Initialize Supabase client
const supabase = createClient(
    'https://sykpebdlhqtgpvgqazzw.supabase.co',
    'sb_publishable_N1oGMqijF1J3m9FN8bUWiQ_r7IMZDZk'
);

const JoinHope3 = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const requiredFields = [
            'studentName', 'fatherName', 'mobileNumber',
            'schoolName', 'mediumOfInstruction', 'dob',
            'city', 'district', 'pincode', 'score10th', 'score12thHalfYearly'
        ];

        for (const field of requiredFields) {
            if (!formData[field].trim()) {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Please fill in all required fields marked with *');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Note: Adjust table name and column names as per your Supabase schema
            // Assuming a table 'student_applications' or similar exists or reusing 'interest_students' with extra data in a JSONB column or new columns
            // For now, mapping to a generic structure or the existing 'interest_students' table appropriately
            // If the table schema doesn't match these fields, you might need to update Supabase or adjust this mapping.
            // Using a flexible insert for now.

            const { error: supabaseError } = await supabase
                .from('interest_students') // Using existing table for now
                .insert([{
                    name: formData.studentName,
                    district: formData.district,
                    contact_no: formData.mobileNumber,
                    // Store other details in a metadata column if specific columns don't exist, 
                    // or assume columns exist. mapping standard fields:
                    // For this specific request, I'll assume we might need to store extra data.
                    // If columns strictly don't exist, this might error. 
                    // To be safe with the current known schema (name, district, passion, email, contact_no),
                    // I will map what I can and maybe format the rest into 'passion' or a similar text field if needed,
                    // BUT ideally, the table should have these columns.
                    // CHECK: I don't have control over Supabase schema here.
                    // STRATEGY: I will send the main fields and try to put the rest in 'passion' as a JSON string or description if needed,
                    // OR just assume the user handles schema updates. TO be safe, I'll try to insert meaningful data.

                    // Actually, looking at previous code, 'passion', 'email' were used.
                    // This form doesn't have email.
                    // I'll leave email empty or optional.

                    // Mapping for this specific task:
                    passion: `Father: ${formData.fatherName}, Mother: ${formData.motherName}, School: ${formData.schoolName}, Medium: ${formData.mediumOfInstruction}, DOB: ${formData.dob}, City: ${formData.city}, Pincode: ${formData.pincode}, 10th: ${formData.score10th}, 12th: ${formData.score12thHalfYearly}`
                }]);

            if (supabaseError) throw supabaseError;

            setSuccess(' Application submitted successfully! We will contact you soon.');
            setFormData({
                studentName: '', fatherName: '', motherName: '', mobileNumber: '',
                schoolName: '', mediumOfInstruction: '', dob: '', city: '',
                district: '', pincode: '', score10th: '', score12thHalfYearly: ''
            });
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

            {/* Banner Section */}
            <section className="join-banner-section">
                <img src={bannerImage} alt="Join Hope3 Banner" className="join-banner-image" />
                <div className="join-banner-overlay">
                    <div className="join-banner-text">
                        <h1>
                            <span className="blue-text" style={{ textTransform: 'uppercase', fontSize: '3rem' }}>GIVE A MAN FISH</span> <br />
                            <span className="banner-subtext">and you feed him for a day</span> <br />
                            <span className="blue-text">Teach a man to fish</span> <br />
                            <span className="banner-subtext" style={{ textTransform: 'uppercase', fontSize: '1.2rem' }}>AND YOU FEED HIM FOR A LIFETIME.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Descriptive Text Section */}
            <section className="join-description-section">
                <p className="join-description-text">
                    Every hardworking, deserving student—regardless of their background, language of instruction, or where they come from - deserves a real opportunity to rise, achieve, and build a better future. Together, HOPE3 transforms this dream into action - creating new dimensions of learning, access, and opportunity for Tamil medium students across Tamil Nadu. This belief is the heart of HOPE3.
                </p>
            </section>

            {/* Registration Form Section */}
            <section className="join-form-section">
                <div className="join-form-container">
                    <div className="form-header">
                        <h2>Hope3 Foundation</h2>
                    </div>

                    {success ? (
                        <div className="success-state">
                            <div className="success-icon">✅</div>
                            <h2>Success!</h2>
                            <p>{success}</p>
                            <button className="reset-btn" onClick={() => setSuccess('')}>Submit Another Application</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="student-registration-form">
                            <div className="form-group">
                                <label>Student Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Enter name.."
                                    value={formData.studentName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Father Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    placeholder="Enter father name.."
                                    value={formData.fatherName}
                                    onChange={handleInputChange}
                                />
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

                            <div className="form-group">
                                <label>Mobile Number <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    placeholder="Enter mobile number.."
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>School Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="Enter school name.."
                                    value={formData.schoolName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Medium of Instruction <span className="required">*</span></label>
                                <select
                                    name="mediumOfInstruction"
                                    value={formData.mediumOfInstruction}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Medium..</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="English">English</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Date of birth <span className="required">*</span></label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>City / town <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter.."
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>District <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="district"
                                    placeholder="Enter.."
                                    value={formData.district}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Pincode <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter.."
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>10th score <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="score10th"
                                    placeholder="Enter.."
                                    value={formData.score10th}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>12th half yearly score <span className="required">*</span></label>
                                <input
                                    type="text"
                                    name="score12thHalfYearly"
                                    placeholder="Enter.."
                                    value={formData.score12thHalfYearly}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {error && <div className="error-msg" style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center' }}>{error}</div>}

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Submitting...' : 'Join HOPE3'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <NewFooter />
        </div>
    );
};

export default JoinHope3;
