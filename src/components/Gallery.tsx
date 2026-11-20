import React, { useState, useEffect } from 'react';
import { siteConfig, GalleryItem, CarouselShowcaseItem } from '../data/siteConfig';
import { PropertyImage } from './PropertyImage';
import { ShowcaseCarousel3D } from './ShowcaseCarousel3D';
import { Images, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Views' },
    { key: 'resort', label: 'Resort & Grounds' },
    { key: 'rooms', label: 'Rooms & Suites' },
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'dining', label: 'Dining & Pub' },
    { key: 'weddings', label: 'Weddings & Celebrations' },
    { key: 'activities', label: 'Adventure & Activities' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const lightboxList =
    selectedItem && filteredItems.some((item) => item.id === selectedItem.id)
      ? filteredItems
      : siteConfig.gallery;

  const handleExpandCarouselItem = (carItem: CarouselShowcaseItem) => {
    const matched = siteConfig.gallery.find((g) => g.imageKey === carItem.imageKey);
    if (matched) {
      setSelectedItem(matched);
      return;
    }
    setSelectedItem({
      id: carItem.id,
      title: carItem.title,
      category: 'resort',
      categoryLabel: carItem.categoryLabel,
      caption: carItem.description,
      imageKey: carItem.imageKey,
      photoUrl: carItem.photoUrl,
    });
  };

  const handleExploreSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox keyboard controls
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, lightboxList]);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = lightboxList.findIndex((item) => item.id === selectedItem.id);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const prevIndex = (safeIndex - 1 + lightboxList.length) % lightboxList.length;
    setSelectedItem(lightboxList[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = lightboxList.findIndex((item) => item.id === selectedItem.id);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (safeIndex + 1) % lightboxList.length;
    setSelectedItem(lightboxList[nextIndex]);
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-3">
              <Images className="w-3.5 h-3.5 text-emerald-400" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              Property Gallery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#9eb6a9]">
              Explore the 55-acre estate, Club suites, swimming pool, Five Spices dining, and wedding lawns in interactive 3D perspective.
            </p>
          </div>

          <div className="text-xs text-[#8fa79b] tabular-nums">
            Showing {filteredItems.length} curated property scenes
          </div>
        </div>

        {/* Interactive 3D Glassmorphism Carousel Showcase */}
        <div className="mb-16">
          <ShowcaseCarousel3D
            items={siteConfig.carouselShowcase}
            onExpandItem={handleExpandCarouselItem}
            onExploreSection={handleExploreSection}
          />
        </div>

        {/* Curated Archive Divider */}
        <div className="pt-10 border-t border-white/[0.08] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-cinzel text-lg sm:text-xl font-semibold text-white tracking-wide">
            Complete Property Archive
          </h3>
          <span className="text-xs text-[#8fa79b]">
            Filter by resort zone or click any card to inspect full resolution
          </span>
        </div>

        {/* Filter Tabs (Interactive filter buttons complying with frontend-design §1.A) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/50 shadow-sm'
                    : 'text-[#9eb6a9] hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden luxury-glass-subtle border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
            >
              <PropertyImage
                imageKey={item.imageKey}
                alt={item.title}
                aspectRatio="4/3"
                className="w-full"
              />

              {/* Overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 bg-[#0a1410]/90 border-t border-white/5">
                <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono mb-1">
                  <span>{item.categoryLabel}</span>
                  <span className="text-white/40">Inspect</span>
                </div>
                <h4 className="font-cinzel text-sm font-semibold text-white group-hover:text-emerald-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#8fa79b] line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-4xl w-full luxury-glass rounded-2xl overflow-hidden border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <PropertyImage
              imageKey={selectedItem.imageKey}
              src={selectedItem.photoUrl}
              alt={selectedItem.title}
              aspectRatio="16/9"
              className="w-full"
            />
            <div className="p-6 bg-[#070c0a]">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                <span>{selectedItem.categoryLabel}</span>
                <span className="text-white/60">Country Roads Visual Archives</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9eb6a9] mt-2">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
