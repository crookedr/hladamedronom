"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookMessenger } from "react-icons/fa";

export default function MessengerButton() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 z-[9000] flex items-center gap-3"
        >
          <motion.a
            href="https://m.me/241050072430904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kontaktujte nás cez Messenger"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl bg-[#0b0d10] border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
          >
            <FaFacebookMessenger size={24} />
            <span className="absolute inset-0 rounded-full animate-ping border border-emerald-500 opacity-20" style={{ animationDuration: "2.5s" }} />
          </motion.a>

          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="bg-[#0b0d10] border border-white/15 text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap pointer-events-none"
              >
                Napíšte nám na Messenger
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
