import React, { useState } from 'react';
import { FAQS } from '../data/gymData';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const TestimonialsFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] relative">
      <div className="max-w-4xl mx-auto">
        {/* FAQs Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto">
            Everything you need to know regarding admissions, registration fees, steam bath facilities, and rehab programs.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-neutral-900/60 border border-neutral-800/90 overflow-hidden transition-all duration-200 shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-medium text-sm sm:text-base hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/60 bg-black/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-white">Have a specific question not listed here?</p>
            <p className="text-xs text-neutral-400 mt-0.5">Our front desk team is available Mon–Sat ({GYM_INFO.timings.weekdays}) to assist you.</p>
          </div>
          <a
            href={`https://wa.me/${GYM_INFO.phoneRaw}?text=Hi%20Be%20Strong%20Fitness%20Studio%2C%20I%20have%20a%20question%20regarding%20membership`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-800 text-[#25D366] hover:bg-neutral-700 transition-colors border border-neutral-700 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
