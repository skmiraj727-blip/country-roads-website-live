/**
 * Validation and business logic utilities for Country Roads enquiries.
 * Pure logic decoupled from UI components for deterministic unit testing.
 */

export interface StayEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomPreference?: string;
  specialRequests?: string;
}

export interface EventEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  approxGuests: number;
  message?: string;
}

export interface ContactEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  enquiryType: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates an Indian phone number (10 digits, optional country code +91 or 0 prefix).
 */
export function isValidIndianPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Matches +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or 10 digits starting with 6,7,8,9
  const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleaned);
}

/**
 * Calculates number of nights between check-in and check-out dates.
 * Returns -1 if invalid or checkout is not strictly after checkin.
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  
  if (isNaN(inDate.getTime()) || isNaN(outDate.getTime())) return -1;
  
  const diffTime = outDate.getTime() - inDate.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : -1;
}

/**
 * Validates stay enquiry form submission.
 */
export function validateStayEnquiry(input: StayEnquiryInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please provide your full name (minimum 2 characters)';
  }

  if (!isValidIndianPhone(input.phone)) {
    errors.phone = 'Please provide a valid 10-digit mobile number';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
  }

  if (!input.checkInDate) {
    errors.checkInDate = 'Please select a check-in date';
  }

  if (!input.checkOutDate) {
    errors.checkOutDate = 'Please select a check-out date';
  } else if (input.checkInDate) {
    const nights = calculateNights(input.checkInDate, input.checkOutDate);
    if (nights <= 0) {
      errors.checkOutDate = 'Check-out date must be after check-in date';
    }
  }

  if (!input.guests || input.guests < 1) {
    errors.guests = 'Please specify at least 1 guest';
  } else if (input.guests > 50) {
    errors.guests = 'For groups over 50 guests, please use the Group/Event Enquiry';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates wedding/event enquiry form submission.
 */
export function validateEventEnquiry(input: EventEnquiryInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please provide your full name';
  }

  if (!isValidIndianPhone(input.phone)) {
    errors.phone = 'Please provide a valid 10-digit mobile number';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
  }

  if (!input.eventType || input.eventType.trim() === '') {
    errors.eventType = 'Please select an event type';
  }

  if (!input.eventDate) {
    errors.eventDate = 'Please specify your preferred event date';
  }

  if (!input.approxGuests || input.approxGuests < 10) {
    errors.approxGuests = 'Please specify expected guest count (minimum 10)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates general contact message form submission.
 */
export function validateContactEnquiry(input: ContactEnquiryInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please provide your full name';
  }

  if (!isValidIndianPhone(input.phone)) {
    errors.phone = 'Please provide a valid 10-digit mobile number';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
  }

  if (!input.message || input.message.trim().length < 5) {
    errors.message = 'Please provide a short message describing your enquiry';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a clean reference code for enquiries, e.g. CR-STAY-8234 or CR-EVT-9182
 */
export function generateEnquiryReference(prefix: 'CR-STAY' | 'CR-EVT' | 'CR-GEN'): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${randomSuffix}`;
}
