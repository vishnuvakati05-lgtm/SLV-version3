import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          // On mobile: left side, above bottom nav. Desktop: right side, low
          className="fixed left-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:bottom-8 md:left-auto md:right-[5.5rem] z-[70] w-11 h-11 bg-[#00B4D8] hover:bg-[#006b58] text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,140,114,0.4)] transition-colors"
          aria-label="Scroll to top"
        >
          <FiChevronUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
