"use client";

import { useCallback, useEffect, useRef } from "react";

const SWIPE_THRESHOLD = 40;
const WHEEL_THRESHOLD = 50;
const WHEEL_COOLDOWN_MS = 450;
const WHEEL_IDLE_RESET_MS = 200;

/**
 * Horizontal swipe navigation for carousels: touch swipes plus Mac/trackpad
 * two-finger horizontal scroll. The wheel listener is attached natively
 * (non-passive) because React's synthetic onWheel is passive by default and
 * can't preventDefault — which is needed here so Safari/Chrome don't treat
 * the gesture as a back/forward navigation swipe.
 */
export function useSwipeNav<T extends HTMLElement = HTMLDivElement>(
  onNext: () => void,
  onPrev: () => void
) {
  const ref = useRef<T | null>(null);
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) onNext();
        else onPrev();
      }
    },
    [onNext, onPrev]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let locked = false;
    let accum = 0;
    let idleTimer: number | null = null;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();

      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        accum = 0;
      }, WHEEL_IDLE_RESET_MS);

      if (locked) return;
      accum += e.deltaX;

      if (Math.abs(accum) > WHEEL_THRESHOLD) {
        if (accum > 0) onNext();
        else onPrev();
        accum = 0;
        locked = true;
        window.setTimeout(() => {
          locked = false;
        }, WHEEL_COOLDOWN_MS);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (idleTimer) window.clearTimeout(idleTimer);
    };
  }, [onNext, onPrev]);

  return { ref, onTouchStart, onTouchEnd };
}
