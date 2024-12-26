// src/constants.ts

// Cookie consent categories
export const COOKIE_CATEGORIES = {
  ESSENTIAL: 'Essential',
  ANALYTICS: 'Analytics',
  MARKETING: 'Marketing',
};

// API URL for any backend services (if applicable)
export const API_URL = "https://api.example.com"; // Replace with your actual API URL

// Timeouts and limits
export const TIMEOUT = 5000; // in milliseconds
export const MAX_RETRIES = 3; // Maximum number of retries for API calls

// User consent messages
export const CONSENT_MESSAGES = {
  ACCEPT_ALL: "You have accepted all cookies.",
  DECLINE_ALL: "You have declined all cookies except essential ones.",
  CUSTOMIZE: "You can customize your cookie preferences.",
};

// Modal text constants
export const MODAL_TEXT = {
  TITLE: "We use cookies",
  DEFAULT_MODAL_TEXT: "We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our cookie policy.",
  ESSENTIAL_DESCRIPTION: "These cookies are essential for the proper functioning of our services and cannot be disabled.",
  ANALYTICS_DESCRIPTION: "These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.",
  MARKETING_DESCRIPTION: "These cookies allow us to show you advertisements relevant to you through our advertising partners.",
};

// Button text constants
export const BUTTON_TEXT = {
  DECLINE_ALL: "Decline all",
  ALLOW_COOKIES: "Allow cookies",
  MANAGE_COOKIES: "Manage cookies",
  ACCEPT_ALL: "Accept all",
  SAVE: "Save",
};

