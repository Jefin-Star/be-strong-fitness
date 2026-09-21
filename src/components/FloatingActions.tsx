import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-3 rounded-full bg-neutral-900/90 text-[#d4af37] border border-[#d4af37]/30 hover:bg-neutral-800 shadow-xl transition-all transform hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${GYM_INFO.phoneRaw}?text=Hi%20BE%20STRONG%20FITNESS%20STUDIO,%20I%20would%20like%20to%20know%20more%20about%20membership%20plans%20and%20joining.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all transform hover:scale-105"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold text-xs tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
