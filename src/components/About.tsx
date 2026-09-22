import React from 'react';
import { Dumbbell, Users, HeartPulse, Sparkles, Flame } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1015] relative overflow-hidden border-t border-b border-neutral-800/80">
      {/* Subtle Background Elements */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About BE STRONG FITNESS STUDIO</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Empowering Your <span className="text-gold-gradient">Fitness Evolution</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            More than just iron and mirrors. We have engineered a supportive, high-energy, and luxury fitness environment designed to push your boundaries safely and consistently.
          </p>
        </div>

        {/* Content Grid: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Key Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 px-3 py-0.5 rounded bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider">
                The Be Strong Standard
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white mb-3">
                A Modern Unisex Fitness Studio Built for Real Results
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                At <strong className="text-white">BE STRONG FITNESS STUDIO</strong>, our mission is to make elite fitness, strength training, and recovery accessible to all. Whether you are lifting weights for the first time or looking to break your personal powerlifting records, our supportive culture ensures you train with pride, safety, and confidence.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                We bridge the gap between heavy athletic conditioning, specialized clinical rehabilitation (Knee rehab, Cervical Spondylitis, Back Pain, Scoliosis, PCOD/PCOS, and Post-Pregnancy care), and welcoming lifestyle fitness. Featuring modern amenities, dedicated coaching zones, specialized couple training, and an in-house therapeutic steam bath facility, we support your entire transformation cycle.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-[#d4af37]/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f5d061]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Supportive Unisex Space</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  A respectful, encouraging environment where women and men train together with total dignity and mutual motivation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-[#d4af37]/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f5d061]">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Heavy Strength Mastery</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Heavy-duty Olympic bars, power racks, calibrated plates, and precision isolation biomechanics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-[#d4af37]/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f5d061]">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Science-Backed Guidance</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Certified personal coaches who provide tailored nutritional protocols and posture corrections.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-[#d4af37]/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f5d061]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Luxury Steam Recovery</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Fast-track your recovery with private steam therapy to soothe sore joints and flush out toxins.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-black/80 group">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
                alt="Strength Training Floor at Be Strong Fitness Studio"
                className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-700/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">Be Strong Studio</p>
                    <p className="text-sm font-bold text-white">Full Access Training Ecosystem</p>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d061] text-xs font-bold">
                    Trivandrum
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
              <div>
                <p className="font-cinzel text-2xl sm:text-3xl font-black text-[#f5d061]">5:30 AM</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Early Open</p>
              </div>
              <div className="border-x border-neutral-800">
                <p className="font-cinzel text-2xl sm:text-3xl font-black text-[#f5d061]">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Unisex Safe</p>
              </div>
              <div>
                <p className="font-cinzel text-2xl sm:text-3xl font-black text-[#f5d061]">₹750</p>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Reg. Fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
