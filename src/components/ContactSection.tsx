import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, MessageSquare, ShieldCheck, Navigation } from 'lucide-react';
import { validateContactEnquiry, generateEnquiryReference, ContactEnquiryInput } from '../utils/enquiry';

interface ContactSectionProps {
  onOpenAuditModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAuditModal }) => {
  const [formData, setFormData] = useState<ContactEnquiryInput>({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Stay & Accommodation',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactEnquiry(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const ref = generateEnquiryReference('CR-GEN');
    setEnquiryRef(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Reservations & Inquiries</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Connect With Country Roads
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9eb6a9]">
            Have a question about room bookings, weekend day packages, wedding lawn rentals, or dining arrangements? Our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Column with Resort Photograph */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photographic Resort Landscape Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <PropertyImage
                imageKey="about_building"
                alt="Country Roads colonial club house and grounds in Raghudevpur, Howrah"
                aspectRatio="16/9"
                title="Country Roads Club House & Grounds"
                subtitle="PO & Village Raghudevpur, Howrah - 711 322"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-emerald-300 border border-white/10">
                  Resort Grounds & Front Desk
                </span>
              </div>
            </div>

            <div className="luxury-glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Official Reservation & Front Desk
                </h3>
                <p className="text-xs text-[#9eb6a9] mt-1">
                  Connect directly with our front office and sales representatives:
                </p>
                
                {/* Phone lines */}
                <div className="mt-4 space-y-2.5">
                  <a
                    href="tel:+919836285550"
                    className="flex items-center justify-between text-sm sm:text-base font-mono font-bold text-emerald-300 hover:text-white transition-colors bg-white/5 px-4 py-2.5 rounded-xl border border-emerald-500/30"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>+91 98362 85550</span>
                    </div>
                    <span className="text-[10px] font-sans text-emerald-400/80 uppercase tracking-wider">Primary Desk</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href="tel:+919147052922"
                      className="flex items-center gap-2 text-xs font-mono text-emerald-300 hover:text-white bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>+91 91470 52922</span>
                    </a>
                    <a
                      href="tel:+918697719727"
                      className="flex items-center gap-2 text-xs font-mono text-amber-300 hover:text-white bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Helpline: 8697719727</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Emails & Address */}
              <div className="pt-4 border-t border-white/10 space-y-3.5">
                <div className="flex items-start gap-3 text-xs text-[#a8c2b5]">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Official Email Addresses:</span>
                    <a href="mailto:sales@countryroads.co.in" className="text-emerald-300 hover:underline block">sales@countryroads.co.in</a>
                    <a href="mailto:frontoffice@countryroads.co.in" className="text-emerald-300 hover:underline block">frontoffice@countryroads.co.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#a8c2b5]">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Resort Address:</span>
                    <span>{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#a8c2b5]">
                  <Navigation className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Directions from Kolkata:</span>
                    <span>20–30 mins from Vidyasagar Setu via Kona Expressway and Mumbai Highway (NH-6) to Panchla / Domjur-Bauria Road.</span>
                    <a
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Review business verification checklist</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-[#070c0a]/90 rounded-2xl p-6 sm:p-8 border border-white/10 luxury-glass">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#9eb6a9] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your enquiry has been registered under:
                </p>
                <div className="font-mono text-sm tracking-wider font-bold text-emerald-300 bg-black/50 py-2.5 px-5 rounded-lg inline-block border border-white/10">
                  {enquiryRef}
                </div>
                <p className="text-xs text-[#8fa79b]">
                  Our reservations team will reach out at{' '}
                  <span className="text-white font-mono">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      enquiryType: 'Stay & Accommodation',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:text-white border border-emerald-500/30 rounded-lg hover:bg-emerald-950/40 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rohini Roy"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98362 85550"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Enquiry Subject *
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1b16] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                      <option value="Stay & Accommodation">Stay & Accommodation</option>
                      <option value="Wedding & Lawn Celebration">Wedding & Lawn Celebration</option>
                      <option value="Dining & Restaurant Reservation">Dining & Restaurant Reservation</option>
                      <option value="Corporate Offsite & Day Package">Corporate Offsite & Day Package</option>
                      <option value="General Query">General Query</option>
                    </select>
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    How May We Assist You? *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your dates, preferred room type, event plans, or questions..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-lg shadow-black/30 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-emerald-950" />
                  <span>Send Enquiry to Country Roads</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
