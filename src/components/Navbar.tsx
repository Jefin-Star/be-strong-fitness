import React, { useState, useEffect } from 'react';
import { GymLogo } from './GymLogo';
import { GYM_INFO } from '../data/gymData';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSelectPlan?: (planId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Gym', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Membership Plans', href: '#membership' },
    { name: 'Registration', href: '#register' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for phone, timings, and address */}
      <div className="hidden lg:block bg-black/90 border-b border-[#d4af37]/20 text-xs py-1.5 px-6 text-neutral-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Mon–Sat: {GYM_INFO.timings.weekdays} | Sun: {GYM_INFO.timings.sunday}</span>
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Trivandrum, Kerala</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/90 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Offer: Annual Membership at ₹1,042/mo</span>
            </span>
            <a 
              href={`https://wa.me/${GYM_INFO.phoneRaw}?text=Hi%20BE%20STRONG%20FITNESS%20STUDIO,%20I%20would%20like%20to%20inquire%20about%20gym%20membership.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#d4af37] hover:text-amber-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp: {GYM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav 
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0b0c10]/95 backdrop-blur-md py-3 border-b border-[#d4af37]/25 shadow-xl shadow-black/60' 
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center group" aria-label="BE STRONG FITNESS STUDIO Home">
            <GymLogo size="md" showText={false} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-[#d4af37] transition-colors rounded-lg hover:bg-neutral-900/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${GYM_INFO.phoneRaw}?text=Hi%20BE%20STRONG%20FITNESS%20STUDIO,%20I%20want%20to%20know%20more%20about%20membership%20plans.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900/90 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all"
              id="nav-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quick WhatsApp</span>
            </a>

            <a
              href="#register"
              className="inline-flex items-center justify-center px-5 py-2 text-xs md:text-sm font-bold tracking-wide uppercase rounded-lg text-black bg-gold-gradient hover:brightness-110 transition-all gold-glow"
              id="nav-join-btn"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${GYM_INFO.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-neutral-900/80 rounded-lg border border-[#25D366]/30"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white bg-neutral-900/80 rounded-lg border border-neutral-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-[#d4af37]/20 bg-[#0b0c10]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:bg-neutral-800/80 hover:text-[#d4af37] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-gold-gradient text-black font-bold text-sm tracking-wider uppercase"
              >
                Join Now
              </a>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-neutral-700 text-sm text-neutral-300 font-medium"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {GYM_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
