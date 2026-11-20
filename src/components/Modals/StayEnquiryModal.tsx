import React, { useState } from 'react';
import { X, Calendar, Users, Phone, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { siteConfig, RoomItem } from '../../data/siteConfig';
import { validateStayEnquiry, calculateNights, generateEnquiryReference, StayEnquiryInput } from '../../utils/enquiry';

interface StayEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: RoomItem | null;
}

export const StayEnquiryModal: React.FC<StayEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialRoom,
}) => {
  const [formData, setFormData] = useState<StayEnquiryInput>({
    name: '',
    phone: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 2,
    roomPreference: initialRoom ? initialRoom.name : 'Country Cottages',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  if (!isOpen) return null;

  const nights = calculateNights(formData.checkInDate, formData.checkOutDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateStayEnquiry(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const ref = generateEnquiryReference('CR-STAY');
    setEnquiryRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      checkInDate: '',
      checkOutDate: '',
      guests: 2,
      roomPreference: 'Country Cottages',
      specialRequests: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stay-modal-title"
    >
      <div
        className="max-w-xl w-full luxury-glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/90 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 id="stay-modal-title" className="font-cinzel text-2xl font-bold text-white">
              Stay Enquiry Registered
            </h3>

            <p className="text-xs sm:text-sm text-[#9eb6a9] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your stay enquiry for{' '}
              <span className="text-white font-semibold">{formData.roomPreference}</span> ({formData.guests} guests, {nights > 0 ? `${nights} nights` : 'requested duration'}) has been logged.
            </p>

            <div className="p-3 bg-black/40 rounded-xl border border-white/10 max-w-xs mx-auto">
              <span className="text-[11px] text-[#8fa79b] block uppercase tracking-wider">
                Booking Reference
              </span>
              <span className="font-mono text-base font-bold text-emerald-300">
                {enquiryRef}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 text-xs text-emerald-200/90 text-left space-y-2">
              <p className="font-semibold text-white">Next Steps:</p>
              <p>
                Our reservations executive will call or message your number{' '}
                <span className="font-mono text-white font-medium">{formData.phone}</span> with current seasonal rates, meal options, and availability confirmation.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/60 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Desk Directly</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                Reservations & Rates
              </span>
              <h3 id="stay-modal-title" className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                Plan Your Stay
              </h3>
              <p className="text-xs text-[#9eb6a9] mt-1.5">
                Contact us for current room rates and seasonal packages in Raghudevpur, Howrah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                  Accommodation Preference
                </label>
                <select
                  value={formData.roomPreference}
                  onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1b16] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                >
                  {siteConfig.accommodations.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name} — {room.subtitle}
                    </option>
                  ))}
                  <option value="Any Available Room">Any Available Room / Best Rate</option>
                </select>
              </div>

              {/* Dates & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    value={formData.checkInDate}
                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.checkInDate && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.checkInDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    value={formData.checkOutDate}
                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.checkOutDate && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.checkOutDate}
                    </p>
                  )}
                </div>
              </div>

              {nights > 0 && (
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/30 text-xs text-emerald-300 font-medium flex items-center justify-between">
                  <span>Calculated Duration:</span>
                  <span className="font-mono font-bold">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priyankar Datta"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98362 85550"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Guests Count & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                  />
                  {errors.guests && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.guests}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                  Special Notes or Meal Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Ground floor cottage, early check-in, pool view..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-xl shadow-black/40 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 text-emerald-950" />
                  <span>Request Current Rates & Availability</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#7e968a] pt-1">
                Rates & confirmation will be shared directly without intermediaries.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
