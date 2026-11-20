import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Briefcase, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { PropertyImage } from './PropertyImage';

interface CorporateEventsProps {
  onOpenCorporateEnquiry: () => void;
}

export const CorporateEvents: React.FC<CorporateEventsProps> = ({ onOpenCorporateEnquiry }) => {
  return (
    <section id="corporate" className="relative py-20 bg-[#070c0a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Multi-Image Corporate Visual Composition */}
          <div className="lg:col-span-6 relative pb-6 pr-0 sm:pr-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <PropertyImage
                imageKey="corp_meeting"
                alt="European inspired corporate conference venue at Country Roads Howrah"
                aspectRatio="16/9"
                title="European Corporate Meeting Rooms"
                subtitle="State-of-the-Art Conference Venue Near Kolkata"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-emerald-300 border border-white/10">
                  European Design · 20 Mins From Kolkata
                </span>
              </div>
            </div>

            {/* Overlapping secondary card: pool view breakout */}
            <div className="hidden sm:block absolute -bottom-3 right-0 w-60 rounded-xl overflow-hidden shadow-2xl border border-white/15 luxury-glass group/inset">
              <div className="h-28 relative overflow-hidden">
                <img
                  src="/assets/official/swimming_pool.jpg"
                  alt="Overlooking swimming pool and gardens during corporate offsites"
                  className="w-full h-full object-cover group-hover/inset:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-mono block">Breakout Views</span>
                  <span className="text-[11px] font-medium text-white/95">Overlooking Azure Pool</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Information & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-2">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>Business & Group Offsites</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                {siteConfig.corporate.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                {siteConfig.corporate.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {siteConfig.corporate.offerings.map((offering) => (
                <div key={offering} className="flex items-start gap-2.5 text-xs text-[#b8ccc1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{offering}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenCorporateEnquiry}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-md flex items-center gap-2 active:scale-95"
              >
                <span>Discuss Your Event</span>
                <ArrowRight className="w-4 h-4 text-emerald-950" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="px-4 py-3 rounded-xl text-xs font-medium text-emerald-300 hover:text-white bg-white/5 border border-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
