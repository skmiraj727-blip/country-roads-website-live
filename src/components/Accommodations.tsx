import React from 'react';
import { siteConfig, RoomItem } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { Check, ArrowUpRight, BedDouble, Wifi, Coffee, Tv, ShieldCheck, Sparkles } from 'lucide-react';

interface AccommodationsProps {
  onSelectRoomForStay: (room: RoomItem) => void;
  onOpenAuditModal: () => void;
}

export const Accommodations: React.FC<AccommodationsProps> = ({
  onSelectRoomForStay,
  onOpenAuditModal,
}) => {
  return (
    <section id="stays" className="relative py-24 bg-[#070c0a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Exact Official Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3">
              <BedDouble className="w-3.5 h-3.5 text-emerald-400" />
              <span>Luxury Countryside Lodging</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              OUR RESORT SUITE VIEWS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9eb6a9] leading-relaxed">
              {siteConfig.suiteNote}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-xs text-[#a8c2b5] font-medium font-mono">
              21 Rooms & Suites · 55 Acres Estate
            </span>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-300/90 bg-emerald-950/40 px-3.5 py-1.5 rounded-lg border border-emerald-800/40">
              <Wifi className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Room + Breakfast + Free WiFi Included</span>
            </div>
          </div>
        </div>

        {/* 3 Room Categories Grid (Deluxe Lawn, Deluxe Pool, Suite Rooms) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.accommodations.map((room) => (
            <div
              key={room.id}
              className="luxury-glass-subtle rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col group"
            >
              {/* Room Image with Official Photo */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={room.photoUrl}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-emerald-300 border border-white/10">
                    {room.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 block uppercase tracking-wider">
                      {room.inclusions}
                    </span>
                    <span className="font-cinzel text-xl font-bold tracking-wide">
                      ₹{room.price}{' '}
                      <span className="text-xs font-normal text-white/70">{room.priceSuffix}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-emerald-400/90 font-medium mt-1">
                    {room.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities / Features List from Official Site */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-2">
                      In-Room Amenities:
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-[#b8ccc1]">
                      {room.features.slice(0, 6).map((feature) => (
                        <span key={feature} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-[#8fa79b] block">Capacity</span>
                    <span className="text-xs font-semibold text-white font-mono">
                      {room.capacity}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRoomForStay(room)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#06120c] bg-white hover:bg-emerald-100 transition-all duration-200 shadow-md flex items-center gap-2 active:scale-95 group/btn"
                  >
                    <span>Reserve Room</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official "GET YOUR ROOM" Callout Banner from Screenshot */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl luxury-glass border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{siteConfig.getYourRoomCallout.heading}</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                An Epitome of Luxurious Refuge Near Kolkata
              </h3>
              <p className="text-xs sm:text-sm text-[#b8ccc1] leading-relaxed">
                {siteConfig.getYourRoomCallout.lead}
              </p>
              <p className="text-xs sm:text-sm text-[#8fa79b] leading-relaxed">
                {siteConfig.getYourRoomCallout.highlights}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <button
                type="button"
                onClick={() => onSelectRoomForStay(siteConfig.accommodations[0])}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book Your Room Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-medium text-emerald-300 hover:text-white bg-white/5 border border-white/10 transition-colors flex items-center justify-center gap-2 font-mono"
              >
                <span>Front Desk: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
