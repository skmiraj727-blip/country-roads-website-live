import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { HeartHandshake, Sparkles, Calendar, Users, Phone, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { validateEventEnquiry, generateEnquiryReference, EventEnquiryInput } from '../utils/enquiry';

interface WeddingsEventsProps {
  onOpenEventModal: () => void;
}

export const WeddingsEvents: React.FC<WeddingsEventsProps> = ({ onOpenEventModal }) => {
  const [formData, setFormData] = useState<EventEnquiryInput>({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Reception',
    eventDate: '',
    approxGuests: 150,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEventEnquiry(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const ref = generateEnquiryReference('CR-EVT');
    setEnquiryRef(ref);
    setIsSubmitted(true);
  };

  return (
    <section id="weddings" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Destination Weddings & Grand Celebrations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight">
            Celebrate Under <br />
            <span className="font-cormorant italic font-normal text-amber-200">The Open Bengal Sky.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9eb6a9] leading-relaxed">
            {siteConfig.weddingsAndEvents.description}
          </p>
        </div>

        {/* Top Feature Visual Grid: Editorial Asymmetric Wedding Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <PropertyImage
                imageKey="wedding_bride"
                alt="Country Roads Dream Wedding Destination near Kolkata - 30,000 sq.ft. lawn celebrations"
                aspectRatio="16/9"
                title="Dream Destination Weddings"
                subtitle="30,000 Sq.Ft. Lawns & Open Bengal Skies"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
                  30,000 Sq.Ft. Celebration Lawns
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Dual Wedding Detail Photography Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden border border-white/10 group/inset h-36">
                <img
                  src="/assets/official/events_gala.jpg"
                  alt="A Gala Time at Country Roads - Festive Events & Rain Dance"
                  className="w-full h-full object-cover group-hover/inset:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-wider text-amber-400 font-mono block">Festivals</span>
                  <span className="text-xs font-medium text-white/95">Holi & Gala Events</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 group/inset h-36">
                <img
                  src="/assets/official/DJI_0050.jpg"
                  alt="Drone aerial view of 55-acre Country Roads resort grounds"
                  className="w-full h-full object-cover group-hover/inset:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-wider text-amber-400 font-mono block">55-Acre Estate</span>
                  <span className="text-xs font-medium text-white/95">Panoramic Lawns</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-800/30">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Event Coordinator</span>
              </div>
              <p className="text-xs text-[#a8c2b5] leading-relaxed">
                Every celebration is unique. Our on-site events team coordinates lawn setups, stage decor guidelines, lighting, and guest catering so your family can focus on celebrating.
              </p>
            </div>
          </div>
        </div>

        {/* Celebration Spaces Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.weddingsAndEvents.spaces.map((space, i) => (
            <div
              key={space.name}
              className="p-6 rounded-2xl luxury-glass-subtle border border-white/10 hover:border-amber-400/40 transition-colors"
            >
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                0{i + 1}
              </span>
              <h3 className="font-cinzel text-lg font-bold text-white mt-2">
                {space.name}
              </h3>
              <p className="text-xs text-[#9eb6a9] mt-2 leading-relaxed">
                {space.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Event Enquiry Section & Form */}
        <div className="luxury-glass rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Context & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                  Personalized Planning
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-2">
                  Plan Your Celebration
                </h3>
                <p className="text-xs sm:text-sm text-[#9eb6a9] mt-3 leading-relaxed">
                  Share your preferred celebration date and expected guest count. Our senior wedding coordinator will connect directly with customized options and availability.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#b8ccc1]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-medium block">Custom Event Scales</span>
                    <span>Intimate sangeet parties to grand wedding receptions</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#b8ccc1]">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-medium block">Direct Wedding Desk</span>
                    <a
                      href={`tel:${siteConfig.contact.phoneClean}`}
                      className="text-amber-300 hover:underline font-mono"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-[#8fa79b]">
                Notice: Specific venue guest capacity guidelines and customized packages are calculated based on your layout needs. No fixed unverified package prices are published.
              </div>
            </div>

            {/* Right Column: Working Event Enquiry Form */}
            <div className="lg:col-span-7 bg-[#070c0a]/80 rounded-2xl p-6 sm:p-8 border border-white/10">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-white">
                    Enquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9eb6a9] max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your celebration enquiry for <span className="text-white font-medium">{formData.eventType}</span> has been logged under reference:
                  </p>
                  <div className="font-mono text-sm tracking-wider font-bold text-amber-400 bg-black/40 py-2 px-4 rounded-lg inline-block border border-white/10">
                    {enquiryRef}
                  </div>
                  <p className="text-xs text-[#8fa79b]">
                    Our event coordinator will contact you shortly at{' '}
                    <span className="text-emerald-300 font-mono">{formData.phone}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Wedding Reception',
                        eventDate: '',
                        approxGuests: 150,
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:text-white border border-emerald-500/30 rounded-lg hover:bg-emerald-950/40 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Suman Sen"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98362 85550"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors font-mono"
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
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1b16] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Wedding & Mandap Ceremony">Wedding & Mandap Ceremony</option>
                        <option value="Sangeet & Mehendi Night">Sangeet & Mehendi Night</option>
                        <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                        <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                        <option value="Family Get-Together">Family Get-Together</option>
                        <option value="Corporate Offsite / Event">Corporate Offsite / Event</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      {errors.eventDate && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.eventDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Approximate Guest Count *
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        step="10"
                        value={formData.approxGuests}
                        onChange={(e) => setFormData({ ...formData, approxGuests: parseInt(e.target.value) || 0 })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors font-mono"
                      />
                      {errors.approxGuests && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.approxGuests}
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
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
                      Special Requirements or Setup Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Lawn mandate, overnight guest rooms, catering preferences..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-amber-300 hover:bg-amber-200 transition-all duration-200 shadow-lg shadow-amber-950/30 flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>Request Event Consultation</span>
                    <ArrowRight className="w-4 h-4 text-amber-950" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
