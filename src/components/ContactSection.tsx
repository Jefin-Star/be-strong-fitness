import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ExternalLink,
  Edit2,
  Check,
  RotateCcw
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Configurable state with default values from user prompt
  const [contactInfo, setContactInfo] = useState({
    whatsapp: GYM_INFO.phone,
    phoneRaw: GYM_INFO.phoneRaw,
    email: GYM_INFO.email,
    address: 'BE STRONG FITNESS STUDIO, Near Sreekariyam / Trivandrum, Kerala',
    mapsUrl: GYM_INFO.mapsEmbedUrl,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...contactInfo });
  const [editSavedToast, setEditSavedToast] = useState(false);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactInfo({ ...editForm });
    setIsEditing(false);
    setEditSavedToast(true);
    setTimeout(() => setEditSavedToast(false), 3500);
  };

  const handleResetEdit = () => {
    const defaults = {
      whatsapp: GYM_INFO.phone,
      phoneRaw: GYM_INFO.phoneRaw,
      email: GYM_INFO.email,
      address: 'BE STRONG FITNESS STUDIO, Near Sreekariyam / Trivandrum, Kerala',
      mapsUrl: GYM_INFO.mapsEmbedUrl,
    };
    setContactInfo(defaults);
    setEditForm(defaults);
    setIsEditing(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1015] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Locate & Connect</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Contact <span className="text-gold-gradient">BE STRONG FITNESS STUDIO</span>
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light">
            We are ready to guide your transformation. Visit our state-of-the-art facility or get in touch immediately.
          </p>

          {/* Quick Edit Details Toggle for Admin / Placeholders */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#d4af37]/50 text-xs text-neutral-400 hover:text-[#f5d061] transition-all"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Close Contact Editor' : 'Edit Contact Placeholders'}</span>
            </button>
            {editSavedToast && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium animate-pulse">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
          </div>
        </div>

        {/* Inline Editor Drawer if enabled */}
        {isEditing && (
          <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-neutral-900/95 border border-[#d4af37]/40 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <h3 className="font-outfit text-base font-bold text-white flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-[#d4af37]" />
                <span>Update Contact Details & Map Embed</span>
              </h3>
              <button
                type="button"
                onClick={handleResetEdit}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset Defaults
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={editForm.whatsapp}
                    onChange={(e) => setEditForm({ ...editForm, whatsapp: e.target.value, phoneRaw: e.target.value.replace(/[^0-9]/g, '') })}
                    className="w-full px-3 py-2 rounded-lg bg-black/60 border border-neutral-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/60 border border-neutral-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Gym Address</label>
                <input
                  type="text"
                  value={editForm.address}
                  onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-neutral-700 text-white"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Google Maps Embed URL</label>
                <input
                  type="text"
                  value={editForm.mapsUrl}
                  onChange={(e) => setEditForm({ ...editForm, mapsUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-neutral-700 text-white font-mono text-[11px]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gold-gradient text-black font-bold hover:brightness-110"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Content Layout: Contact Cards + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${contactInfo.phoneRaw}?text=Hi%20BE%20STRONG%20FITNESS%20STUDIO,%20I%20am%20interested%20in%20joining!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#25D366]/60 hover:bg-neutral-900 transition-all group shadow-lg"
              id="contact-card-whatsapp"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    WhatsApp Chat
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#25D366] transition-colors" />
                </div>
                <p className="font-outfit text-lg font-bold text-white mt-0.5">
                  {contactInfo.whatsapp}
                </p>
                <p className="text-xs text-[#25D366] mt-1 font-medium">
                  Instant Support & Admission Queries →
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${contactInfo.email}?subject=Membership%20Inquiry%20-%20BE%20STRONG%20FITNESS%20STUDIO`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#d4af37]/60 hover:bg-neutral-900 transition-all group shadow-lg"
              id="contact-card-email"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#f5d061] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                    Official Email
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <p className="font-outfit text-base font-bold text-white mt-0.5 truncate">
                  {contactInfo.email}
                </p>
                <p className="text-xs text-amber-400/80 mt-1 font-medium">
                  Click to write directly to management →
                </p>
              </div>
            </a>

            {/* Timings Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 flex items-center justify-center text-[#f5d061]">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Studio Working Hours</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-white">{GYM_INFO.timings.weekdays}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Sunday Session</span>
                  <span className="font-semibold text-amber-400">{GYM_INFO.timings.sunday}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400 border-t border-neutral-800/80 pt-2">
                  <span>Steam Bath Recovery</span>
                  <span className="text-[#f5d061]">{GYM_INFO.timings.steamBath}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Location Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-[#d4af37]/30 shadow-2xl">
              {/* Address Header Bar */}
              <div className="p-4 sm:p-5 bg-black/60 border-b border-neutral-800 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#f5d061] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#f5d061]">
                    BE STRONG FITNESS STUDIO Location
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {contactInfo.address}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Coordinates: 8°32'49.5"N 76°55'00.6"E (Trivandrum)
                  </p>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-neutral-950">
                <iframe
                  src={contactInfo.mapsUrl}
                  title="BE STRONG FITNESS STUDIO Location Map"
                  className="w-full h-full border-0 filter contrast-105"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Directions Button Strip */}
              <div className="p-4 bg-neutral-950 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-neutral-400">
                  Easy parking space available for bikes & cars
                </span>
                <a
                  href={`https://maps.google.com/?q=8.547089991496271,76.91424617501325`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-gradient text-black font-bold hover:brightness-110 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
