/**
 * GoogleSheetService.js
 * Service to handle communication with Google Apps Script Web App
 */

// ⚠️ IMPORTANT: URL is now loaded from .env file
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const submitToSheet = async (sheetName, data) => {
    // If URL is not set, log warning and simulate success
    if (GOOGLE_SCRIPT_URL === 'YOUR_WEB_APP_URL_HERE') {
        console.warn('⚠️ Google Sheet API URL not set. Data was NOT saved to sheet.');
        console.log('Simulated Payload:', { sheet: sheetName, data });
        return { success: true, message: 'Simulated success (URL not configured)' };
    }

    try {
        // We use no-cors to avoid CORS issues with Google Apps Script redirects.
        // However, this means we get an opaque response (cannot read status/body).
        // Alternatively, we can use a proxy or JSONP, but POST with hidden iframe 
        // or simple 'application/x-www-form-urlencoded' often works best.
        // Here we'll try standard fetch with text/plain to avoid preflight options check if possible,
        // or just standard POST.

        // Google Apps Script usually requires a specific setup for CORS.
        // The most reliable way for simple integrations without a proxy is often
        // sending data as URL parameters or form data properly.

        const params = new URLSearchParams();
        params.append('action', 'create');
        params.append('sheet', sheetName);
        params.append('data', JSON.stringify(data));

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: params
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Google Sheet API Error:', error);
        throw error;
    }
};

export const GoogleSheetService = {
    /**
     * Submit Donation Data
     * Columns: Timestamp, Amount, First Name, Last Name, Phone, Email, Address 1, Address 2, City, State, ZIP
     */
    createDonation: async (formData) => {
        const data = {
            'Amount': formData.paymentAmount,
            'First Name': formData.firstName,
            'Last Name': formData.lastName,
            'Phone': formData.phone,
            'Email': formData.email,
            'Address 1': formData.address1,
            'Address 2': formData.address2,
            'City': formData.city,
            'State': formData.state,
            'ZIP': formData.zipCode
        };
        return submitToSheet('Donations', data);
    },

    /**
     * Submit Student Application
     * Columns: Timestamp, Student Name, Father Name, Mother Name, Mobile, DOB, School, Medium, City, District, Pincode, 10th Score, 12th Score
     */
    createStudent: async (formData) => {
        const data = {
            'Student Name': formData.studentName,
            'Father Name': formData.fatherName,
            'Mother Name': formData.motherName,
            'Mobile': formData.mobileNumber,
            'DOB': formData.dob,
            'School': formData.schoolName,
            'Medium': formData.mediumOfInstruction,
            'City': formData.city,
            'District': formData.district,
            'Pincode': formData.pincode,
            '10th Score': formData.score10th,
            '12th Score': formData.score12thHalfYearly
        };
        return submitToSheet('Students', data);
    },

    /**
     * Submit Volunteer Application
     * Columns: Timestamp, Name, DOB, Mobile, Language 1, Language 2, City, District, Pincode, Roles
     */
    createVolunteer: async (formData) => {
        const data = {
            'Name': formData.volunteerName,
            'DOB': formData.dob,
            'Mobile': formData.mobileNumber,
            'Language 1': formData.languagePref1,
            'Language 2': formData.languagePref2,
            'City': formData.city,
            'District': formData.district,
            'Pincode': formData.pincode,
            'Roles': formData.preferredRoles.join(', ')
        };
        return submitToSheet('Volunteers', data);
    },

    /**
     * Submit Feedback
     * Columns: Timestamp, Name, Mobile, Email, Message
     */
    createFeedback: async (formData) => {
        const data = {
            'Name': formData.name,
            'Mobile': formData.mobile,
            'Email': formData.email,
            'Message': formData.message
        };
        return submitToSheet('Feedback', data);
    }
};
