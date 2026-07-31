import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { LoadingScreen } from './LoadingScreen';
import { MobileBottomNav } from './MobileBottomNav';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading screen for 2s on initial mount only
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger a resize event to ensure the browser repaints after the loader hides
      window.dispatchEvent(new Event('resize'));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, loading]);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: 'var(--color-bg-light)',
        color: 'var(--color-text-light)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      {/* Loading screen sits on top and fades out — page content renders beneath it */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Header is always mounted so it's ready when loading ends */}
      <Header />

      {/* Main content with per-route page transition */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingButtons />
      <ScrollToTop />
      <MobileBottomNav />
    </div>
  );
};
