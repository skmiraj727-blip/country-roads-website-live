import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Navigation, Phone, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 bg-[#070c0a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Address, Directions & Contact Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Geographic Setting</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Location & Directions
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#9eb6a9] leading-relaxed">
                Tucked quietly into the peaceful Howrah countryside, Country Roads is an easy and pleasant drive from Kolkata.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl luxury-glass border border-white/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Official Property Address
                  </h4>
                  <p className="text-sm font-medium text-white/95 mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <p className="text-xs text-[#8fa79b] mt-1">
                    Landmark: Directly opposite Raghudevpur Gram Panchayat Office
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-[#a8c2b5]">Front Desk Assistance:</span>
                </div>
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="font-mono text-xs font-bold text-emerald-300 hover:text-white"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Travel Route Context */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#9eb6a9] space-y-2">
              <p className="font-semibold text-white/90">Driving Directions from Kolkata:</p>
              <p className="leading-relaxed">
                Cross Vidyasagar Setu (2nd Hooghly Bridge) toward Kona Expressway. Proceed along the Domjur–Bauria Road route toward Raghudevpur.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#06120c] bg-emerald-300 hover:bg-emerald-200 transition-all duration-200 shadow-md flex items-center gap-2 active:scale-95"
              >
                <Navigation className="w-4 h-4 text-emerald-950" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-950" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Card */}
          <div className="lg:col-span-7">
            <div className="luxury-glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-2 relative">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden bg-[#0c1813]">
                {/* Embedded Map iframe */}
                <iframe
                  title="Country Roads Resort Location Map"
                  src="https://maps.google.com/maps?q=Country+Roads+Resort+Raghudevpur+Howrah&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-125 brightness-90 grayscale-[20%]"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl luxury-glass border border-white/15 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-white font-cinzel">Country Roads</span>
                  </div>
                  <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-2">
                    Raghudevpur, Howrah · West Bengal 711322
                  </p>
                </div>

                {/* Bottom link bar */}
                <div className="absolute bottom-3 right-3">
                  <a
                    href={siteConfig.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-medium border border-white/20 backdrop-blur-md transition-colors"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
