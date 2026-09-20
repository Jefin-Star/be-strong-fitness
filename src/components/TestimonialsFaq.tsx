import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/gymData';
import { Star, ChevronDown, ChevronUp, MessageSquare, Quote, Sparkles } from 'lucide-react';

export const TestimonialsFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Transformations</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Member <span className="text-gold-gradient">Stories & Experiences</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
              Hear from our community of dedicated lifters, fitness enthusiasts, and couples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between hover:border-[#d4af37]/40 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 text-[#f5d061] text-[11px] font-bold">
                      {testimonial.transformation}
                    </span>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-amber-700 flex items-center justify-center text-black font-bold text-sm">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-neutral-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-neutral-800/80">
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Everything you need to know about joining BE STRONG FITNESS STUDIO.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-neutral-900/50 border border-neutral-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-medium text-sm sm:text-base hover:text-[#d4af37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/60 bg-black/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
