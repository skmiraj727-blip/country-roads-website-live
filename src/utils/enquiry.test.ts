import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidIndianPhone,
  calculateNights,
  validateStayEnquiry,
  validateEventEnquiry,
  generateEnquiryReference,
} from './enquiry';

test('isValidIndianPhone accurately validates Indian numbers', () => {
  // Valid formats
  assert.equal(isValidIndianPhone('9836285550'), true);
  assert.equal(isValidIndianPhone('+91 98362 85550'), true);
  assert.equal(isValidIndianPhone('09836285550'), true);
  assert.equal(isValidIndianPhone('+91-9836285550'), true);
  assert.equal(isValidIndianPhone('8123456789'), true);

  // Invalid formats
  assert.equal(isValidIndianPhone('12345'), false);
  assert.equal(isValidIndianPhone('1234567890'), false); // Starts with 1
  assert.equal(isValidIndianPhone(''), false);
  assert.equal(isValidIndianPhone('abcdefghij'), false);
});

test('calculateNights correctly determines duration between dates', () => {
  assert.equal(calculateNights('2026-12-10', '2026-12-12'), 2);
  assert.equal(calculateNights('2026-12-10', '2026-12-11'), 1);
  assert.equal(calculateNights('2026-12-12', '2026-12-10'), -1); // Checkout before checkin
  assert.equal(calculateNights('2026-12-10', '2026-12-10'), -1); // Same day
  assert.equal(calculateNights('', ''), 0);
});

test('validateStayEnquiry enforces required fields and valid durations', () => {
  const validStay = {
    name: 'Ananya Mukherjee',
    phone: '+91 98362 85550',
    email: 'ananya@example.com',
    checkInDate: '2026-12-24',
    checkOutDate: '2026-12-26',
    guests: 2,
    roomPreference: 'Club Villa',
  };

  const validResult = validateStayEnquiry(validStay);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);

  // Invalid test: checkout before checkin & invalid phone
  const invalidStay = {
    name: 'A',
    phone: 'invalid',
    checkInDate: '2026-12-26',
    checkOutDate: '2026-12-24',
    guests: 0,
  };

  const invalidResult = validateStayEnquiry(invalidStay);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.checkOutDate);
  assert.ok(invalidResult.errors.guests);
});

test('validateEventEnquiry checks celebration details and guest minimums', () => {
  const validEvent = {
    name: 'Debashis Roy',
    phone: '9836285550',
    eventType: 'Wedding Reception',
    eventDate: '2026-11-20',
    approxGuests: 250,
  };

  const result = validateEventEnquiry(validEvent);
  assert.equal(result.isValid, true);

  const invalidEvent = {
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    approxGuests: 5,
  };

  const invalidResult = validateEventEnquiry(invalidEvent);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.eventType);
  assert.ok(invalidResult.errors.approxGuests);
});

test('generateEnquiryReference returns formatted prefix and number', () => {
  const ref = generateEnquiryReference('CR-STAY');
  assert.match(ref, /^CR-STAY-\d{4}$/);
});
