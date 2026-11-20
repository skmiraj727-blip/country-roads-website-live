export type ViewportTier = 'desktop' | 'tablet' | 'mobile';

export interface Card3DGeometry {
  offset: number;
  translateX: number;
  translateZ: number;
  rotateY: number;
  scale: number;
  opacity: number;
  brightness: number;
  zIndex: number;
  isVisible: boolean;
  isActive: boolean;
}

/**
 * Wraps an arbitrary index cleanly into [0, total - 1].
 */
export function wrapIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return ((index % total) + total) % total;
}

/**
 * Returns the shortest signed circular offset between `index` and `activeIndex`
 * for a looping carousel of length `total`.
 * E.g. for total = 7, activeIndex = 0, index = 6 => -1 (adjacent left).
 */
export function getCircularOffset(index: number, activeIndex: number, total: number): number {
  if (total <= 1) return 0;
  const wrappedIndex = wrapIndex(index, total);
  const wrappedActive = wrapIndex(activeIndex, total);
  let diff = wrappedIndex - wrappedActive;

  const half = total / 2;
  if (diff > half) {
    diff -= total;
  } else if (diff < -half) {
    diff += total;
  }

  return diff;
}

/**
 * Classifies viewport width into desktop, tablet, or mobile tiers.
 */
export function getViewportTier(width: number): ViewportTier {
  if (width >= 1024) return 'desktop';
  if (width >= 640) return 'tablet';
  return 'mobile';
}

/**
 * Computes 3D perspective transforms, depth layering, opacity, and visibility
 * for each card in the Country Roads 3D Glassmorphism Carousel.
 */
export function computeCarouselCardStyle(
  offset: number,
  tier: ViewportTier,
  reducedMotion = false
): Card3DGeometry {
  const absOffset = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;
  const isActive = offset === 0;

  if (reducedMotion) {
    const stepX = tier === 'mobile' ? 280 : tier === 'tablet' ? 320 : 380;
    const isVisible = isActive || absOffset <= 1;
    return {
      offset,
      translateX: offset * stepX,
      translateZ: 0,
      rotateY: 0,
      scale: isActive ? 1 : 0.9,
      opacity: isActive ? 1 : absOffset === 1 ? 0.45 : 0,
      brightness: isActive ? 1 : 0.75,
      zIndex: isActive ? 40 : 20,
      isVisible,
      isActive,
    };
  }

  // Max cards shown on each side per responsive tier
  const maxVisibleSide = tier === 'mobile' ? 1 : 2;
  const isVisible = absOffset <= maxVisibleSide;

  if (isActive) {
    return {
      offset: 0,
      translateX: 0,
      translateZ: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      brightness: 1,
      zIndex: 40,
      isVisible: true,
      isActive: true,
    };
  }

  if (absOffset === 1) {
    const xDist = tier === 'desktop' ? 275 : tier === 'tablet' ? 205 : 155;
    const zDist = tier === 'desktop' ? -135 : tier === 'tablet' ? -115 : -95;
    const rotDeg = tier === 'desktop' ? 22 : tier === 'tablet' ? 20 : 15;
    const cardScale = tier === 'desktop' ? 0.84 : tier === 'tablet' ? 0.82 : 0.82;

    return {
      offset,
      translateX: sign * xDist,
      translateZ: zDist,
      // Left card (sign = -1) gets +rotDeg; Right card (sign = +1) gets -rotDeg
      // so inner edges tuck naturally behind the active center card.
      rotateY: -sign * rotDeg,
      scale: cardScale,
      opacity: tier === 'mobile' ? 0.72 : 0.92,
      brightness: 0.78,
      zIndex: 30,
      isVisible: true,
      isActive: false,
    };
  }

  if (absOffset === 2) {
    const xDist = tier === 'desktop' ? 475 : 350;
    const zDist = tier === 'desktop' ? -270 : -225;
    const rotDeg = tier === 'desktop' ? 32 : 28;
    const cardScale = tier === 'desktop' ? 0.70 : 0.68;

    return {
      offset,
      translateX: sign * xDist,
      translateZ: zDist,
      rotateY: -sign * rotDeg,
      scale: cardScale,
      opacity: tier === 'mobile' ? 0 : tier === 'tablet' ? 0.50 : 0.68,
      brightness: 0.58,
      zIndex: 20,
      isVisible: tier !== 'mobile',
      isActive: false,
    };
  }

  // Hidden off-stage cards (smoothly recessed)
  return {
    offset,
    translateX: sign * 520,
    translateZ: -380,
    rotateY: -sign * 36,
    scale: 0.55,
    opacity: 0,
    brightness: 0.4,
    zIndex: 10,
    isVisible: false,
    isActive: false,
  };
}
