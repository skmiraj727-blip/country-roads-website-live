import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, MapPin, Navigation, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenStayModal: () => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStayModal, onOpenAuditModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050907] border-t border-white/[0.08] text-[#9eb6a9] overflow-hidden">
      {/* Top Banner (inspired by the massive callout in the reference image) */}
      <div className="border-b border-white/[0.08] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background photographic atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/official/swimming_pool.jpg"
            alt="Country Roads swimming pool and palm trees"
            className="w-full h-full object-cover object-center opacity-20 filter blur-[1px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050907] via-[#050907]/85 to-[#050907]" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold">
            Nature Escape Near Kolkata
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider uppercase leading-tight">
            Ready to Experience <br />
            <span className="font-cormorant italic font-normal text-emerald-200">Country Roads?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a8c2b5] max-w-xl mx-auto">
            Book your countryside weekend getaway, celebrate an open-air lawn wedding, or arrange an executive team retreat.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenStayModal}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-xl shadow-black/40 active:scale-95"
            >
              Plan Your Visit
            </button>

            <a
              href="tel:+919836285550"
              className="px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:text-white bg-white/5 border border-white/15 transition-colors flex items-center gap-2 font-mono"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 98362 85550</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 flex items-center justify-center shrink-0">
                <img
                  src={siteConfig.brand.logoUrl}
                  alt="Country Roads Resort Logo"
                  className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(214,178,120,0.28)]"
                />
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-white uppercase">
                Country Roads
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9eb6a9] max-w-sm leading-relaxed">
              Spread over 55 acres of lush countryside in Raghudevpur, Howrah, Country Roads features 21 modern rooms & suites, 30,000 sq.ft. of celebration lawns, Five Spices dining, After Hours Pub, Blue Water Cafe poolside, conference venues, and adventure activities just 20-30 minutes from Kolkata.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/10"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Business Verification & Audit Notes</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Explore Country Roads
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#stays" className="hover:text-emerald-300 transition-colors">
                  Resort Suite Views & Tariffs
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-emerald-300 transition-colors">
                  Exclusive Packages & Gala Time
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-emerald-300 transition-colors">
                  Resort Facilities (7 Pillars)
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-emerald-300 transition-colors">
                  Five Spices, Pub & Cafe
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-emerald-300 transition-colors">
                  Weddings & Celebrations
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-emerald-300 transition-colors">
                  European Corporate Meeting Rooms
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-300 transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-300 transition-colors">
                  Property Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-emerald-300 transition-colors">
                  Location & Driving Route
                </a>
              </li>
            </ul>
          </div>

          {/* Property Contact & Directions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#9eb6a9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="space-y-1 pt-1 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href="tel:+919836285550" className="hover:text-white">+91 98362 85550</a>
                  <span className="text-[10px] text-emerald-500 font-sans">/</span>
                  <a href="tel:+919147052922" className="hover:text-white">+91 91470 52922</a>
                </div>
                <div className="text-amber-300/90 pl-5 text-[11px]">
                  Helpline: <a href="tel:+918697719727" className="hover:underline">8697719727</a>
                </div>
              </div>
              <div className="pt-1 text-xs text-emerald-300">
                Email: <a href="mailto:sales@countryroads.co.in" className="hover:underline">sales@countryroads.co.in</a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-medium transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e968a]">
          <p>
            © {currentYear} Country Roads. All rights reserved. Countryside Resort, Howrah, West Bengal.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="hover:text-emerald-300 transition-colors"
            >
              Content Source Verification
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
