import React, { useState } from 'react';
import { ChevronDown, MapPin, Sparkles, Calendar, ArrowRight, ShieldCheck, Clock, Trees, Utensils, Briefcase, Search, Users } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onExplore: () => void;
  onOpenStayModal: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenStayModal, onOpenAuditModal }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');

  const handleBookingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenStayModal();
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#070c0a]">
      {/* Background Layer: Official High-Resolution Country Roads Resort Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/official/hero_slider_1.jpg"
          alt="Country Roads 55-acre luxury resort and swimming pool"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Cinematic dark scrim overlays (matching reference Altai Ridge dark luxury depth) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c0a] via-[#070c0a]/75 to-[#070c0a]/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070c0a]/50 to-[#070c0a]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-emerald-950/30 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Location Cue & Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pt-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Panchla · Raghudevpur, Howrah · West Bengal</span>
            <span className="text-white/30">·</span>
            <span className="text-[#a8c2b5]">20 mins from Vidyasagar Setu</span>
          </div>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-emerald-300/80 hover:text-emerald-200 transition-colors bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1 rounded-full border border-white/10"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Verified Official Content</span>
          </button>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="relative my-2 select-none">
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold text-white tracking-[0.06em] leading-[0.9] uppercase">
            <span className="block text-white/95 drop-shadow-sm">Country</span>
            <span className="block text-emerald-200/90 tracking-[0.08em] mt-1 lg:mt-2">Roads</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-amber-300/90 font-medium">
            {siteConfig.brand.shortTagline}
          </p>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-6 lg:mt-10">
          {/* Left Column: Floating Frosted Status / Highlights Card */}
          <div className="lg:col-span-5">
            <div className="luxury-glass rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group border border-white/15">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-400/60 to-emerald-500/0" />
              
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-emerald-300/90 font-medium pb-4 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  55-Acre Nature Sanctuary
                </span>
                <span className="text-white/60 font-mono text-[11px]">Howrah · WB</span>
              </div>

              {/* Photo preview strip embedded inside card */}
              <div className="mt-4 mb-3 relative rounded-xl overflow-hidden border border-white/10 h-28 sm:h-32 group/thumb">
                <img
                  src="/assets/official/hero_slider_2.jpg"
                  alt="Country Roads estate entry arch and gate"
                  className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                  <span className="font-medium tracking-wide">Main Estate Gateway</span>
                  <span className="text-emerald-300 font-mono text-[10px] uppercase">Official Photo</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-sm font-medium text-white/95 leading-relaxed">
                  {siteConfig.story.leadParagraph}
                </p>
                <div className="text-xs text-[#a3bcb0] space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span>Driving Route:</span>
                    <span className="text-white font-medium">NH-6 Mumbai Highway / Kona Expressway</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Property Features:</span>
                    <span className="text-emerald-300 font-medium">21 Rooms · 30,000 sq.ft. Lawns · 55 Acres</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Direct Reservations:</span>
                    <a
                      href={`tel:${siteConfig.contact.phoneClean}`}
                      className="text-white hover:text-emerald-300 font-mono underline decoration-emerald-500/40"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Progress bar aesthetic */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex justify-between text-[11px] text-[#8fa79b] mb-1.5">
                  <span>Weekend Stay & Day Outing Packages</span>
                  <span className="text-emerald-300 font-medium">From ₹3,100+GST</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full w-[92%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Welcome & Dual Call-to-Actions */}
          <div className="lg:col-span-7 lg:pl-6 flex flex-col justify-end">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-emerald-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Luxury Holiday Destination</span>
              </div>
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-normal italic text-white/95 leading-tight">
                “{siteConfig.brand.shortTagline}”
              </h2>
              <p className="text-sm sm:text-base text-[#a8c2b5] leading-relaxed">
                Country Roads is a pristine retreat away from the maddening rush of the city. Dotted with sprawling lush green lawns, gardens, trees, and abundant natural water bodies, the unspoiled world harmonizes the mind, body and soul.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExplore}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-50 transition-all duration-200 shadow-xl shadow-black/40 flex items-center gap-2.5 active:scale-95 group"
                >
                  <span>Explore 55-Acre Resort</span>
                  <ArrowRight className="w-4 h-4 text-emerald-900 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={onOpenStayModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white hover:text-emerald-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-200 flex items-center gap-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Enquire For Stays</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Bar from Official Website Screenshot */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl luxury-glass border border-white/15 shadow-2xl">
          <form onSubmit={handleBookingSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Adults (Age 12+)
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0e1b16] border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-400"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4+ Adults</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Children (Below 12)
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0e1b16] border border-white/15 text-white text-xs focus:outline-none focus:border-emerald-400"
              >
                <option value="0">No Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3+ Children</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-[#06120c] bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Rooms</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom KPI Strip: The 4 Official Pillars */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {siteConfig.story.pillars.map((pillar) => (
            <div key={pillar.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                {pillar.icon === 'clock' && <Clock className="w-5 h-5 text-emerald-400" />}
                {pillar.icon === 'trees' && <Trees className="w-5 h-5 text-teal-400" />}
                {pillar.icon === 'utensils' && <Utensils className="w-5 h-5 text-amber-300" />}
                {pillar.icon === 'briefcase' && <Briefcase className="w-5 h-5 text-emerald-300" />}
              </div>
              <div>
                <p className="font-cinzel text-base font-bold text-white tracking-wide">{pillar.value}</p>
                <p className="text-xs text-[#8fa79b]">{pillar.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered subtle scroll indicator */}
        <div className="flex justify-center pt-6">
          <button
            type="button"
            onClick={onExplore}
            className="flex flex-col items-center text-[10px] tracking-widest uppercase text-[#8fa79b] hover:text-white transition-colors"
            aria-label="Scroll to discover more"
          >
            <span className="mb-1">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-emerald-400 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
