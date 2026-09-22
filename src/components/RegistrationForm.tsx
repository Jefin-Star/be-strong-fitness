import React, { useState, useEffect } from 'react';
import { MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { RegistrationFormData, RegistrationSubmission } from '../types';
import { RegistrationSuccessModal } from './RegistrationSuccessModal';
import { Send, User, Phone, Mail, Calendar, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface RegistrationFormProps {
  selectedPlanId: string;
  onPlanChange: (id: string) => void;
  selectedGoal?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlanId,
  onPlanChange,
  selectedGoal,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    planId: selectedPlanId || MEMBERSHIP_PLANS[0].id,
    startDate: new Date().toISOString().split('T')[0],
    fitnessGoals: selectedGoal || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync when prop selectedPlanId updates
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // Sync when prop selectedGoal updates
  useEffect(() => {
    if (selectedGoal) {
      setFormData((prev) => ({ ...prev, fitnessGoals: selectedGoal }));
    }
  }, [selectedGoal]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else {
      // Basic phone check (allow 10 digits or with spaces/dashes)
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.planId) {
      newErrors.planId = 'Please select a membership plan.';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please select your preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const selectedPlan = MEMBERSHIP_PLANS.find((p) => p.id === formData.planId) || MEMBERSHIP_PLANS[0];
    const registrationId = `BESTRONG-${Math.floor(100000 + Math.random() * 900000)}`;

    const submission: RegistrationSubmission = {
      ...formData,
      id: registrationId,
      planName: selectedPlan.name,
      price: selectedPlan.salePrice,
      submittedAt: new Date().toISOString(),
      status: 'confirmed',
    };

    // Save to localStorage safely
    try {
      const raw = localStorage.getItem('bestrong_registrations');
      const existing = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(existing) ? existing : [];
      list.unshift(submission);
      localStorage.setItem('bestrong_registrations', JSON.stringify(list));
    } catch {
      // ignore potential quota or storage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(submission);
      setIsModalOpen(true);
    }, 600);
  };

  const activePlan = MEMBERSHIP_PLANS.find((p) => p.id === formData.planId);

  return (
    <section id="register" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0c10] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f5d061] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Be Strong Fitness Studio</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Membership <span className="text-gold-gradient">Registration</span>
          </h2>
          <p className="mt-3 text-base text-neutral-300 font-light max-w-xl mx-auto">
            Reserve your admission slot in seconds. Confirm via WhatsApp or at our front desk with ease.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-neutral-900/80 border border-[#d4af37]/30 shadow-2xl p-6 sm:p-10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Full Name <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <User className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border text-white text-sm focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Phone Number <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border text-white text-sm focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border text-white text-sm focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Preferred Start Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Preferred Start Date <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.startDate}
                    onChange={(e) => {
                      setFormData({ ...formData, startDate: e.target.value });
                      if (errors.startDate) setErrors({ ...errors, startDate: undefined });
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border text-white text-sm focus:outline-none transition-all ${
                      errors.startDate
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]'
                    }`}
                  />
                </div>
                {errors.startDate && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.startDate}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Membership Plan (Dropdown) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Membership Plan <span className="text-[#d4af37]">*</span>
              </label>
              <select
                value={formData.planId}
                onChange={(e) => {
                  const newId = e.target.value;
                  setFormData({ ...formData, planId: newId });
                  onPlanChange(newId);
                }}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all"
              >
                <optgroup label="Standard Memberships">
                  {MEMBERSHIP_PLANS.filter((p) => p.category === 'standard').map((p) => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.name} - ₹{p.salePrice.toLocaleString('en-IN')} ({p.duration})
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Couple Packages (2 Persons)">
                  {MEMBERSHIP_PLANS.filter((p) => p.category === 'couple').map((p) => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.name} - ₹{p.salePrice.toLocaleString('en-IN')}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Personal Training (1-on-1 & Small Group)">
                  {MEMBERSHIP_PLANS.filter((p) => p.category === 'pt').map((p) => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.name} - ₹{p.salePrice.toLocaleString('en-IN')}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Special Add-ons & Team Discount">
                  {MEMBERSHIP_PLANS.filter((p) => p.category === 'addons').map((p) => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.name} - ₹{p.salePrice.toLocaleString('en-IN')}
                    </option>
                  ))}
                </optgroup>
              </select>

              {/* Active Plan Detail Box */}
              {activePlan && (
                <div className="mt-3 p-3.5 rounded-xl bg-black/40 border border-neutral-800 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div>
                    <span className="text-neutral-400">Selected Plan: </span>
                    <span className="font-semibold text-white">{activePlan.name}</span>
                    <span className="text-amber-400 font-bold ml-2">
                      (₹{activePlan.salePrice.toLocaleString('en-IN')})
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>+ ₹{GYM_INFO.registrationFee} Registration Fee (New Members)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Message / Fitness Goals */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Select Service / Fitness Goal (Optional)
                </label>
                <span className="text-[11px] text-neutral-400">Click to select</span>
              </div>

              {/* Quick Select Service Chips */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {[
                  'Knee Rehab',
                  'Cervical Spondylitis',
                  'Back Pain Relief',
                  'PCOD / PCOS / Thyroid',
                  'Post Pregnancy Rehab',
                  'Scoliosis Support',
                  'Senior Citizen Training',
                  'Crossfit',
                  'Group Training',
                  'Personal Training',
                  'Couple Training',
                  'HIIT Training',
                  'Steam Bath',
                  'Weight Loss',
                  'Muscle Hypertrophy'
                ].map((tag) => {
                  const isSelected = formData.fitnessGoals.toLowerCase().includes(tag.toLowerCase());
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          // Remove
                          const updated = formData.fitnessGoals
                            .replace(new RegExp(tag + '[, ]*', 'gi'), '')
                            .trim();
                          setFormData({ ...formData, fitnessGoals: updated });
                        } else {
                          // Add
                          const updated = formData.fitnessGoals.trim() 
                            ? `${formData.fitnessGoals.trim()}, ${tag}` 
                            : tag;
                          setFormData({ ...formData, fitnessGoals: updated });
                        }
                      }}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-sm'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-[#d4af37]/50 hover:text-white'
                      }`}
                    >
                      {isSelected ? `✓ ${tag}` : `+ ${tag}`}
                    </button>
                  );
                })}
              </div>

              <div className="relative">
                <textarea
                  rows={2}
                  value={formData.fitnessGoals}
                  onChange={(e) => setFormData({ ...formData, fitnessGoals: e.target.value })}
                  placeholder="e.g. Knee rehab, Back pain relief, Weight loss, PCOD conditioning..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-widest bg-gold-gradient text-black hover:brightness-110 transition-all gold-glow flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
              id="submit-registration-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Registration...</span>
                </>
              ) : (
                <>
                  <span>Submit Registration</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-neutral-500">
              By submitting, your details are securely registered and you will be connected directly with BE STRONG FITNESS STUDIO via WhatsApp and Email.
            </p>
          </form>
        </div>
      </div>

      {/* Success Receipt Modal */}
      <RegistrationSuccessModal
        isOpen={isModalOpen}
        submission={submittedData}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
