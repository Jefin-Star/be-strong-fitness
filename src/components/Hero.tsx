import React from 'react';
import { ArrowRight, Dumbbell, Flame, Award, Users } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="BE STRONG FITNESS STUDIO Luxury Fitness Studio"
          className="w-full h-full object-cover object-center opacity-35 filter contrast-110 brightness-90 scale-105 transition-transform duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Dark & Metallic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/80 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0c10]/50 to-[#0b0c10]" />
        
        {/* Subtle Gold Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#d4af37]/40 shadow-lg shadow-black/80 mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-200">
            {GYM_INFO.brandTag}
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-xs font-medium text-neutral-300">
            Premium Unisex Fitness Studio
          </span>
        </div>

        {/* Main Gym Name Headline */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[1.08] mb-4">
          <span className="text-[#e5252a] drop-shadow-[0_2px_14px_rgba(229,37,42,0.4)]">BE STRONG</span>{' '}
          <span className="text-gold-gradient">FITNESS STUDIO</span>
        </h1>

        {/* Tagline */}
        <p className="font-outfit text-xl sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-wide max-w-3xl mb-8">
          Build Your Strength. <span className="text-[#f5d061] font-semibold">Transform Your Life.</span>
        </p>

        {/* Supporting description */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10">
          Trivandrum's premier fitness destination combining world-class heavy strength training, certified personal coaches, supportive unisex culture, and therapeutic steam bath recovery.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold tracking-wider uppercase text-black bg-gold-gradient hover:brightness-110 transition-all transform hover:-translate-y-0.5 gold-glow shadow-xl"
            id="hero-join-now-btn"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#membership"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold tracking-wide text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-[#d4af37]/30 hover:border-[#d4af37] transition-all backdrop-blur-md"
            id="hero-view-plans-btn"
          >
            <span>View Membership Plans</span>
          </a>
        </div>

        {/* 4 Feature Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Safe & Welcoming</p>
              <p className="text-sm font-bold text-white">100% Unisex Gym</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Heavy Grade</p>
              <p className="text-sm font-bold text-white">Strength & Cardio</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Dedicated</p>
              <p className="text-sm font-bold text-white">Certified Trainers</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Post-Lift Wellness</p>
              <p className="text-sm font-bold text-white">Steam Bath Suite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
