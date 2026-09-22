import React, { useState, useMemo } from 'react';
import { GYM_SERVICES, GYM_INFO } from '../data/gymData';
import { GymService } from '../types';
import { 
  Activity, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  AlignCenter, 
  HeartPulse, 
  Flame, 
  Users, 
  Award, 
  Smile, 
  Timer, 
  Droplets,
  Check, 
  ArrowRight, 
  MessageCircle, 
  Search, 
  SlidersHorizontal,
  Info
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: GymService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryFilters = [
    { id: 'all', label: 'All Services', count: 13 },
    { id: 'rehab', label: 'Medical & Rehab', count: 4 },
    { id: 'specialized', label: 'Hormonal & Postpartum', count: 2 },
    { id: 'performance', label: 'Crossfit & HIIT', count: 3 },
    { id: 'personal', label: 'Personal & Senior', count: 3 },
    { id: 'wellness', label: 'Steam Bath', count: 1 },
  ];

  // Helper to map icon name to component
  const renderServiceIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Activity': return <Activity className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'AlignCenter': return <AlignCenter className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'Timer': return <Timer className={className} />;
      case 'Droplets': return <Droplets className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const filteredServices = useMemo(() => {
    return GYM_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.shortDesc.toLowerCase().includes(query) ||
        service.tag.toLowerCase().includes(query) ||
        service.idealFor.toLowerCase().includes(query) ||
        service.benefits.some((b) => b.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleServiceClick = (service: GymService) => {
    if (onSelectService) {
      onSelectService(service);
    }
    const registerEl = document.getElementById('register');
    if (registerEl) {
      registerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0b0c10] relative overflow-hidden border-t border-neutral-800/80">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#e5252a]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#d4af37]/40 text-[#f5d061] text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Comprehensive Services & Medical Fitness</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-5">
            Specialized Training & <span className="text-gold-gradient">Clinical Care</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            From certified clinical rehabilitation for joint and spine recovery to explosive CrossFit conditioning, 
            senior vitality protocols, and relaxing therapeutic steam sessions—experience tailored training designed for your exact health goals.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categoryFilters.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gold-gradient text-black shadow-md shadow-[#d4af37]/20 font-extrabold scale-105'
                      : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4 text-[#d4af37]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Knee, Back, PCOD, Steam)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Grid (13 Services) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-neutral-900/40 border border-neutral-800">
            <SlidersHorizontal className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching services found</h3>
            <p className="text-sm text-neutral-400 mb-4">Try clearing your search query or selecting a different category tab.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-xs font-semibold hover:bg-neutral-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isRehab = service.category === 'rehab';
              const isSpecial = service.category === 'specialized';
              const isPerformance = service.category === 'performance';
              const isWellness = service.category === 'wellness';

              let badgeBg = 'bg-neutral-800 text-neutral-300 border-neutral-700';
              let iconBoxClass = 'bg-[#d4af37]/15 border-[#d4af37]/40 text-[#f5d061]';
              let glowBorder = 'hover:border-[#d4af37]/60';

              if (isRehab) {
                badgeBg = 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40';
                iconBoxClass = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
                glowBorder = 'hover:border-emerald-500/50';
              } else if (isSpecial) {
                badgeBg = 'bg-purple-950/60 text-purple-300 border-purple-800/40';
                iconBoxClass = 'bg-purple-500/15 border-purple-500/30 text-purple-400';
                glowBorder = 'hover:border-purple-500/50';
              } else if (isPerformance) {
                badgeBg = 'bg-amber-950/60 text-amber-300 border-amber-800/40';
                iconBoxClass = 'bg-[#e5252a]/15 border-[#e5252a]/30 text-[#e5252a]';
                glowBorder = 'hover:border-[#e5252a]/50';
              } else if (isWellness) {
                badgeBg = 'bg-cyan-950/60 text-cyan-300 border-cyan-800/40';
                iconBoxClass = 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400';
                glowBorder = 'hover:border-cyan-500/50';
              }

              const waMessage = encodeURIComponent(
                `Hi BE STRONG FITNESS STUDIO, I would like to inquire about your "${service.title}" service and schedule a consultation.`
              );

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className={`flex flex-col justify-between rounded-2xl bg-neutral-900/80 border border-neutral-800/90 p-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 ${glowBorder}`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${iconBoxClass}`}>
                        {renderServiceIcon(service.iconName, "w-6 h-6")}
                      </div>
                      
                      <div className="text-right">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeBg}`}>
                          {service.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">
                      {service.tag}
                    </p>

                    {/* Title */}
                    <h3 className="font-outfit text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2 mb-5">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">
                        What's Included & Benefits:
                      </p>
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For Box */}
                    <div className="p-3 rounded-xl bg-black/40 border border-neutral-800/80 mb-5">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 mb-1">
                        <Info className="w-3 h-3 text-[#d4af37]" />
                        <span>Ideal For:</span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed italic">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#d4af37]/15 hover:bg-[#d4af37] text-[#f5d061] hover:text-black border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      id={`btn-enroll-${service.id}`}
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${GYM_INFO.phoneRaw}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-neutral-800 hover:bg-[#25D366]/20 text-neutral-300 hover:text-[#25D366] border border-neutral-700/80 hover:border-[#25D366]/50 transition-all flex items-center justify-center"
                      title="Enquire on WhatsApp"
                      id={`btn-wa-${service.id}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Free Assessment & Doctor-Guided Consultation Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#f5d061] mb-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                Personalized Physical Assessment
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Not sure which rehab or training program you need?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Visit BE STRONG FITNESS STUDIO for an in-person physical screening, joint range-of-motion test, and body composition analysis. Our certified trainers will evaluate your medical history and tailor a safe roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={`https://wa.me/${GYM_INFO.phoneRaw}?text=${encodeURIComponent('Hi BE STRONG FITNESS STUDIO, I would like to book a free physical evaluation & consultation for specialized training / rehab.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/20 cursor-pointer"
                id="cta-rehab-whatsapp"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Free Assessment via WhatsApp</span>
              </a>

              <a
                href="#register"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider transition-all hover:brightness-110 flex items-center justify-center gap-2 gold-glow cursor-pointer"
                id="cta-rehab-register"
              >
                <span>Register Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
