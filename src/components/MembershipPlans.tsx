import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { MembershipPlan } from '../types';
import { Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck, Flame, Users, Clock, Award } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'standard' | 'couple' | 'pt' | 'addons'>('all');

  const filteredPlans = selectedCategory === 'all'
    ? MEMBERSHIP_PLANS
    : MEMBERSHIP_PLANS.filter((p) => p.category === selectedCategory);

  const handleJoinClick = (plan: MembershipPlan) => {
    onSelectPlan(plan.id);
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1015] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Fee Schedule</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Membership <span className="text-gold-gradient">Plans & Pricing</span>
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light">
            Flexible & affordable options to reach your fitness goals. Transparent rates with maximum value discounts.
          </p>
        </div>

        {/* Mandatory Fee & Group Notice Banners */}
        <div className="max-w-4xl mx-auto mb-12 space-y-3">
          {/* Registration Notice */}
          <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-xl bg-amber-950/30 border border-[#d4af37]/40 text-amber-200">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[#d4af37]/20 text-[#f5d061]">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-[#f5d061]">
                  Mandatory Registration
                </p>
                <p className="text-sm text-neutral-200">
                  <strong className="text-white">₹{GYM_INFO.registrationFee}</strong> one-time fee applicable to all new members across all standard & couple packages.
                </p>
              </div>
            </div>
            <div className="text-xs bg-[#d4af37]/20 px-3 py-1.5 rounded-lg border border-[#d4af37]/40 font-semibold text-amber-300">
              One-Time Only
            </div>
          </div>

          {/* Group Policy Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs sm:text-sm text-neutral-300">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Important Policy Note</p>
              <p className="text-neutral-400 mt-0.5 leading-relaxed text-xs">
                All members working out in informal group sessions (including evening terrace workout groups) must register and pay ₹1,800 per person individually. Group discount rates (₹1,500/month) apply strictly to official team registrations of 5+ members joining together.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Plans ({MEMBERSHIP_PLANS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('standard')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'standard'
                ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Standard Memberships
          </button>
          <button
            onClick={() => setSelectedCategory('couple')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'couple'
                ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Couple Packages
          </button>
          <button
            onClick={() => setSelectedCategory('pt')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'pt'
                ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Personal Training (PT)
          </button>
          <button
            onClick={() => setSelectedCategory('addons')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'addons'
                ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Steam Bath & Team Special
          </button>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPlans.map((plan) => {
            const isHighlighted = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-7 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 ring-1 ring-[#d4af37]/40'
                    : 'bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800 hover:border-[#d4af37]/40'
                }`}
              >
                {/* Popular or Best Value Badge */}
                {plan.tag && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md ${
                        isHighlighted
                          ? 'bg-gold-gradient text-black'
                          : 'bg-neutral-800 text-amber-300 border border-[#d4af37]/30'
                      }`}
                    >
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category / Subcategory */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mt-2 mb-1">
                    <span className="uppercase tracking-widest font-semibold text-[#f5d061]/80">
                      {plan.subCategory || (plan.category === 'standard' ? 'Standard Tier' : plan.category.toUpperCase())}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-neutral-300">
                      <Clock className="w-3.5 h-3.5" />
                      {plan.duration}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>

                  {/* Pricing Display */}
                  <div className="pb-4 mb-4 border-b border-neutral-800">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-cinzel text-3xl sm:text-4xl font-black text-white">
                        ₹{plan.salePrice.toLocaleString('en-IN')}
                      </span>
                      {plan.regularPrice && (
                        <span className="text-base sm:text-lg text-neutral-500 line-through">
                          ₹{plan.regularPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Monthly Equivalent */}
                    {plan.monthlyEquivalent && (
                      <p className="text-xs text-amber-400/90 font-medium mt-1">
                        ≈ ₹{plan.monthlyEquivalent.toLocaleString('en-IN')} / month
                      </p>
                    )}

                    {/* Savings Tag */}
                    {plan.savings && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-600/40">
                        You Save ₹{plan.savings.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special Note */}
                  {plan.note && (
                    <div className="p-2.5 rounded-lg bg-black/40 border border-neutral-800 text-[11px] text-neutral-400 italic mb-4">
                      {plan.note}
                    </div>
                  )}
                </div>

                {/* Card Join Action Button */}
                <button
                  onClick={() => handleJoinClick(plan)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isHighlighted
                      ? 'bg-gold-gradient text-black hover:brightness-110 shadow-lg shadow-[#d4af37]/20 gold-glow'
                      : 'bg-neutral-800 hover:bg-[#d4af37] text-white hover:text-black border border-neutral-700 hover:border-transparent'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Refund Policy Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-center max-w-2xl mx-auto">
          <p className="text-xs text-red-300/90 font-medium">
            <strong>NO REFUNDS:</strong> Fees once paid are strictly non-refundable and non-transferable under any circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};
