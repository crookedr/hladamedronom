"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(m.matches);
    update();
    m.addEventListener?.("change", update);
    return () => m.removeEventListener?.("change", update);
  }, []);

  const order = ["/", "/nas-tim"];
  const prev = prevPathRef.current;
  const curr = pathname;
  const prevIndex = prev ? order.indexOf(prev) : 0;
  const currIndex = order.indexOf(curr);
  const dir = Math.sign(currIndex - prevIndex) || 1;

  useEffect(() => {
    prevPathRef.current = pathname;
  }, [pathname]);

  const DURATION = 0.22;
  const DIST = 8 * dir;

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, x: DIST };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 };
  const exit = reduceMotion ? { opacity: 0 } : { opacity: 0, x: -DIST };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="transform-gpu will-change-transform will-change-opacity"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: DURATION, ease: [0.2, 0.0, 0.0, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
