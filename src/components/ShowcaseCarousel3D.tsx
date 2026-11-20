import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CarouselShowcaseItem } from '../data/siteConfig';
import {
  wrapIndex,
  getCircularOffset,
  getViewportTier,
  computeCarouselCardStyle,
  ViewportTier,
} from '../utils/carousel3d';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  ArrowUpRight,
  Compass,
} from 'lucide-react';

interface ShowcaseCarousel3DProps {
  items: CarouselShowcaseItem[];
  onExpandItem: (item: CarouselShowcaseItem) => void;
  onExploreSection: (sectionId: string) => void;
}

export const ShowcaseCarousel3D: React.FC<ShowcaseCarousel3DProps> = ({
  items,
  onExpandItem,
  onExploreSection,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportTier, setViewportTier] = useState<ViewportTier>('desktop');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef<number>(0);
  const didDrag = useRef<boolean>(false);
  const lastDragAt = useRef<number>(0);

  const total = items.length;
  const activeItem = items[wrapIndex(activeIndex, total)];

  // Track responsive viewport tier & prefers-reduced-motion
  useEffect(() => {
    const updateTier = () => {
      setViewportTier(getViewportTier(window.innerWidth));
    };
    updateTier();
    window.addEventListener('resize', updateTier, { passive: true });

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateTier);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev + 1, total));
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev - 1, total));
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(wrapIndex(index, total));
    },
    [total]
  );

  // Keyboard arrow navigation when focused inside carousel region
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  };

  // Pointer drag / Touch swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Allow interactive buttons inside cards to receive normal pointer events unless user actually drags
    if ((e.target as HTMLElement).closest('[data-carousel-control="true"]')) return;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    didDrag.current = false;
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragDeltaX.current = delta;
    if (Math.abs(delta) > 8) {
      didDrag.current = true;
    }
  };

  const handlePointerEnd = () => {
    if (dragStartX.current === null) return;
    const threshold = 45;
    if (didDrag.current) {
      lastDragAt.current = Date.now();
    }
    if (dragDeltaX.current <= -threshold) {
      goNext();
    } else if (dragDeltaX.current >= threshold) {
      goPrev();
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
    didDrag.current = false;
    setIsDragging(false);
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      className="relative w-full py-6 sm:py-10 select-none overflow-x-clip focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 rounded-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Country Roads 3D Showcase Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-testid="showcase-carousel-3d"
      data-active-index={activeIndex}
    >
      {/* Subtle Ambient Atmospheric Glow matched to active slide */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <div
          className="absolute inset-x-10 top-6 bottom-12 rounded-full opacity-25 blur-[100px] transition-all duration-700"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(52, 211, 153, 0.28), rgba(214, 183, 118, 0.14) 45%, transparent 75%)',
          }}
        />
      </div>

      {/* 3D Perspective Stage (Cards as direct children so perspective + zIndex hit-testing remain deterministic) */}
      <div
        className={`relative mx-auto flex items-center justify-center h-[430px] sm:h-[465px] lg:h-[520px] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          perspective: '1400px',
          touchAction: 'pan-y',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
      >
        {items.map((item, idx) => {
          const offset = getCircularOffset(idx, activeIndex, total);
          const geo = computeCarouselCardStyle(offset, viewportTier, reducedMotion);
          const isFailed = Boolean(failedImages[item.id]);

          const cardTransform = `translate3d(${geo.translateX}px, 0px, ${geo.translateZ}px) rotateY(${geo.rotateY}deg) scale(${geo.scale})`;

          return (
            <div
              key={item.id}
              aria-hidden={!geo.isVisible}
              data-carousel-card-index={idx}
              data-carousel-offset={offset}
              className={`absolute w-[280px] h-[395px] sm:w-[325px] sm:h-[435px] lg:w-[375px] lg:h-[490px] rounded-[26px] overflow-hidden will-change-transform ${
                geo.isActive
                  ? 'shadow-[0_32px_70px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.28),0_0_40px_-10px_rgba(110,231,183,0.22)]'
                  : 'shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.16)]'
              }`}
              style={{
                transform: cardTransform,
                zIndex: geo.zIndex,
                opacity: geo.opacity,
                filter: `brightness(${geo.brightness})`,
                pointerEvents: geo.isVisible ? 'auto' : 'none',
                transition: reducedMotion
                  ? 'opacity 200ms ease'
                  : 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 480ms ease, filter 480ms ease, box-shadow 480ms ease',
              }}
            >
              {/* Dark Glass Base + Subtle Inner Specular Edge */}
              <div className="relative w-full h-full bg-[#09140f]/90 backdrop-blur-xl flex flex-col justify-end group">
                {/* Photograph Layer */}
                <div className="absolute inset-0 overflow-hidden">
                  {!isFailed ? (
                    <img
                      src={item.photoUrl}
                      alt={`${item.title} — ${item.categoryLabel}`}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onError={() => handleImageError(item.id)}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        geo.isActive ? 'group-hover:scale-105' : ''
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0d2218] via-[#133224] to-[#07110c] flex items-center justify-center">
                      <Compass className="w-12 h-12 text-emerald-400/40" />
                    </div>
                  )}

                  {/* Scrim weighted toward bottom 36% so upper ~64% showcases the scene cleanly */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      geo.isActive
                        ? 'bg-gradient-to-t from-[#060d0a] via-[#060d0a]/35 via-38% to-transparent'
                        : 'bg-gradient-to-t from-[#050b08]/90 via-[#050b08]/30 via-35% to-transparent'
                    }`}
                  />
                </div>

                {/* Subtle Luminous Glass Inner Rim */}
                <div
                  className={`absolute inset-0 rounded-[26px] pointer-events-none border transition-colors duration-500 ${
                    geo.isActive
                      ? 'border-white/25'
                      : 'border-white/15 hover:border-white/30'
                  }`}
                />

                {/* Top Action Bar (Visible on Active Center Card matching Reference) */}
                {geo.isActive && (
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-100 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                      {item.categoryLabel}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        data-carousel-control="true"
                        onClick={(e) => {
                          e.stopPropagation();
                          onExpandItem(item);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 transition-all shadow-lg active:scale-95"
                        aria-label={`Expand ${item.title} photograph`}
                      >
                        <Maximize2 className="w-3 h-3 text-emerald-300" />
                        <span>Expand</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Compact Bottom Frosted Glass Typography Overlay (~35% height) */}
                <div
                  className={`relative z-10 transition-all duration-500 ${
                    geo.isActive
                      ? 'px-4 pt-3.5 pb-4 sm:px-5 sm:pt-4 sm:pb-4 backdrop-blur-[8px] bg-[#06100b]/75 border-t border-white/10'
                      : 'px-4 pt-6 pb-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent'
                  }`}
                >
                  {/* Title + Index Counter */}
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className={`font-cinzel font-bold text-white tracking-wide transition-all ${
                        geo.isActive
                          ? 'text-lg sm:text-[21px] leading-snug'
                          : 'text-sm sm:text-base text-white/95 line-clamp-1'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {geo.isActive && (
                      <span className="text-xs font-mono tabular-nums text-white/75 shrink-0">
                        {idx + 1} / {total}
                      </span>
                    )}
                  </div>

                  {/* Side card compact subtitle */}
                  {!geo.isActive && (
                    <p className="text-[11px] text-[#9eb6a9] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Active card 2-line description & metadata + Explore action */}
                  {geo.isActive && (
                    <>
                      <p className="mt-1.5 text-xs text-[#c7d9cf] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#9eb6a9] min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{item.locationLabel}</span>
                        </div>

                        <button
                          type="button"
                          data-carousel-control="true"
                          onClick={(e) => {
                            e.stopPropagation();
                            onExploreSection(item.targetSectionId);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-[#06120c] bg-[#eef5f1] hover:bg-emerald-200 transition-colors shrink-0 active:scale-95"
                        >
                          <span>Explore</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Clickable Overlay on Flanking Cards to bring them smoothly to Center */}
                {!geo.isActive && geo.isVisible && (
                  <button
                    type="button"
                    data-carousel-control="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (Date.now() - lastDragAt.current < 180) return;
                      goTo(idx);
                    }}
                    className="absolute inset-0 z-30 w-full h-full bg-transparent hover:bg-white/[0.04] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-[26px]"
                    aria-label={`Select ${item.title} (${item.categoryLabel})`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Glassmorphism Control Dock (Reference Match) */}
      <div className="relative z-40 mt-4 flex flex-col items-center gap-4 px-4">
        <div
          className="inline-flex items-center gap-3 sm:gap-5 px-2.5 py-2 rounded-full bg-[#0b1812]/80 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.75)] max-w-full"
          aria-label="Carousel playback controls"
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white/[0.07] hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Previous resort highlight"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Active Card Mini Preview */}
          <div className="flex items-center gap-3 min-w-0 px-1">
            <img
              src={activeItem.photoUrl}
              alt={activeItem.title}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-white/25 shrink-0"
            />
            <div className="min-w-0 text-left">
              <div className="font-cinzel text-xs sm:text-sm font-bold text-white truncate max-w-[130px] sm:max-w-[200px]">
                {activeItem.title}
              </div>
              <div className="text-[11px] text-[#9eb6a9] truncate max-w-[130px] sm:max-w-[200px]">
                {activeItem.subtitle}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onExploreSection(activeItem.targetSectionId)}
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.07] hover:bg-emerald-500/25 border border-white/15 text-emerald-200 hover:text-white transition-colors shrink-0 ml-1"
              aria-label={`Jump to ${activeItem.title} section`}
              title={`Explore ${activeItem.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white/[0.07] hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Next resort highlight"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div
          className="flex items-center justify-center gap-1"
          role="tablist"
          aria-label="Carousel slide pagination"
        >
          {items.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                onClick={() => goTo(idx)}
                className="p-1.5 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent
                      ? 'w-6 bg-emerald-200 shadow-[0_0_10px_rgba(167,243,208,0.65)]'
                      : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
