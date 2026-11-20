import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { Utensils, Wine, Coffee, Sparkles, Phone, Check, Clock, ChevronRight } from 'lucide-react';

interface DiningProps {
  onOpenDiningEnquiry: () => void;
}

export const Dining: React.FC<DiningProps> = ({ onOpenDiningEnquiry }) => {
  const { dining, contact } = siteConfig;
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);

  const activeVenue = dining.venues[activeVenueIndex];

  return (
    <section id="dining" className="relative py-24 bg-[#070c0a] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-amber-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Gastronomy & Refreshments</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            {dining.title}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-wider text-amber-300/90 font-medium">
            {dining.subtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#9eb6a9] leading-relaxed">
            {dining.description}
          </p>
        </div>

        {/* 3 Venue Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {dining.venues.map((venue, idx) => (
            <button
              key={venue.name}
              type="button"
              onClick={() => setActiveVenueIndex(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeVenueIndex === idx
                  ? 'bg-amber-950/40 border-amber-500/60 shadow-xl'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  Venue 0{idx + 1}
                </span>
                {idx === 0 && <Utensils className="w-4 h-4 text-amber-400" />}
                {idx === 1 && <Wine className="w-4 h-4 text-purple-400" />}
                {idx === 2 && <Coffee className="w-4 h-4 text-teal-400" />}
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mt-2">
                {venue.name}
              </h3>
              <p className="text-xs text-[#9eb6a9] mt-1 line-clamp-1">
                {venue.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* Active Venue Hero Showcase */}
        <div className="luxury-glass rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group">
                <PropertyImage
                  imageKey={activeVenue.imageKey}
                  alt={activeVenue.name}
                  aspectRatio="auto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/15">
                    {activeVenue.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  Featured Experience
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  {activeVenue.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                  {activeVenue.description}
                </p>
              </div>

              {/* Cuisine Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/80 mb-2.5">
                  Culinary Highlights:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeVenue.cuisines.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg text-xs bg-black/50 border border-amber-500/30 text-amber-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service timing */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200/90 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{dining.note}</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenDiningEnquiry}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-amber-300 hover:bg-amber-200 transition-all duration-200 shadow-md flex items-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-950" />
                  <span>Reserve Table or Feast</span>
                </button>

                <a
                  href={`tel:${contact.phoneClean}`}
                  className="px-4 py-3 rounded-xl text-xs font-medium text-emerald-300 hover:text-white bg-white/5 border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Gastronomy Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dining.features.map((feat, i) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl luxury-glass-subtle border border-white/10 hover:border-amber-400/40 transition-colors"
            >
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                0{i + 1}
              </span>
              <h3 className="font-cinzel text-base font-bold text-white mt-2">
                {feat.title}
              </h3>
              <p className="text-xs text-[#9eb6a9] mt-2 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
