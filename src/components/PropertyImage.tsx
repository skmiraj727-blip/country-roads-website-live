import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface PropertyImageProps {
  imageKey?: string;
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '21/9' | 'auto';
  priority?: boolean;
  showOverlay?: boolean;
  tag?: string;
  title?: string;
  subtitle?: string;
}

// Maps imageKey to high-resolution official Country Roads photography
const photoMap: Record<string, string> = {
  // Official Core Facilities & Rooms
  hero_resort: '/assets/official/hero_slider_1.jpg',
  hero_slider_1: '/assets/official/hero_slider_1.jpg',
  hero_slider_2: '/assets/official/hero_slider_2.jpg',
  about_building: '/assets/official/about_building.jpg',
  about_drone: '/assets/official/DJI_0050.jpg',
  club_room_lawn: '/assets/official/club_room_lawn.jpg',
  club_room_pool: '/assets/official/club_room_pool.jpg',
  suite_room: '/assets/official/suite_room.jpg',
  swimming_pool: '/assets/official/swimming_pool.jpg',
  corp_meeting: '/assets/official/corp_meeting.jpg',
  five_spices: '/assets/official/five_spices.jpg',
  pub_after_hours: '/assets/official/pub_after_hours.png',
  bluewatercafe: '/assets/official/bluewatercafe.jpg',
  fishing_cycling: '/assets/official/fishing_cycling.jpg',
  adventure_kayaking: '/assets/official/adventure_kayaking.jpg',
  wedding_bride: '/assets/official/wedding_bride.jpg',
  events_gala: '/assets/official/events_gala.jpg',
  day_outing_activities: '/assets/official/day_outing_activities.jpg',
  best_packages: '/assets/official/Best_packages_3.png',

  // Legacy mappings mapped to authentic official assets
  room_cottage: '/assets/official/club_room_lawn.jpg',
  room_deluxe: '/assets/official/club_room_pool.jpg',
  room_suite: '/assets/official/suite_room.jpg',
  room_villa: '/assets/official/Club_Building.jpg',
  exp_pool: '/assets/official/swimming_pool.jpg',
  exp_lawns: '/assets/official/hero_slider_1.jpg',
  exp_recreation: '/assets/official/fishing_cycling.jpg',
  exp_nature: '/assets/official/adventure_kayaking.jpg',
  gal_resort_main: '/assets/official/hero_slider_2.jpg',
  gal_pool_view: '/assets/official/swimming_pool.jpg',
  gal_cottage: '/assets/official/club_room_lawn.jpg',
  gal_wedding_lawn: '/assets/official/wedding_bride.jpg',
  gal_deluxe_suite: '/assets/official/suite_room.jpg',
  gal_dining_room: '/assets/official/five_spices.jpg',
  gal_evening_lights: '/assets/official/pub_after_hours.png',
  gal_nature_trail: '/assets/official/fishing_cycling.jpg',
  gal_pool_sunset: '/assets/official/bluewatercafe.jpg',
  entrance_sign: '/assets/official/country-roads-1343X6721.jpg',
  dining_table: '/assets/official/five_spices.jpg',
  dining_chandeliers: '/assets/official/pub_after_hours.png',
  wedding_candles: '/assets/official/wedding_bride.jpg',
  wedding_arch: '/assets/official/wedding_bride.jpg',
  pool_water: '/assets/official/swimming_pool.jpg',
  gardens_pathway: '/assets/official/fishing_cycling.jpg',
  gardens_gazebo: '/assets/official/about_building.jpg',
};

// Curated themes and atmospheric gradients for fallback styling
const visualThemes: Record<
  string,
  {
    title: string;
    subtitle: string;
    gradient: string;
    accentColor: string;
    type: 'pool' | 'cottage' | 'lawn' | 'wedding' | 'dining' | 'nature' | 'resort';
  }
> = {
  hero_resort: {
    title: 'Country Roads Estate & Lawns',
    subtitle: 'Raghudevpur, Howrah · West Bengal',
    gradient: 'from-[#06120c] via-[#0e2419] to-[#081710]',
    accentColor: '#38a169',
    type: 'resort',
  },
  room_cottage: {
    title: 'Country Cottages',
    subtitle: 'Private Garden Verandah Stays',
    gradient: 'from-[#0b1712] via-[#14261d] to-[#0a1510]',
    accentColor: '#d6b278',
    type: 'cottage',
  },
  room_deluxe: {
    title: 'Deluxe Rooms',
    subtitle: 'Refined Modern Comfort',
    gradient: 'from-[#08140f] via-[#11241a] to-[#091510]',
    accentColor: '#48bb78',
    type: 'cottage',
  },
  room_suite: {
    title: 'Executive Suite',
    subtitle: 'Panoramic Resort Living',
    gradient: 'from-[#0d1c14] via-[#1a3324] to-[#0b1811]',
    accentColor: '#ecc94b',
    type: 'cottage',
  },
  room_villa: {
    title: 'Family & Group Stays',
    subtitle: 'Connected Garden Villas',
    gradient: 'from-[#091610] via-[#142a1f] to-[#0a1711]',
    accentColor: '#68d391',
    type: 'cottage',
  },
  exp_pool: {
    title: 'Swimming Pool & Sun Deck',
    subtitle: 'Azure Waters Framed by Palms',
    gradient: 'from-[#06181b] via-[#0c2a2b] to-[#051416]',
    accentColor: '#38b2ac',
    type: 'pool',
  },
  exp_lawns: {
    title: 'Expansive Green Lawns',
    subtitle: 'Vast Open Nature Sanctuary',
    gradient: 'from-[#06140c] via-[#102b1b] to-[#08180f]',
    accentColor: '#48bb78',
    type: 'lawn',
  },
  exp_recreation: {
    title: 'Cycling & Jogging Trail',
    subtitle: 'Active Countryside Paths',
    gradient: 'from-[#091811] via-[#142e20] to-[#08160f]',
    accentColor: '#68d391',
    type: 'nature',
  },
  exp_nature: {
    title: 'Bird Haven & Flora',
    subtitle: 'Bengali Countryside Solitude',
    gradient: 'from-[#07150e] via-[#11281b] to-[#07140e]',
    accentColor: '#81e6d9',
    type: 'nature',
  },
  gal_resort_main: {
    title: 'Resort Architecture',
    subtitle: 'Lush Pathways & Greenery',
    gradient: 'from-[#081711] via-[#132c1e] to-[#091810]',
    accentColor: '#48bb78',
    type: 'resort',
  },
  gal_pool_view: {
    title: 'Swimming Poolside',
    subtitle: 'Deck Loungers & Open Skies',
    gradient: 'from-[#07191d] via-[#0d2a2c] to-[#061517]',
    accentColor: '#38b2ac',
    type: 'pool',
  },
  gal_cottage: {
    title: 'Cottage Verandah',
    subtitle: 'Quiet Shaded Morning Coffee',
    gradient: 'from-[#0b1712] via-[#162a1f] to-[#0a1610]',
    accentColor: '#d6b278',
    type: 'cottage',
  },
  gal_wedding_lawn: {
    title: 'Wedding Lawn Setup',
    subtitle: 'Celebration Under the Stars',
    gradient: 'from-[#141209] via-[#241e10] to-[#120f08]',
    accentColor: '#ecc94b',
    type: 'wedding',
  },
  gal_deluxe_suite: {
    title: 'Deluxe Interior',
    subtitle: 'Restful Stay Experience',
    gradient: 'from-[#0c1813] via-[#182b20] to-[#0b1611]',
    accentColor: '#68d391',
    type: 'cottage',
  },
  gal_dining_room: {
    title: 'Countryside Restaurant',
    subtitle: 'Warm Dining Atmosphere',
    gradient: 'from-[#17120a] via-[#2a1d10] to-[#140e07]',
    accentColor: '#ed8936',
    type: 'dining',
  },
  gal_evening_lights: {
    title: 'Evening Celebration Ambient',
    subtitle: 'Warm Festive Glow Across Grounds',
    gradient: 'from-[#17130b] via-[#2d2212] to-[#130f08]',
    accentColor: '#d69e2e',
    type: 'wedding',
  },
  gal_nature_trail: {
    title: 'Resort Walking Trail',
    subtitle: 'Morning Sun Through Tropical Foliage',
    gradient: 'from-[#07160f] via-[#102d1d] to-[#081810]',
    accentColor: '#48bb78',
    type: 'nature',
  },
  gal_pool_sunset: {
    title: 'Twilight Pool Reflections',
    subtitle: 'Golden Hour Serenity',
    gradient: 'from-[#111922] via-[#192b3a] to-[#0b141d]',
    accentColor: '#4fd1c5',
    type: 'pool',
  },
};

export const PropertyImage: React.FC<PropertyImageProps> = ({
  imageKey = '',
  src,
  alt,
  className = '',
  aspectRatio = '16/9',
  priority = false,
  showOverlay = true,
  tag,
  title,
  subtitle,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedSrc = src || (imageKey ? photoMap[imageKey] : undefined);
  const theme = visualThemes[imageKey] || {
    title: 'Country Roads Resort',
    subtitle: 'Raghudevpur, Howrah',
    gradient: 'from-[#07130d] via-[#102418] to-[#07130d]',
    accentColor: '#38a169',
    type: 'resort',
  };

  const displayTitle = title || theme.title;
  const displaySubtitle = subtitle || theme.subtitle;

  return (
    <div
      className={`relative overflow-hidden rounded-xl group ${className}`}
      style={aspectRatio !== 'auto' ? { aspectRatio } : undefined}
      role="img"
      aria-label={alt}
    >
      {/* Real High-Resolution Photograph Layer */}
      {resolvedSrc && !hasError ? (
        <>
          <img
            src={resolvedSrc}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Cinematic Dark Gradient Scrim for Legibility & Contrast */}
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none transition-opacity duration-300 group-hover:from-black/75" />
          )}

          {/* Fine Hairline Border */}
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-emerald-500/30 transition-colors" />

          {/* Top Tag */}
          {(tag || displaySubtitle) && showOverlay && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-medium tracking-wider uppercase bg-black/60 backdrop-blur-md text-emerald-300 border border-white/10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {tag || displaySubtitle}
              </span>
            </div>
          )}

          {/* Bottom Title Bar */}
          {showOverlay && displayTitle && (
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
              <div className="flex items-end justify-between gap-2">
                <div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide text-shadow line-clamp-1">
                    {displayTitle}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#b5cbbf] line-clamp-1 mt-0.5">
                    {alt}
                  </p>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/10 text-white/80 group-hover:text-emerald-300 group-hover:bg-white/10 transition-colors shrink-0">
                  <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Fallback Layer: Architectural Gradient Mesh & Vector Scenery */
        <div
          className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} flex flex-col justify-between p-6 transition-transform duration-700 group-hover:scale-105`}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            {theme.type === 'pool' && (
              <svg viewBox="0 0 400 250" className="w-full h-full text-teal-400/40" fill="none">
                <path d="M20 180 Q100 160 200 180 T380 180 L380 240 L20 240 Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M40 195 Q140 180 240 195 T360 195" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="320" cy="90" r="30" fill="#fbd38d" fillOpacity="0.2" />
                <path d="M320 170 Q325 120 340 90" stroke="#81e6d9" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />
              </svg>
            )}

            {theme.type === 'cottage' && (
              <svg viewBox="0 0 400 250" className="w-full h-full text-emerald-300/30" fill="none">
                <polygon points="120,130 200,80 280,130" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
                <rect x="135" y="130" width="130" height="70" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
                <rect x="155" y="145" width="30" height="35" rx="3" fill="#f6ad55" fillOpacity="0.45" />
                <rect x="215" y="145" width="30" height="35" rx="3" fill="#f6ad55" fillOpacity="0.45" />
              </svg>
            )}

            {theme.type === 'wedding' && (
              <svg viewBox="0 0 400 250" className="w-full h-full text-amber-300/35" fill="none">
                <path d="M120 180 L120 110 Q200 70 280 110 L280 180" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="200" cy="100" r="6" fill="#f6e05e" fillOpacity="0.9" />
              </svg>
            )}

            {(theme.type === 'dining' || theme.type === 'lawn' || theme.type === 'nature' || theme.type === 'resort') && (
              <svg viewBox="0 0 400 250" className="w-full h-full text-emerald-400/30" fill="none">
                <path d="M0 210 Q100 170 220 195 T400 180 L400 250 L0 250 Z" fill="currentColor" fillOpacity="0.2" />
                <circle cx="80" cy="140" r="28" fill="#276749" fillOpacity="0.4" />
              </svg>
            )}
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs tracking-wider uppercase text-emerald-200/80">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
              {displaySubtitle}
            </span>
          </div>

          <div className="relative z-10 mt-auto pt-8 pb-1">
            <h4 className="font-cinzel text-lg font-semibold text-white tracking-wide">
              {displayTitle}
            </h4>
            <p className="text-xs text-emerald-100/70 mt-0.5 line-clamp-1">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};
