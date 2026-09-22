import React, { useState, useMemo } from 'react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/googleReviewsData';
import { GoogleReview } from '../types';
import { 
  Star, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  Award, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  Sparkles,
  Building2,
  Users,
  Activity
} from 'lucide-react';

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Reviews', icon: Sparkles },
  { id: 'trainers', label: 'Star Trainers & PT', icon: Users },
  { id: 'rehab', label: 'Rehab & Pain Relief', icon: Activity },
  { id: 'women_safety', label: "Women's Safety & Cleanliness", icon: ShieldCheck },
  { id: 'transformations', label: 'Weight Loss & Transformations', icon: Award },
  { id: 'general', label: '3-Floor AC Facility', icon: Building2 },
];

export const GoogleReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [expandedResponses, setExpandedResponses] = useState<Record<string, boolean>>({});

  const toggleOwnerResponse = (id: string) => {
    setExpandedResponses(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredReviews = useMemo(() => {
    return GOOGLE_REVIEWS.filter((review) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || review.category === selectedCategory;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        review.author.toLowerCase().includes(q) ||
        review.text.toLowerCase().includes(q) ||
        (review.trainerMentioned && review.trainerMentioned.toLowerCase().includes(q)) ||
        (review.badge && review.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  return (
    <section id="google-reviews" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#08090c] relative overflow-hidden border-t border-b border-neutral-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Google Maps Branding */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-4 shadow-lg">
            {/* Google colored G symbol */}
            <span className="flex items-center gap-1 font-bold text-white text-xs">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-neutral-500">•</span>
            <span className="flex items-center gap-1 text-[#f5d061]">
              <Star className="w-3.5 h-3.5 fill-[#f5d061] text-[#f5d061]" />
              {GOOGLE_REVIEWS_SUMMARY.averageRating} / 5.0 Verified Ratings
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Genuine <span className="text-gold-gradient">Google Maps Reviews</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto">
            Real feedback from members who train, rehabilitate, and transform daily at Be Strong Fitness Studio, Trivandrum.
          </p>
        </div>

        {/* Rating Scorecard Banner */}
        <div className="rounded-3xl bg-neutral-900/80 border border-[#d4af37]/30 p-6 sm:p-8 backdrop-blur-xl mb-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Score Block */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-cinzel text-5xl sm:text-6xl font-black text-white">
                  {GOOGLE_REVIEWS_SUMMARY.averageRating}
                </span>
                <span className="text-xl text-neutral-400 font-bold">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mb-2 text-[#f5d061]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-neutral-400 font-medium">
                Based on <strong className="text-white">250+ genuine Google reviews</strong> for our Sreekaryam & Trivandrum studio
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <a
                  href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-neutral-900 hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>

            {/* Middle Key Highlights Strip */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              {GOOGLE_REVIEWS_SUMMARY.keyHighlights.map((hl, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-black/50 border border-neutral-800 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-[#d4af37] text-xs font-bold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Verified</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight mb-1">{hl.label}</p>
                    <p className="text-[11px] text-neutral-400 line-clamp-2">{hl.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Pills & Live Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORY_FILTERS.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setVisibleCount(6);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gold-gradient text-black font-bold shadow-lg gold-glow'
                      : 'bg-neutral-900/90 text-neutral-300 border border-neutral-800 hover:border-[#d4af37]/40 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search reviews (e.g. Anandu, Soniya, knee, safety)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Reviews Grid */}
        {displayedReviews.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-neutral-900/30 border border-neutral-800">
            <MessageCircle className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <p className="text-base text-neutral-300 font-semibold">No reviews matching "{searchQuery}"</p>
            <p className="text-xs text-neutral-500 mt-1">Try searching for trainer names like Anandu, Soniya, Dhanush, or terms like rehab.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d061] hover:bg-[#d4af37]/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review) => {
              const isResponseOpen = !!expandedResponses[review.id];
              return (
                <div
                  key={review.id}
                  className="rounded-2xl bg-neutral-900/60 border border-neutral-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-[#d4af37]/40 transition-all duration-200 shadow-xl backdrop-blur-sm group"
                >
                  <div>
                    {/* Top User Info & Google Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar Initial */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-amber-600 to-neutral-800 flex items-center justify-center text-black font-extrabold text-sm flex-shrink-0 shadow-md">
                          {review.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm leading-tight flex items-center gap-1.5">
                            <span>{review.author}</span>
                            {review.isLocalGuide && (
                              <span className="inline-flex items-center text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-500/20 text-[#f5d061] border border-amber-500/30">
                                Local Guide
                              </span>
                            )}
                          </h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5">
                            {review.badge || 'Verified Reviewer'}
                          </p>
                        </div>
                      </div>

                      {/* Google G Icon */}
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0" title="Verified Google Maps Review">
                        <span className="font-bold text-[11px] text-[#4285F4]">G</span>
                      </div>
                    </div>

                    {/* Stars and Relative Time */}
                    <div className="flex items-center justify-between mb-3 pt-1 border-t border-neutral-800/60">
                      <div className="flex items-center gap-1 text-[#f5d061]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-neutral-400">{review.timeAgo}</span>
                    </div>

                    {/* Trainer Tag if applicable */}
                    {review.trainerMentioned && (
                      <div className="mb-2.5">
                        <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 text-[#f5d061] font-semibold border border-[#d4af37]/20">
                          <Users className="w-3 h-3" />
                          <span>Trainer: {review.trainerMentioned}</span>
                        </span>
                      </div>
                    )}

                    {/* Review Text */}
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Owner Response Section (if exists) */}
                  {review.ownerResponse && (
                    <div className="mt-2 pt-3 border-t border-neutral-800/80">
                      <button
                        type="button"
                        onClick={() => toggleOwnerResponse(review.id)}
                        className="w-full flex items-center justify-between text-[11px] font-semibold text-neutral-400 hover:text-[#d4af37] transition-colors py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                          <span>Response from BE STRONG ({review.ownerResponse.timeAgo})</span>
                        </span>
                        {isResponseOpen ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#d4af37]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                        )}
                      </button>

                      {isResponseOpen && (
                        <div className="mt-2 p-3 rounded-xl bg-black/70 border border-neutral-800 text-[11px] text-neutral-300 leading-relaxed">
                          <p className="font-bold text-[#f5d061] mb-1 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#34A853]" />
                            <span>Official Owner Response</span>
                          </p>
                          <p className="italic text-neutral-400">"{review.ownerResponse.text}"</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white hover:bg-neutral-800 border border-[#d4af37]/40 hover:border-[#d4af37] transition-all shadow-lg cursor-pointer"
            >
              <span>Load More Google Reviews ({filteredReviews.length - visibleCount} more)</span>
              <ChevronDown className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        )}

        {/* Bottom CTA to leave review on Google */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Are You Already Training With Us?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Your journey inspires newcomers to take their first step. Share your fitness or rehabilitation experience on our Google Business Profile.
            </p>
          </div>
          <a
            href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gold-gradient text-black hover:brightness-110 transition-all shadow-xl gold-glow"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
