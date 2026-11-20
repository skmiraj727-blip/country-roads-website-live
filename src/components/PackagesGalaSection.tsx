import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Check, ArrowRight, Tag, ShieldCheck, Heart, Sun, Music } from 'lucide-react';

interface PackagesGalaSectionProps {
  onOpenStayModal: () => void;
  onOpenEventEnquiry: () => void;
}

export const PackagesGalaSection: React.FC<PackagesGalaSectionProps> = ({
  onOpenStayModal,
  onOpenEventEnquiry,
}) => {
  const { packages, galaTime } = siteConfig;

  return (
    <section id="packages" className="relative py-24 bg-[#070c0a] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Part: Exclusive Packages */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Tag className="w-3.5 h-3.5" />
              <span>Official Value Tariffs</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              EXCLUSIVE PACKAGES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9eb6a9]">
              Enjoy an unparalleled holiday experience at very reasonable prices. Includes comfortable accommodation, delicious food, swimming pool, cycling, and adventure sports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="luxury-glass rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col group shadow-2xl relative"
              >
                {/* Official Image Header */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40">
                  <img
                    src={pkg.photoUrl}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c0a] via-black/30 to-black/20" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-emerald-600 text-white shadow-lg border border-emerald-400/40">
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono block">Package Tariff</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-cinzel font-bold text-white">₹{pkg.price}</span>
                        <span className="text-xs text-[#b8ccc1]">{pkg.priceNote}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Official</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                        Package Inclusions:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.inclusions.map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5 text-xs text-[#c6dbd0]">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onOpenStayModal}
                      className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-md flex items-center justify-center gap-2 active:scale-95 group-hover:bg-emerald-400"
                    >
                      <span>Enquire For This Package</span>
                      <ArrowRight className="w-4 h-4 text-[#06120c]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Part: A Gala Time at Country Roads */}
        <div className="pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebrations & Festivals</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              {galaTime.title}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-wider text-amber-300/90 font-medium">
              {galaTime.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Gala Events Card */}
            <div className="luxury-glass-subtle rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/assets/official/events_gala.jpg"
                  alt="A Gala Time at Country Roads - Festive Events & Rain Dance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1410] via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-white/10 flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5 text-amber-400" />
                    <span>Festivals & Weekend Parties</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    Holi Rain Dance, Food Festivals & DJ Nights
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                    {galaTime.eventsDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-amber-300 font-medium">Top Event Venue Near Kolkata</span>
                  <button
                    type="button"
                    onClick={onOpenEventEnquiry}
                    className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Enquire Event</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Wedding Destination Card */}
            <div className="luxury-glass-subtle rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/assets/official/wedding_bride.jpg"
                  alt="Dream Wedding Destination near Kolkata - Country Roads"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1410] via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-white/10 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>Dream Wedding Destination</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    30,000 Sq.Ft. Wedding Lawns & Idyllic Greens
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                    {galaTime.weddingDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-amber-300 font-medium">20–30 Mins From Vidyasagar Setu</span>
                  <button
                    type="button"
                    onClick={onOpenEventEnquiry}
                    className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Plan Your Wedding</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
