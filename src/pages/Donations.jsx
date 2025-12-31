import { useState } from 'react';
import Navbar from './navbar';
import NewFooter from './NewFooter';
import donateImage from '../assets/donate.png';

const Donations = () => {
    const [activeTab, setActiveTab] = useState('monetary');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});

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
        '', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
        if (amount !== 'custom') {
            setCustomAmount('');
            setFormData({ ...formData, paymentAmount: amount });
        } else {
            setFormData({ ...formData, paymentAmount: customAmount });
        }
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (selectedAmount === 'custom') {
            setFormData({ ...formData, paymentAmount: value });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.paymentAmount) newErrors.paymentAmount = 'Payment amount is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email address is required';
        if (!formData.address1) newErrors.address1 = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) {
            newErrors.zipCode = 'ZIP code is required';
        } else if (!/^\d{5}$/.test(formData.zipCode)) {
            newErrors.zipCode = 'ZIP code must be exactly 5 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Store data (you'd typically send this to your backend)
            console.log('Form Data:', formData);
            console.log('Payment Method:', paymentMethod);
            // Show modal
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <Navbar />

            {/* Banner Section */}
            <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-white mt-20 overflow-hidden">
                {/* Background Image */}
                <img
                    src={donateImage}
                    alt="Donations Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 !text-white animate-fade-in-up drop-shadow-lg">
                        Every student deserves a chance to rise and achieve their fullest potential.
                    </h1>
                </div>
            </div>

            {/* Toggle Tabs */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => setActiveTab('monetary')}
                        className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${activeTab === 'monetary'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-500'
                            }`}
                    >
                        💰 Monetary Donations
                    </button>
                    <button
                        onClick={() => setActiveTab('electronics')}
                        className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${activeTab === 'electronics'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500'
                            }`}
                    >
                        💻 Electronics Donations
                    </button>
                </div>
            </div>

            {/* Monetary Donations Section */}
            {activeTab === 'monetary' && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
                        {/* Content Paragraphs */}
                        <div className="text-left mb-8 space-y-4">
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                This transformative work at HOPE3 is made possible by a vibrant community of volunteers and generous donors, each contributing in their own unique way to empower students and drive change.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                Sustaining the HOPE3 residential program relies on generous, ongoing support. Every contribution, no matter the size, truly makes a meaningful impact in Covers each student's essential expenses, including hostel, meals, healthcare, and utilities. Donations also fund tuition, exam fees, textbooks, commuting expenses, and critical staff salaries, ensuring students always receive guidance and support in their academic journey. Your donation goes a long way toward empowering their journey and shaping brighter futures.
                            </p>
                            <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-l-4 border-purple-600 p-4 rounded-r-lg mt-6">
                                <p className="text-gray-800 font-medium text-base sm:text-lg">
                                    Your generous support is invaluable and has the power to change a student's life forever.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base mt-2">
                                    HOPE3 is tax-exempt in the USA (501(c)(3)). Please check with your employer for donation matching options.
                                </p>
                            </div>
                        </div>

                        {/* Donation Amount Selection */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 !text-purple-700">Select Donation Amount</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                                {['1000', '1500', '3000'].map((amount) => (
                                    <label
                                        key={amount}
                                        className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedAmount === amount ? 'scale-105' : ''
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="amount"
                                            value={amount}
                                            checked={selectedAmount === amount}
                                            onChange={() => handleAmountChange(amount)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`p-4 rounded-xl text-center font-semibold border-2 transition-all ${selectedAmount === amount
                                                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-600 shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-green-400'
                                                }`}
                                        >
                                            ${amount}
                                        </div>
                                    </label>
                                ))}
                                <label
                                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedAmount === 'custom' ? 'scale-105' : ''
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="amount"
                                        value="custom"
                                        checked={selectedAmount === 'custom'}
                                        onChange={() => handleAmountChange('custom')}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`p-4 rounded-xl text-center font-semibold border-2 transition-all ${selectedAmount === 'custom'
                                                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-600 shadow-lg'
                                                : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-green-400'
                                            }`}
                                    >
                                        Custom
                                    </div>
                                </label>
                            </div>
                            {selectedAmount === 'custom' && (
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    placeholder="Enter custom amount"
                                    className="mt-4 w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none text-base"
                                />
                            )}
                        </div>

                        {/* Donation Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Payment Amount */}
                                <div className="sm:col-span-2">
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Payment Amount <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="paymentAmount"
                                        value={formData.paymentAmount}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.paymentAmount ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                        placeholder="Amount in USD"
                                    />
                                    {errors.paymentAmount && (
                                        <p className="text-red-600 text-sm mt-1">{errors.paymentAmount}</p>
                                    )}
                                </div>

                                {/* First Name */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Last Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Email Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Address 1 */}
                                <div className="sm:col-span-2">
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Address 1 <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address1"
                                        value={formData.address1}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.address1 ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.address1 && (
                                        <p className="text-red-600 text-sm mt-1">{errors.address1}</p>
                                    )}
                                </div>

                                {/* Address 2 */}
                                <div className="sm:col-span-2">
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        Address 2 <span className="text-gray-500 text-sm">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address2"
                                        value={formData.address2}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all text-base"
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        City <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    />
                                    {errors.city && (
                                        <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                                    )}
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        State <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.state ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                    >
                                        {usStates.map((state) => (
                                            <option key={state} value={state}>
                                                {state || 'Select State'}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.state && (
                                        <p className="text-red-600 text-sm mt-1">{errors.state}</p>
                                    )}
                                </div>

                                {/* ZIP Code */}
                                <div className="sm:col-span-2">
                                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                                        ZIP Code <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        maxLength="5"
                                        className={`w-full p-3 border-2 rounded-lg outline-none transition-all text-base ${errors.zipCode ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                            }`}
                                        placeholder="12345"
                                    />
                                    {errors.zipCode && (
                                        <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>
                                    )}
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="mt-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 !text-purple-700">Select Payment Method</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            checked={paymentMethod === 'paypal'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`p-4 rounded-xl text-center font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${paymentMethod === 'paypal'
                                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-600 shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-blue-400'
                                                }`}
                                        >
                                            💳 Pay using PayPal
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="zelle"
                                            checked={paymentMethod === 'zelle'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`p-4 rounded-xl text-center font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${paymentMethod === 'zelle'
                                                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white border-purple-600 shadow-lg'
                                                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-purple-400'
                                                }`}
                                        >
                                            📱 Pay using Zelle
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl mt-8"
                            >
                                Submit Donation
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Electronics Donations Section */}
            {activeTab === 'electronics' && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 !text-blue-700">
                            Donation of Electronics
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                            Electronics such as laptops, tablets, mobile devices, keyboards, and mice can be donated to HOPE3 Foundation.
                        </p>

                        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 !text-blue-800">About ecohome.one</h3>
                            <p className="text-gray-700 text-base sm:text-lg">
                                ecohome.one is an AI-powered digital home inventory platform that enables sustainable donation and reuse.
                            </p>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold mb-4 !text-blue-700">Steps to Donate:</h3>
                        <ol className="space-y-4 mb-8">
                            {[
                                'Create or sign in to ecohome.one',
                                'Record items for donation',
                                'Mark items for sharing',
                                'Select HOPE3 as the donation channel',
                                'Arrange handoff based on availability'
                            ].map((step, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow duration-300"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700 pt-1 text-base sm:text-lg">{step}</span>
                                </li>
                            ))}
                        </ol>

                        <a
                            href="https://ecohome.one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                            Visit ecohome.one →
                        </a>
                    </div>
                </div>
            )}

            {/* QR Code Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full transform animate-fade-in-up">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-6 !text-purple-700">
                                {paymentMethod === 'paypal' ? 'PayPal Payment' : 'Zelle Payment'}
                            </h3>

                            <div className="mb-6 flex justify-center">
                                {paymentMethod === 'paypal' ? (
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.paypal.com/paypalme/hope3org"
                                        alt="PayPal QR Code"
                                        className="w-64 h-64 border-4 border-blue-200 rounded-lg shadow-lg"
                                    />
                                ) : (
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.paypal.com/paypalme/hope3org"
                                        alt="Zelle QR Code"
                                        className="w-64 h-64 border-4 border-purple-200 rounded-lg shadow-lg"
                                    />
                                )}
                            </div>

                            {paymentMethod === 'paypal' && (
                                <a
                                    href="https://www.paypal.com/paypalme/hope3org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-blue-600 hover:text-blue-800 underline mb-4 break-all text-sm sm:text-base"
                                >
                                    https://www.paypal.com/paypalme/hope3org
                                </a>
                            )}

                            <p className="text-gray-700 mb-6 text-base sm:text-lg">
                                We will send you the tax-exempt receipt for your contribution.
                            </p>

                            <button
                                onClick={closeModal}
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <NewFooter />
        </div>
    );
};

export default Donations;
