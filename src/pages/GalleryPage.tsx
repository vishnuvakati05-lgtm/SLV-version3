import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay } from 'react-icons/fa';

// Dynamically import all images and videos from src/assets
const imageAssets = import.meta.glob('../assets/gallery/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const videoAssets = import.meta.glob('../assets/videos/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const getImageUrl = (filename: string) => {
  if (filename.startsWith('/products/')) return filename;
  const key = Object.keys(imageAssets).find(k => k.endsWith(`/${filename}`));
  return key ? imageAssets[key] : '';
};

const getVideoUrl = (filename: string) => {
  const key = Object.keys(videoAssets).find(k => k.endsWith(`/${filename}`));
  return key ? videoAssets[key] : '';
};

// The provided gallery data
const galleryData = {
  "title": "Seafood Export Gallery",
  "subtitle": "Products • Processing • Packing • Certifications • Videos",
  "categories": ["All", "Products", "Processing", "Videos"],
  "images": [
    { "file": "Seer Fish.jpg", "caption": "Seer Fish", "category": "Products" },
    { "file": "Black Tiger.jpg", "caption": "Black Tiger Prawns", "category": "Products" },
    { "file": "Tiger Jumbo.jpg", "caption": "Tiger Jumbo Prawns", "category": "Products" },
    { "file": "Tiger Slab.jpg", "caption": "Tiger Slab Prawns", "category": "Products" },
    { "file": "Glazed prawns.jpg", "caption": "Glazed Prawns", "category": "Products" },
    { "file": "Coocked Jumbo.jpg", "caption": "Cooked Jumbo Prawns", "category": "Products" },
    { "file": "Prawn Nuggets.jpg", "caption": "Prawn Nuggets", "category": "Products" },
    { "file": "Packing.jpg", "caption": "Export Packing", "category": "Processing" },
    { "file": "SLV-stock packing.jpg", "caption": "Stock Packing", "category": "Processing" },
    { "file": "Stock 1.jpg", "caption": "Stock Preparation", "category": "Processing" },
    { "file": "Stock-Loading.jpg", "caption": "Loading & Dispatch", "category": "Processing" },
    { "file": "004.jpg", "caption": "Graded Prawns", "category": "Processing" },
    { "file": "005.jpg", "caption": "Graded Prawns", "category": "Processing" },
    { "file": "006.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "007.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "008.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "009.jpg", "caption": "Graded Prawns", "category": "Processing" },
    { "file": "012.jpg", "caption": "Graded Prawns", "category": "Processing" },
    { "file": "013.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "014.jpg", "caption": "Graded Prawns", "category": "Processing" },
    { "file": "015.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "016.jpg", "caption": "Graded Prawns", "category": "Products" },
    { "file": "019.jpg", "caption": "Crispy Prawns", "category": "Processing" },
    { "file": "021.jpg", "caption": "Breaded Prawns", "category": "Products" },
    { "file": "022.jpg", "caption": "Prawn Rolls", "category": "Products" },
    { "file": "/products/Meat Balls.jpg", "caption": "Meat Balls", "category": "Products" },
    { "file": "/products/Prawn Rolls.jpg", "caption": "Prawn Rolls", "category": "Products" },
    { "file": "/products/Samosa meat.jpg", "caption": "Samosa Meat", "category": "Products" },
    { "file": "/products/img-29 (1).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (2).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (3).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (4).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (5).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (6).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (7).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (8).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (9).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (10).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (11).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (12).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (13).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (14).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (15).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (16).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (17).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (18).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (19).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (20).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (21).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (22).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (23).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (24).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (25).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (26).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (27).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (28).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (29).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (30).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (31).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (32).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (33).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (34).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (35).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (36).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (37).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (38).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (39).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (40).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (41).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (42).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (43).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (44).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (45).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (46).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (47).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (48).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (49).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (50).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (51).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (52).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (53).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (54).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (55).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (56).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (57).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (58).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (59).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (60).jpg", "caption": "Premium Product", "category": "Products" },
    { "file": "/products/img-29 (61).jpg", "caption": "Premium Product", "category": "Products" }
  ],
  "videos": [
    { "file": "packing.mp4", "caption": "Packing Process", "category": "Videos" },
    { "file": "WhatsApp Image 2026-01-08 at 1.37.32 PM (1).mp4", "caption": "Processing Video 1", "category": "Videos" },
    { "file": "WhatsApp Image 2026-01-08 at 1.37.32 PM (2).mp4", "caption": "Processing Video 2", "category": "Videos" },
    { "file": "WhatsApp Image 2026-01-08 at 1.37.32 PM (3).mp4", "caption": "Processing Video 3", "category": "Videos" },
    { "file": "WhatsApp Image 2026-01-08 at 1.37.32 PM (4).mp4", "caption": "Processing Video 4", "category": "Videos" },
    { "file": "WhatsApp Image 2026-01-08 at 1.37.32 PM (6).mp4", "caption": "Processing Video 5", "category": "Videos" }
  ]
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Force repaint on mount to fix white screen issue in webviews
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Modal State
  const [modalData, setModalData] = useState<{ type: 'image' | 'video', src: string, caption: string } | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      const allImages = galleryData.images.map(img => ({ ...img, type: 'image' }));
      const allVideos = galleryData.videos.map(vid => ({ ...vid, type: 'video' }));

      const mixed = [];
      let imgIdx = 0;
      let vidIdx = 0;
      while (imgIdx < allImages.length || vidIdx < allVideos.length) {
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (imgIdx < allImages.length) mixed.push(allImages[imgIdx++]);
        if (vidIdx < allVideos.length) mixed.push(allVideos[vidIdx++]);
      }
      return mixed;
    } else if (activeFilter === 'Videos') {
      return galleryData.videos.map(vid => ({ ...vid, type: 'video' }));
    } else {
      return galleryData.images
        .filter(img => img.category === activeFilter)
        .map(img => ({ ...img, type: 'image' }));
    }
  }, [activeFilter]);

  const openModal = (type: 'image' | 'video', file: string, caption: string) => {
    const src = type === 'image' ? getImageUrl(file) : getVideoUrl(file);
    setModalData({ type, src, caption });
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#023047] min-h-screen pb-20">
      <Helmet>
        <title>Gallery | SLV Marine Exports – Products, Processing &amp; Facilities</title>
        <meta name="description" content="SLV Marine Exports gallery – frozen fish, prawn processing, export packing, cold storage, infrastructure and processing facility videos." />
      </Helmet>

      {/* Header section similar to user's HTML */}
      <section className="bg-[#023047] pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-16 text-center text-white relative border-b-4 border-[#00B4D8]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#023047]/80" />
        <div className="relative z-10 px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0077B6]/40 text-[#48CAE4] text-xs font-bold tracking-widest mb-4">GALLERY</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{galleryData.title}</h1>
          <p className="text-[#48CAE4] font-medium tracking-wide max-w-2xl mx-auto">{galleryData.subtitle}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${activeFilter === cat
                ? 'bg-[#0077B6] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 dark:bg-[#061420] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.file + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-[#061420] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,119,182,0.12)] transition-shadow cursor-pointer border border-slate-100 dark:border-white/5 flex flex-col group"
                onClick={() => openModal(item.type as 'image' | 'video', item.file, item.caption)}
              >
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                  {item.type === 'image' ? (
                    <img
                      src={getImageUrl(item.file)}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full relative group">
                      <video
                        src={getVideoUrl(item.file) + "#t=0.1"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        preload="metadata"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaPlay className="text-[#0077B6] ml-1 text-xl" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                        VIDEO
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <p className="text-[0.95rem] font-bold text-slate-800 dark:text-slate-100">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No items found for this category.
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center pb-8 border-t border-slate-200 dark:border-white/10 pt-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-6">Interested in our products or services?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-[#0077B6] hover:bg-[#023047] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_8px_20px_rgba(0,119,182,0.25)] hover:-translate-y-1">
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#023047]/95 backdrop-blur-md p-4 md:p-10"
            onClick={closeModal}
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
              onClick={closeModal}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center bg-black/20 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black/40">
                {modalData.type === 'image' ? (
                  <img
                    src={modalData.src}
                    alt={modalData.caption}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                ) : (
                  <video
                    src={modalData.src}
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    className="max-w-full max-h-[85vh] w-full bg-black"
                  />
                )}
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center pointer-events-none">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{modalData.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
