/**
 * Utility functions for common tasks
 */

/**
 * Format currency with Indian Rupees
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Generate a unique PO number
 */
export const generatePONumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0');
  return `PO-${year}${month}-${random}`;
};

/**
 * Generate a unique Challan number
 */
export const generateChallanNumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0');
  return `CH-${year}${month}-${random}`;
};

/**
 * Calculate GST amount
 */
export const calculateGST = (amount, gstRate = 18) => {
  return (amount * gstRate) / 100;
};

/**
 * Calculate total with GST
 */
export const calculateTotal = (amount, gstRate = 18) => {
  const gst = calculateGST(amount, gstRate);
  return amount + gst;
};

/**
 * Format date as DD/MM/YYYY
 */
export const formatDate = (date = new Date()) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Format date as YYYY-MM-DD for input fields
 */
export const formatDateForInput = (date = new Date()) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Convert word numbers to numerics (e.g., "Hundred Twenty" -> 120)
 */
export const amountInWords = (amount) => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const scales = ['', 'Thousand', 'Lakh', 'Crore'];

  if (amount === 0) return 'Zero';

  let result = '';
  let scaleIndex = 0;

  while (amount > 0) {
    const groupValue = amount % 1000;
    
    if (groupValue > 0) {
      const groupText = convertGroupToWords(groupValue, ones, tens, teens);
      result = `${groupText} ${scales[scaleIndex]}`.trim() + (result ? ' ' + result : '');
    }

    amount = Math.floor(amount / 1000);
    scaleIndex++;
  }

  return result;
};

/**
 * Helper function to convert a group of 3 digits to words
 */
const convertGroupToWords = (group, ones, tens, teens) => {
  let result = '';

  // Hundreds place
  const hundreds = Math.floor(group / 100);
  if (hundreds > 0) {
    result += ones[hundreds] + ' Hundred ';
  }

  // Tens and ones place
  const remainder = group % 100;
  if (remainder >= 10 && remainder < 20) {
    result += teens[remainder - 10];
  } else {
    const tensPlace = Math.floor(remainder / 10);
    const onesPlace = remainder % 10;
    
    if (tensPlace > 0) {
      result += tens[tensPlace] + ' ';
    }
    if (onesPlace > 0) {
      result += ones[onesPlace];
    }
  }

  return result.trim();
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};

/**
 * Debounce function
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Local storage helpers
 */
export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage: ${error}`);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in localStorage: ${error}`);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage: ${error}`);
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage: ${error}`);
    }
  },
};

/**
 * Class name builder utility
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
