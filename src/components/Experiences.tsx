import React, { useState } from 'react';
import { siteConfig, FacilityItem } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { Sparkles, ArrowRight, Check, Compass, Waves, Briefcase, Utensils, Wine, Coffee, Fish, Target } from 'lucide-react';

interface ExperiencesProps {
  onOpenStayModal: () => void;
}

const facilityIcons: Record<string, React.ReactNode> = {
  'fac-swimming-pool': <Waves className="w-4 h-4 text-cyan-400" />,
  'fac-corporate-meeting': <Briefcase className="w-4 h-4 text-emerald-400" />,
  'fac-five-spices': <Utensils className="w-4 h-4 text-amber-400" />,
  'fac-after-hours-pub': <Wine className="w-4 h-4 text-purple-400" />,
  'fac-blue-water-cafe': <Coffee className="w-4 h-4 text-teal-400" />,
  'fac-fishing-cycling': <Fish className="w-4 h-4 text-emerald-300" />,
  'fac-adventure': <Target className="w-4 h-4 text-orange-400" />,
};

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenStayModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const facilities = siteConfig.facilities;

  const filteredFacilities = activeCategory === 'all'
    ? facilities
    : facilities.filter((f) => {
        if (activeCategory === 'recreation') return f.id.includes('swimming') || f.id.includes('fishing') || f.id.includes('adventure');
        if (activeCategory === 'dining') return f.id.includes('five-spices') || f.id.includes('pub') || f.id.includes('cafe');
        if (activeCategory === 'corporate') return f.id.includes('corporate');
        return true;
      });

  return (
    <section id="experiences" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-teal-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Resort Amenities</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              OUR RESORT FACILITIES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9eb6a9] leading-relaxed">
              Equipped with modern recreation, European-inspired corporate conference venues, diverse multi-cuisine dining, poolside cafes, and active countryside adventures across 55 acres.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-[#9eb6a9] hover:text-white'
              }`}
            >
              All Facilities (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('recreation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'recreation'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-[#9eb6a9] hover:text-white'
              }`}
            >
              Pool & Adventure
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('dining')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'dining'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-[#9eb6a9] hover:text-white'
              }`}
            >
              Dining & Pub
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('corporate')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'corporate'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-[#9eb6a9] hover:text-white'
              }`}
            >
              Corporate
            </button>
          </div>
        </div>

        {/* 7 Official Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="luxury-glass-subtle rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Visual Card Frame */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <PropertyImage
                  imageKey={fac.imageKey}
                  alt={fac.title}
                  aspectRatio="auto"
                  className="w-full h-full object-cover"
                />
                
                {/* Number Badge & Icon */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-mono font-bold text-emerald-400 border border-white/15 shadow">
                    /{fac.index}
                  </div>
                  <div className="p-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white">
                    {facilityIcons[fac.id] || <Compass className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    {fac.highlightWord}
                  </span>
                </div>
              </div>

              {/* Content Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-emerald-200 transition-colors line-clamp-1">
                    {fac.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-emerald-400/90 font-medium mt-1">
                    {fac.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed line-clamp-3">
                    {fac.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                  {fac.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#b8ccc1]">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leisure & Day Outing Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl luxury-glass border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
              Day Visits & Overnight Retreats
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Experience the Best Weekend Getaway Near Kolkata
            </h3>
            <p className="text-xs sm:text-sm text-[#9eb6a9] mt-2 leading-relaxed">
              Whether you are planning a relaxing family Sunday by the pool, a high-spirited adventure outing with archery and rope course, or an executive corporate seminar, Country Roads has every facility prepared.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <button
              type="button"
              onClick={onOpenStayModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Book Your Visit</span>
              <ArrowRight className="w-4 h-4 text-emerald-950" />
            </button>

            <a
              href="#packages"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-medium text-white hover:text-emerald-300 bg-white/5 border border-white/10 transition-colors text-center"
            >
              View Packages & Tariffs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
