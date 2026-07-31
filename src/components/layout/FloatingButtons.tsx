import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaTimes, FaUserTie, FaCalculator } from 'react-icons/fa';

const contacts = [
  { name: 'V. Sampath Kumar', role: 'Managing Partner', phone: '918977770455', display: '+91 89777 70455', icon: FaUserTie },
  { name: 'Sohail', role: 'Accountant', phone: '919390197086', display: '+91 93901 97086', icon: FaCalculator },
];

export const FloatingButtons: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'call' | 'wa' | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
    
    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (menu: 'call' | 'wa') => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const getHref = (type: 'call' | 'wa', phone: string) => {
    return type === 'call' ? `tel:+${phone}` : `https://wa.me/${phone}`;
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          className="fixed z-[99] flex flex-col gap-3 sm:gap-4 right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] sm:bottom-6 sm:right-6"
        >
          {/* Popup Menu */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20, y: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 20, y: 20 }}
                transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                className="absolute bottom-full right-0 mb-4 bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden min-w-[240px]"
              >
                <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    {activeMenu === 'call' ? 'Select Contact' : 'Chat on WhatsApp'}
                  </span>
                  <button onClick={() => setActiveMenu(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                    <FaTimes />
                  </button>
                </div>
                <div className="flex flex-col">
                  {contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={getHref(activeMenu, contact.phone)}
                      target={activeMenu === 'wa' ? '_blank' : undefined}
                      rel="noreferrer"
                      onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-white/5 last:border-0 group"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${activeMenu === 'wa' ? 'bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white' : 'bg-[#0B5ED7]/10 text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white'}`}>
                        <contact.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0B5ED7] dark:group-hover:text-[#48CAE4] transition-colors">{contact.role}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{contact.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call Button */}
          <motion.button
            onClick={() => toggleMenu('call')}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#0284C7] text-white shadow-[0_8px_25px_-5px_rgba(11,94,215,0.4)] transition-all overflow-hidden"
            aria-label="Call Us"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
            <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6" />
            
            <div className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2 text-[13px] font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 hidden sm:block pointer-events-none">
              Call Us Now
              <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-900" />
            </div>
          </motion.button>

          {/* WhatsApp Button */}
          <motion.button
            onClick={() => toggleMenu('wa')}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-5px_rgba(37,211,102,0.4)] transition-all overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
            <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
            
            <div className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2 text-[13px] font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 hidden sm:block pointer-events-none">
              Chat on WhatsApp
              <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-900" />
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
