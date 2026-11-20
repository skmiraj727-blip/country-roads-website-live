import test from 'node:test';
import assert from 'node:assert/strict';
import {
  wrapIndex,
  getCircularOffset,
  getViewportTier,
  computeCarouselCardStyle,
} from './carousel3d';

test('wrapIndex loops smoothly across negative and overflow bounds', () => {
  assert.equal(wrapIndex(0, 7), 0);
  assert.equal(wrapIndex(7, 7), 0);
  assert.equal(wrapIndex(-1, 7), 6);
  assert.equal(wrapIndex(-8, 7), 6);
  assert.equal(wrapIndex(10, 7), 3);
  assert.equal(wrapIndex(0, 0), 0);
});

test('getCircularOffset computes shortest signed path for looping deck', () => {
  // Active index is 0 on a 7-card loop
  assert.equal(getCircularOffset(0, 0, 7), 0);
  assert.equal(getCircularOffset(1, 0, 7), 1);
  assert.equal(getCircularOffset(2, 0, 7), 2);
  assert.equal(getCircularOffset(6, 0, 7), -1); // adjacent left
  assert.equal(getCircularOffset(5, 0, 7), -2); // outer left

  // Active index at 6 wraps index 0 cleanly to +1 (adjacent right)
  assert.equal(getCircularOffset(0, 6, 7), 1);
  assert.equal(getCircularOffset(1, 6, 7), 2);
  assert.equal(getCircularOffset(5, 6, 7), -1);
});

test('getViewportTier classifies breakpoints accurately', () => {
  assert.equal(getViewportTier(1440), 'desktop');
  assert.equal(getViewportTier(1024), 'desktop');
  assert.equal(getViewportTier(768), 'tablet');
  assert.equal(getViewportTier(640), 'tablet');
  assert.equal(getViewportTier(390), 'mobile');
});

test('computeCarouselCardStyle gives center card peak zIndex, scale 1, and 0 rotation', () => {
  const center = computeCarouselCardStyle(0, 'desktop', false);
  assert.equal(center.isActive, true);
  assert.equal(center.scale, 1);
  assert.equal(center.rotateY, 0);
  assert.equal(center.translateX, 0);
  assert.equal(center.translateZ, 0);
  assert.equal(center.zIndex, 40);
  assert.equal(center.opacity, 1);
});

test('computeCarouselCardStyle symmetrically angles left and right flanking cards inward', () => {
  const left1 = computeCarouselCardStyle(-1, 'desktop', false);
  const right1 = computeCarouselCardStyle(1, 'desktop', false);

  assert.equal(left1.translateX, -right1.translateX);
  assert.equal(left1.translateZ, right1.translateZ);
  assert.ok(left1.translateZ < 0, 'flanking cards recede in depth');
  assert.equal(left1.rotateY, -right1.rotateY);
  assert.ok(left1.rotateY > 0, 'left card rotates +Y to tuck inner edge behind');
  assert.ok(right1.rotateY < 0, 'right card rotates -Y to tuck inner edge behind');
  assert.ok(left1.zIndex < 40, 'flanking card zIndex is behind center card');
});

test('computeCarouselCardStyle adapts card visibility for mobile and honors reducedMotion', () => {
  const mobileOuter = computeCarouselCardStyle(2, 'mobile', false);
  assert.equal(mobileOuter.isVisible, false);
  assert.equal(mobileOuter.opacity, 0);

  const reduced = computeCarouselCardStyle(-1, 'desktop', true);
  assert.equal(reduced.rotateY, 0);
  assert.equal(reduced.translateZ, 0);
});
