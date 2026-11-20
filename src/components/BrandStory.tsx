import React, { useState } from 'react';
import { PropertyImage } from './PropertyImage';
import { Compass, ShieldCheck, CheckCircle2, Trees, Sparkles, Navigation, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface BrandStoryProps {
  onOpenAuditModal: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'whyStay' | 'safety'>('about');

  return (
    <section id="story" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Exact Official OUR STORY */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>{siteConfig.story.title}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
            Cradled in Nature, <br />
            <span className="font-cormorant italic font-normal text-emerald-200">
              Nurtured by Tranquillity.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a8c2b5] leading-relaxed">
            {siteConfig.story.leadParagraph}
          </p>
        </div>

        {/* 2-Column Split: Asymmetric Real Photography on Left, Interactive Authentic Tabs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Resort Architecture & Aerial Drone Photos */}
          <div className="lg:col-span-6 relative pb-6 sm:pb-8 pr-0 sm:pr-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <PropertyImage
                src="/assets/official/about_building.jpg"
                alt="Country Roads colonial club house building, fountain and lawns"
                aspectRatio="16/9"
                title="Colonial Club House & Lawns"
                subtitle="55-Acre Paradise in Howrah"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-emerald-300 border border-white/10">
                  Official Property View
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Aerial Drone Photo */}
            <div className="hidden sm:block absolute -bottom-4 right-0 w-64 rounded-xl overflow-hidden shadow-2xl border border-white/15 luxury-glass group/inset transition-transform duration-300 hover:scale-[1.03]">
              <div className="h-36 relative overflow-hidden">
                <img
                  src="/assets/official/DJI_0050.jpg"
                  alt="Aerial drone overview of 55-acre Country Roads lake and resort grounds"
                  className="w-full h-full object-cover group-hover/inset:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 block tracking-wider">
                    55 Acres Estate
                  </span>
                  <span className="text-xs font-medium text-white/95">Aerial Lake & Villas Overview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content from Official Website */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Tab Headers matching Screenshot */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-[#8fa79b] hover:text-white bg-white/[0.02] border border-white/5'
                }`}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('whyStay')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'whyStay'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-[#8fa79b] hover:text-white bg-white/[0.02] border border-white/5'
                }`}
              >
                Why Stay At Our Resort
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('safety')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'safety'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-[#8fa79b] hover:text-white bg-white/[0.02] border border-white/5'
                }`}
              >
                Safety & Sanitization
              </button>
            </div>

            {/* Tab 1: About Us */}
            {activeTab === 'about' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs sm:text-sm text-[#b8ccc1] leading-relaxed">
                  {siteConfig.aboutTabs.aboutUs.lead}
                </p>

                {/* Distance Callout Box */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Travel Time & Proximity</span>
                  </div>
                  <p className="text-xs text-[#d2e2d9] leading-relaxed italic">
                    “{siteConfig.aboutTabs.aboutUs.distances}”
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                  {siteConfig.aboutTabs.aboutUs.estateDetails}
                </p>
              </div>
            )}

            {/* Tab 2: Why Stay At Our Resort */}
            {activeTab === 'whyStay' && (
              <div className="space-y-3.5 animate-fade-in">
                {siteConfig.aboutTabs.whyStay.sections.map((sec, i) => (
                  <div
                    key={sec.heading}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                      <span>0{i + 1}</span>
                      <span className="text-white/40">·</span>
                      <span className="font-cinzel text-white text-sm font-bold">{sec.heading}</span>
                    </div>
                    <p className="text-xs text-[#9eb6a9] leading-relaxed">{sec.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Safety & Sanitization */}
            {activeTab === 'safety' && (
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 animate-fade-in">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{siteConfig.aboutTabs.safety.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                  {siteConfig.aboutTabs.safety.text}
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-medium tracking-wide transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>View verified facts & official website documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
