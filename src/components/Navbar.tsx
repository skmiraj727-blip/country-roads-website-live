import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onOpenStayModal: () => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStayModal, onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stays', href: '#stays' },
    { label: 'Packages', href: '#packages' },
    { label: 'Facilities', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'Weddings', href: '#weddings' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070c0a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 xl:gap-6">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm shrink-0"
            >
              <div className="w-11 h-9 sm:w-12 sm:h-10 flex items-center justify-center shrink-0">
                <img
                  src={siteConfig.brand.logoUrl}
                  alt="Country Roads Resort Logo"
                  className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(214,178,120,0.28)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg xl:text-xl font-bold tracking-[0.16em] text-white uppercase whitespace-nowrap shrink-0 group-hover:text-emerald-200 transition-colors">
                  Country Roads
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-emerald-400/80 font-medium">
                  Resort · Howrah
                </span>
              </div>
            </a>

            {/* Zone 2: Single-Line Nav Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs tracking-wider uppercase font-medium text-[#c0d1c7]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Quick Contact */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="hidden xl:flex items-center gap-2 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-colors px-3 py-1.5 rounded-lg border border-emerald-800/40 hover:border-emerald-700/60 bg-emerald-950/20 whitespace-nowrap shrink-0"
                title="Direct front desk phone line"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono tabular-nums text-xs">{siteConfig.contact.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onOpenStayModal}
                className="flex items-center gap-2 px-3.5 xl:px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#06120c] bg-[#eef5f1] hover:bg-white rounded-lg transition-all duration-200 shadow-md shadow-emerald-950/20 active:scale-95 whitespace-nowrap shrink-0"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-900" />
                Plan Your Visit
              </button>
            </div>

            {/* Mobile & Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="p-2 text-emerald-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
                aria-label="Call Country Roads"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/90 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a1410]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-emerald-100/90 pb-6 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-emerald-300 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-emerald-500/60 font-mono">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStayModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#06120c] bg-white rounded-lg shadow-lg"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-950" />
                Plan Your Visit · Enquire
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Desk: {siteConfig.contact.phoneDisplay}
              </a>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuditModal();
                  }}
                  className="text-[11px] text-emerald-400/80 hover:text-emerald-300 underline underline-offset-4"
                >
                  View Verified Business Details & Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
