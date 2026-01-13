// Utility function to submit form data to Google Sheets
export const submitToGoogleSheets = async (formData, formType) => {
  const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
  
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: formType
      })
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
};

// Form submission handlers
export const submitDonationForm = (formData) => {
  return submitToGoogleSheets(formData, 'donation');
};

export const submitStudentForm = (formData) => {
  return submitToGoogleSheets(formData, 'student');
};

export const submitVolunteerForm = (formData) => {
  return submitToGoogleSheets(formData, 'volunteer');
};

export const submitFeedbackForm = (formData) => {
  return submitToGoogleSheets(formData, 'feedback');
};