import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { ExitModal } from './components/layout/ExitModal';

// Lazy loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const QualityPage = lazy(() => import('./pages/QualityPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ExportMarketsPage = lazy(() => import('./pages/ExportMarketsPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DownloadAppPage = lazy(() => import('./pages/DownloadAppPage'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-secondary/30 border-b-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  </div>
);

const NativeRouterSync: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      const listener = CapacitorApp.addListener('backButton', () => {
        if (location.pathname !== '/') {
          // If not on home page, go to home page
          navigate('/', { replace: true });
        } else {
          // If on home page, show custom exit modal
          setShowExitModal(true);
        }
      });
      return () => {
        listener.then(l => l.remove());
      };
    }
  }, [navigate, location.pathname]);

  return (
    <>
      {children}
      <ExitModal isOpen={showExitModal} onClose={() => setShowExitModal(false)} />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Suspense fallback={<LoadingFallback />}>
          <NativeRouterSync>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="gallery" element={<GalleryPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="quality" element={<QualityPage />} />
                <Route path="certifications" element={<CertificationsPage />} />
                <Route path="export-markets" element={<ExportMarketsPage />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="download-app" element={<DownloadAppPage />} />
              </Route>
            </Routes>
          </NativeRouterSync>
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
