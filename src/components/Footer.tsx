import React from 'react';
import { GymLogo } from './GymLogo';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-[#d4af37]/25 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <GymLogo size="lg" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-3">
              BE STRONG FITNESS STUDIO is Trivandrum's benchmark fitness space for heavy strength, personal coaching, couple workouts, and steam bath recovery.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#f5d061]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="font-semibold">Safe & Respectful Unisex Environment</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Gym
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#d4af37] transition-colors">
                  Gym Facilities
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#d4af37] transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-[#d4af37] transition-colors">
                  Join / Register
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Membership Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Popular Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-center justify-between">
                <span>1 Year Elite Pass</span>
                <span className="text-[#f5d061] font-bold">₹1,042/mo</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Couple General (Annual)</span>
                <span className="text-[#f5d061] font-bold">₹22,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>1-on-1 PT (3 Months)</span>
                <span className="text-[#f5d061] font-bold">₹16,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Student Package</span>
                <span className="text-[#f5d061] font-bold">₹1,500/mo</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Steam Bath (1-Hour)</span>
                <span className="text-[#f5d061] font-bold">₹500</span>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${GYM_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                <span>WhatsApp: {GYM_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${GYM_INFO.email}`}
                className="flex items-center gap-2.5 text-neutral-300 hover:text-[#d4af37] transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span className="truncate">{GYM_INFO.email}</span>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`https://wa.me/${GYM_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-[#25D366]/20 text-[#25D366] border border-neutral-800 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`mailto:${GYM_INFO.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-[#d4af37]/20 text-[#f5d061] border border-neutral-800 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Policies & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>© {new Date().getFullYear()} <strong className="text-neutral-300">BE STRONG FITNESS STUDIO</strong>. All rights reserved.</p>
            <p className="text-[11px] text-neutral-600 mt-1">
              Mandatory Registration: ₹750 one-time fee | Strictly No Refunds Policy
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
