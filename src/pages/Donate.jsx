import { useState, useRef, useEffect } from 'react';
import { FaPaypal } from "react-icons/fa";
import { SiZelle } from "react-icons/si";
import Navbar from '../layouts/Navbar';
import NewFooter from '../layouts/Footer';
import { ChevronDown, Coins, Monitor, Check } from 'lucide-react';
import ErrorTooltip from '../components/common/ErrorTooltip';
import SearchableSelect from '../components/common/SearchableSelect';
import donateImage from '../assets/images/pages/donate/donate.jpeg';
import hopeBuilderIcon from '../assets/images/pages/donate/hope_builder.jpeg';
import hopeEnablerIcon from '../assets/images/pages/donate/hope_maker1.jpeg';
import dreamEnablerIcon from '../assets/images/pages/donate/dream_enabler.jpeg';
import customAmountIcon from '../assets/images/pages/donate/hope_maker.jpeg';
import zelleQR from '../assets/images/pages/donate/zelle_qr.png';
import { GoogleSheetService } from '../services/GoogleSheetService';

const Donate = () => {
    const [activeTab, setActiveTab] = useState('monetary');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const customInputRef = useRef(null);

    useEffect(() => {
        if (selectedAmount === 'custom' && customInputRef.current) {
            customInputRef.current.focus();
        }
    }, [selectedAmount]);

    const [formData, setFormData] = useState({
        paymentAmount: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: ''
    });



    const usStates = [
        { code: "", name: "Select State" },
        { code: "AL", name: "Alabama" },
        { code: "AK", name: "Alaska" },
        { code: "AZ", name: "Arizona" },
        { code: "AR", name: "Arkansas" },
        { code: "CA", name: "California" },
        { code: "CO", name: "Colorado" },
        { code: "CT", name: "Connecticut" },
        { code: "DE", name: "Delaware" },
        { code: "FL", name: "Florida" },
        { code: "GA", name: "Georgia" },
        { code: "HI", name: "Hawaii" },
        { code: "ID", name: "Idaho" },
        { code: "IL", name: "Illinois" },
        { code: "IN", name: "Indiana" },
        { code: "IA", name: "Iowa" },
        { code: "KS", name: "Kansas" },
        { code: "KY", name: "Kentucky" },
        { code: "LA", name: "Louisiana" },
        { code: "ME", name: "Maine" },
        { code: "MD", name: "Maryland" },
        { code: "MA", name: "Massachusetts" },
        { code: "MI", name: "Michigan" },
        { code: "MN", name: "Minnesota" },
        { code: "MS", name: "Mississippi" },
        { code: "MO", name: "Missouri" },
        { code: "MT", name: "Montana" },
        { code: "NE", name: "Nebraska" },
        { code: "NV", name: "Nevada" },
        { code: "NH", name: "New Hampshire" },
        { code: "NJ", name: "New Jersey" },
        { code: "NM", name: "New Mexico" },
        { code: "NY", name: "New York" },
        { code: "NC", name: "North Carolina" },
        { code: "ND", name: "North Dakota" },
        { code: "OH", name: "Ohio" },
        { code: "OK", name: "Oklahoma" },
        { code: "OR", name: "Oregon" },
        { code: "PA", name: "Pennsylvania" },
        { code: "RI", name: "Rhode Island" },
        { code: "SC", name: "South Carolina" },
        { code: "SD", name: "South Dakota" },
        { code: "TN", name: "Tennessee" },
        { code: "TX", name: "Texas" },
        { code: "UT", name: "Utah" },
        { code: "VT", name: "Vermont" },
        { code: "VA", name: "Virginia" },
        { code: "WA", name: "Washington" },
        { code: "WV", name: "West Virginia" },
        { code: "WI", name: "Wisconsin" },
        { code: "WY", name: "Wyoming" },
    ];

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
        if (amount !== 'custom') {
            setCustomAmount('');
            setFormData(prev => ({ ...prev, paymentAmount: amount }));
        } else {
            setFormData(prev => ({ ...prev, paymentAmount: customAmount }));
        }
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (selectedAmount === 'custom') {
            setFormData(prev => ({ ...prev, paymentAmount: value }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'paymentAmount') {
            if (['1000', '1500', '3000'].includes(value)) {
                setSelectedAmount(value);
                setCustomAmount('');
            } else {
                setSelectedAmount('custom');
                setCustomAmount(value);
            }
        }

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.paymentAmount) {
            newErrors.paymentAmount = 'Payment amount is required';
        } else if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        } else if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        } else if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        } else if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!formData.address1) {
            newErrors.address1 = 'Address is required';
        } else if (!formData.city) {
            newErrors.city = 'City is required';
        } else if (!formData.state) {
            newErrors.state = 'State is required';
        } else if (!formData.zipCode) {
            newErrors.zipCode = 'ZIP code is required';
        } else if (!/^\d{5}$/.test(formData.zipCode)) {
            newErrors.zipCode = 'ZIP code must be exactly 5 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Show modal immediately for payment instructions
            // In a real flow, we might want to save data first, but for better UX we often show steps.
            // Requirement said "Ensure data is sent".

            // Submitting data to sheet
            try {
                await GoogleSheetService.createDonation(formData);
                console.log('Donation data saved to sheet');
            } catch (error) {
                console.error('Error saving donation data', error);
                // Optionally show error or just proceed since payment is external
            }

            console.log('Form Data:', formData);
            console.log('Payment Method:', paymentMethod);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen font-inter relative bg-white">
            <Navbar />

            {/* Banner Block */}
            <section
                className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center transition-all duration-500"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${donateImage})`
                }}
            >
                <div className="max-w-4xl mx-auto px-4 text-left">
                    <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-medium leading-tight animate-fade-in" style={{
                        textShadow: 'rgba(0, 0, 0, 0.6) 0px 4px 12px',
                        fontFamily: '"Cinzel Decorative", cursive'
                    }}>
                        Every student deserves a chance to rise and achieve their fullest potential.
                    </h1>
                </div>
            </section>

            {/* Toggle Tabs and Content Container */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
                {/* Empowering Dreams Section */}
                <section className="py-6 sm:py-8 px-4 bg-white animate-fade-in">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center text-gray-800 py-4">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#332EB2]" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>Empowering Dreams, Transforming Lives</h2>
                            <p className="leading-relaxed text-gray-700 text-left" style={{ fontSize: '16px' }}>
                                Every student deserves a chance to rise and achieve their fullest potential. This transformative
                                work at HOPE3 is made possible by a vibrant community of volunteers and generous donors, each
                                contributing in their own unique way to empower students and drive change. Sustaining the HOPE3
                                residential program relies on generous, ongoing support. Every contribution, no matter the size, truly
                                makes a meaningful impact in covering each student's essential expenses, including hostel, meals,
                                healthcare, and utilities. Donations also fund tuition, exam fees, textbooks, commuting expenses, and
                                critical staff salaries, ensuring students always receive guidance and support in their academic journey.
                                Your donation goes a long way toward empowering their journey and shaping brighter futures.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Toggle Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                        onClick={() => setActiveTab('monetary')}
                        style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                        className={`w-full sm:w-auto px-6 py-2.5 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl ${activeTab === 'monetary'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 !text-white ring-4 ring-blue-500/20 shadow-blue-500/30'
                            : 'bg-white text-gray-700 border border-gray-100 hover:border-blue-400 hover:shadow-md'
                            }`}
                    >
                        <Coins className="w-5 h-5" color={activeTab === 'monetary' ? 'white' : '#3b82f6'} /> Monetary Donations
                    </button>
                    <button
                        onClick={() => setActiveTab('electronics')}
                        style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                        className={`w-full sm:w-auto px-6 py-2.5 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl ${activeTab === 'electronics'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600 !text-white ring-4 ring-cyan-500/20 shadow-cyan-500/30'
                            : 'bg-white text-gray-700 border border-gray-100 hover:border-blue-400 hover:shadow-md'
                            }`}
                    >
                        <Monitor className="w-5 h-5" color={activeTab === 'electronics' ? 'white' : '#06b6d4'} /> Electronics Donations
                    </button>
                </div>

                {/* Monetary Donations Section */}
                {activeTab === 'monetary' && (
                    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white rounded-xl shadow-md mt-6 border border-gray-100">
                        <div className="max-w-5xl mx-auto">
                            <div className="py-4 sm:py-6 px-2 sm:px-4">
                                <div className="text-left mb-8 max-w-4xl mx-auto space-y-4 text-gray-700">
                                    <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                                        This transformative work at HOPE3 is made possible by a vibrant community of volunteers and generous donors, each contributing in their own unique way to empower students and drive change.
                                    </p>
                                    <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                                        Sustaining the HOPE3 residential program relies on generous, ongoing support. Every contribution, no matter the size, truly makes a meaningful impact in covering each student's essential expenses, including hostel, meals, healthcare, and utilities. Donations also fund tuition, exam fees, textbooks, commuting expenses, and critical staff salaries, ensuring students always receive guidance and support in their academic journey. Your donation goes a long way toward empowering their journey and shaping brighter futures.
                                    </p>
                                    <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                                        Your generous support is invaluable and has the power to change a student's life forever. Every donation—no matter the amount—makes a meaningful difference and a profound impact in uplifting their journey.
                                    </p>
                                    <p className="leading-relaxed" style={{ fontSize: '16px' }}>
                                        HOPE3 is tax-exempt in the USA (501(C)(3)), making donations both impactful and tax-friendly. Please check with your employer if there is donation match for 501(C)(3) registered organization working towards upliftment through education in India. If there is, please follow the process with your employer.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                    {/* Hope Builder */}
                                    <label className={`cursor-pointer bg-white rounded-xl p-2 sm:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border relative group ${selectedAmount === '1000' ? 'bg-[#eff6ff] border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:border-blue-300'}`}>
                                        <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-md flex items-center justify-center transition-opacity duration-300 ${selectedAmount === '1000' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <Check size={18} strokeWidth={4} className="text-blue-600" />
                                        </div>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="1000"
                                            checked={selectedAmount === '1000'}
                                            onChange={() => handleAmountChange('1000')}
                                            className="hidden"
                                        />
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden shadow-sm">
                                            <img src={hopeBuilderIcon} alt="Hope Builder" className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-sm sm:text-lg font-bold mb-1 text-gray-800" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>Hope Builder</h3>
                                        <div className="mb-1 sm:mb-2">
                                            <span className="text-base sm:text-xl font-bold text-blue-600">$1000</span>
                                            <span className="text-gray-500 text-xs sm:text-sm">/year</span>
                                        </div>
                                        <p className="text-gray-500 text-xs font-serif leading-tight">
                                            Cover hostel, meals & healthcare
                                        </p>
                                    </label>

                                    {/* Hope Enabler */}
                                    <label className={`cursor-pointer bg-white rounded-xl p-2 sm:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border relative group ${selectedAmount === '1500' ? 'bg-[#eff6ff] border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:border-blue-300'}`}>
                                        <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-md flex items-center justify-center transition-opacity duration-300 ${selectedAmount === '1500' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <Check size={18} strokeWidth={4} className="text-blue-600" />
                                        </div>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="1500"
                                            checked={selectedAmount === '1500'}
                                            onChange={() => handleAmountChange('1500')}
                                            className="hidden"
                                        />
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden shadow-sm">
                                            <img src={hopeEnablerIcon} alt="Hope Enabler" className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-sm sm:text-lg font-bold mb-1 text-gray-800" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>Hope Enabler</h3>
                                        <div className="mb-1 sm:mb-2">
                                            <span className="text-base sm:text-xl font-bold text-blue-600">$1500</span>
                                            <span className="text-gray-500 text-xs sm:text-sm">/year</span>
                                        </div>
                                        <p className="text-gray-500 text-xs font-serif leading-tight">
                                            Cover tuition, books & fees
                                        </p>
                                    </label>

                                    {/* Dream Enabler */}
                                    <label className={`cursor-pointer bg-white rounded-xl p-2 sm:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border relative group ${selectedAmount === '3000' ? 'bg-[#eff6ff] border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:border-blue-300'}`}>
                                        <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-md flex items-center justify-center transition-opacity duration-300 ${selectedAmount === '3000' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <Check size={18} strokeWidth={4} className="text-blue-600" />
                                        </div>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="3000"
                                            checked={selectedAmount === '3000'}
                                            onChange={() => handleAmountChange('3000')}
                                            className="hidden"
                                        />
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden shadow-sm">
                                            <img src={dreamEnablerIcon} alt="Dream Enabler" className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-sm sm:text-lg font-bold mb-1 text-gray-800" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>Dream Enabler</h3>
                                        <div className="mb-1 sm:mb-2">
                                            <span className="text-base sm:text-xl font-bold text-blue-600">$3000</span>
                                            <span className="text-gray-500 text-xs sm:text-sm">/year</span>
                                        </div>
                                        <p className="text-gray-500 text-xs font-serif leading-tight">
                                            Cover all expenses
                                        </p>
                                    </label>

                                    {/* Hope Maker */}
                                    <label className={`cursor-pointer bg-white rounded-xl p-2 sm:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border relative group ${selectedAmount === 'custom' ? 'bg-[#eff6ff] border-blue-500 ring-1 ring-blue-500' : 'border-gray-100 hover:border-blue-300'}`}>
                                        <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-md flex items-center justify-center transition-opacity duration-300 ${selectedAmount === 'custom' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <Check size={18} strokeWidth={4} className="text-blue-600" />
                                        </div>
                                        <input
                                            type="radio"
                                            name="amount"
                                            value="custom"
                                            checked={selectedAmount === 'custom'}
                                            onChange={() => handleAmountChange('custom')}
                                            className="hidden"
                                        />
                                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden shadow-sm">
                                            <img src={customAmountIcon} alt="Hope Maker" className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-sm sm:text-lg font-bold mb-1 text-gray-800" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>Hope Maker</h3>
                                        <div className="mb-1 sm:mb-2">
                                            <span className="text-base sm:text-xl font-bold text-blue-600">Custom</span>
                                        </div>
                                        <p className="text-gray-500 text-xs font-serif leading-tight">
                                            Your choice of amount
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Donation Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Payment Amount */}
                                <div className="sm:col-span-2 relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        {selectedAmount === 'custom' ? 'Enter the Amount ($)' : 'Payment Amount'} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative group">
                                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 font-bold transition-colors ${errors.paymentAmount ? 'text-red-500' : 'text-gray-400 group-focus-within:text-purple-600'}`}>$</span>
                                        <input
                                            ref={customInputRef}
                                            type="number"
                                            name="paymentAmount"
                                            value={formData.paymentAmount}
                                            onChange={handleInputChange}
                                            className={`w-full pl-7 pr-4 py-2.5 border rounded-lg outline-none transition-all text-sm font-medium ${errors.paymentAmount
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm'
                                                }`}
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <ErrorTooltip message={errors.paymentAmount} isVisible={!!errors.paymentAmount} />
                                </div>

                                {/* First Name */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.firstName} isVisible={!!errors.firstName} />
                                </div>

                                {/* Last Name */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.lastName} isVisible={!!errors.lastName} />
                                </div>

                                {/* Phone Number */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.phone} isVisible={!!errors.phone} />
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.email} isVisible={!!errors.email} />
                                </div>

                                {/* Address 1 */}
                                <div className="sm:col-span-2 relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        Address 1 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address1"
                                        value={formData.address1}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.address1 ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.address1} isVisible={!!errors.address1} />
                                </div>

                                {/* Address 2 */}
                                <div className="sm:col-span-2">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        Address 2 <span className="text-gray-400 text-xs">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address2"
                                        value={formData.address2}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all text-sm"
                                    />
                                </div>

                                {/* City */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                    />
                                    <ErrorTooltip message={errors.city} isVisible={!!errors.city} />
                                </div>

                                {/* State */}
                                <div className="relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <SearchableSelect
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        options={usStates}
                                        placeholder="Select State"
                                    />
                                    <ErrorTooltip message={errors.state} isVisible={!!errors.state} />
                                </div>

                                {/* ZIP Code */}
                                <div className="sm:col-span-2 relative">
                                    <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                                        ZIP Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        maxLength="5"
                                        className={`w-full p-2.5 border rounded-lg outline-none transition-all text-sm ${errors.zipCode ? 'border-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
                                            }`}
                                        placeholder="12345"
                                    />
                                    <ErrorTooltip message={errors.zipCode} isVisible={!!errors.zipCode} />
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="mt-8 pt-4 border-t border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#332EB2]">
                                    Select Payment Method
                                </h3>

                                <div className="flex flex-col sm:flex-row gap-3">

                                    {/* PayPal */}
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            checked={paymentMethod === "paypal"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="sr-only"
                                        />

                                        <div
                                            style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                                            className={`py-2.5 px-4 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95
        ${paymentMethod === "paypal"
                                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 !text-white shadow-lg ring-2 ring-blue-200"
                                                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-sm"
                                                }`}
                                        >
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm p-1.5">
                                                    <FaPaypal className={`${paymentMethod === "paypal" ? "text-blue-600" : "text-[#003087]"}`} size={24} />
                                                </div>
                                                <span className={`text-base ${paymentMethod === "paypal" ? "font-bold text-white" : "font-semibold"}`}>Pay using PayPal</span>
                                            </div>
                                        </div>
                                    </label>

                                    {/* Zelle */}
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="zelle"
                                            checked={paymentMethod === "zelle"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="sr-only"
                                        />

                                        <div
                                            style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
                                            className={`py-2.5 px-4 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95
        ${paymentMethod === "zelle"
                                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 !text-white shadow-lg ring-2 ring-blue-200"
                                                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-sm"
                                                }`}
                                        >
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm p-1.5">
                                                    <SiZelle className={`${paymentMethod === "zelle" ? "text-purple-700" : "text-[#6d1e70]"}`} size={20} />
                                                </div>
                                                <span className={`text-base ${paymentMethod === "zelle" ? "font-bold text-white" : "font-semibold"}`}>Pay using Zelle</span>
                                            </div>
                                        </div>
                                    </label>

                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-6 rounded-xl font-bold text-base hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
                            >
                                Submit Donation
                            </button>
                        </form>
                    </section>
                )}

                {/* Electronics Donations Section */}
                {activeTab === 'electronics' && (
                    <div className="animate-fade-in mt-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 !text-blue-700 text-left">
                                Donation of Electronics:
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-left" style={{ fontSize: '16px' }}>
                                The electronics that you want to recycle or give away can be donated to HOPE3 Foundation for the use by the students. Electronics include laptops, tablets, mobile devices, keyboards, and mice. Donations of such electronics is made easy with the app called ecohome.one.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 text-left" style={{ fontSize: '16px' }}>
                                ecohome.one is an AI-powered digital home inventory platform that empowers households to understand what they own, reduce waste, and participate in more sustainable, community-driven living.
                            </p>

                            <h3 className="text-lg sm:text-xl font-bold mb-4 !text-blue-700 text-left">
                                How to donate to HOPE3 using ecohome.one
                            </h3>
                            <ul className="space-y-2 mb-8 list-none text-left">
                                {[
                                    'Create or sign in to your ecohome.one account',
                                    'Record the items you wish to donate',
                                    'Choose items marked for sharing or donation',
                                    'Choose hope3 as donation channel',
                                    'Arrange handoff based on local availability'
                                ].map((step, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700" style={{ fontSize: '16px' }}>
                                        <span className="font-bold">*</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-8 flex flex-col sm:flex-row items-center gap-6">
                                <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex-shrink-0">
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ecohome.one"
                                        alt="ecohome.one QR Code"
                                        className="w-32 h-32 rounded-lg"
                                    />
                                    <p className="text-[10px] text-gray-400 mt-2 text-center font-medium uppercase tracking-wider">Scan to donate</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-gray-600 text-left" style={{ fontSize: '16px', maxWidth: '320px' }}>
                                        Scan the QR code to quickly access ecohome.one and start your electronic donation journey.
                                    </p>
                                    <a
                                        href="https://ecohome.one"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-xl font-bold text-base hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                                    >
                                        Visit ecohome.one <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* QR Code Modal */}
            {
                showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-sm">
                        <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 max-w-sm w-full transform animate-scale-up max-h-[90vh] overflow-y-auto">
                            <div className="text-center">
                                {paymentMethod === 'paypal' && (
                                    <>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 !text-[#332EB2]">
                                            PayPal Payment
                                        </h3>

                                        <div className="mb-4 flex justify-center">
                                            <img
                                                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.paypal.com/paypalme/hope3org"
                                                alt="PayPal QR Code"
                                                className="w-56 h-56 border-2 border-blue-100 rounded-lg shadow-sm"
                                            />
                                        </div>
                                    </>
                                )}

                                {paymentMethod === 'zelle' && (
                                    <div className="mb-4 flex justify-center">
                                        <img
                                            src={zelleQR}
                                            alt="Zelle Payment Details"
                                            className="w-[240px] mx-auto h-auto rounded-lg shadow-sm"
                                        />
                                    </div>
                                )}

                                {paymentMethod === 'paypal' && (
                                    <a
                                        href="https://www.paypal.com/paypalme/hope3org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-600 hover:text-blue-800 underline mb-4 break-all text-sm"
                                    >
                                        https://www.paypal.com/paypalme/hope3org
                                    </a>
                                )}

                                <p className="text-gray-600 mb-6 text-sm">
                                    We will send you the tax-exempt receipt for your contribution.
                                </p>

                                <button
                                    onClick={closeModal}
                                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>

                )
            }


            <NewFooter />
        </div >
    );
};

export default Donate;