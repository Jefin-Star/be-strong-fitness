import React, { useState } from 'react';
import { FACILITIES } from '../data/gymData';
import { Check, Sparkles, Flame, Shield, ArrowUpRight } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FACILITIES[0].id);
  const activeFacility = FACILITIES.find((f) => f.id === activeTab) || FACILITIES[0];

  return (
    <section id="facilities" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Modern Gym <span className="text-gold-gradient">Facilities & Zones</span>
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light">
            Every square foot is engineered for peak physical execution, member hygiene, and active recovery.
          </p>
        </div>

        {/* Facility Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {FACILITIES.map((facility) => {
            const isActive = facility.id === activeTab;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gold-gradient text-black font-bold shadow-lg shadow-[#d4af37]/20 border border-transparent'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {facility.title.split('&')[0]}
              </button>
            );
          })}
        </div>

        {/* Featured Facility Card */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border border-[#d4af37]/25 shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl group">
              <img
                src={activeFacility.imageUrl}
                alt={activeFacility.title}
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-[#d4af37]/40 text-[#f5d061] font-bold">
                  {activeFacility.subtitle}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black font-extrabold uppercase">
                  Verified Facility
                </span>
              </div>
            </div>

            {/* Description & Feature Points */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#f5d061]">
                  Featured Amenity
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeFacility.title}
                </h3>
                <p className="text-sm font-medium text-amber-300/80 mt-1">
                  {activeFacility.subtitle}
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {activeFacility.description}
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeFacility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#f5d061] flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all gold-glow"
                >
                  <span>Experience This Facility</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#membership"
                  className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Check related plan pricing →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
