import React from 'react';
import { RegistrationSubmission } from '../types';
import { GYM_INFO } from '../data/gymData';
import { CheckCircle2, MessageCircle, Mail, X, Calendar, Phone, User, Award, Printer, ShieldCheck } from 'lucide-react';

interface RegistrationSuccessModalProps {
  isOpen: boolean;
  submission: RegistrationSubmission | null;
  onClose: () => void;
}

export const RegistrationSuccessModal: React.FC<RegistrationSuccessModalProps> = ({
  isOpen,
  submission,
  onClose,
}) => {
  if (!isOpen || !submission) return null;

  // Formatted WhatsApp message link
  const waMessage = encodeURIComponent(
    `*NEW MEMBERSHIP REGISTRATION - BE STRONG FITNESS STUDIO*\n` +
    `-----------------------------------\n` +
    `*Registration ID:* ${submission.id}\n` +
    `*Name:* ${submission.fullName}\n` +
    `*Phone:* ${submission.phone}\n` +
    `*Email:* ${submission.email}\n` +
    `*Plan:* ${submission.planName}\n` +
    `*Plan Price:* ₹${submission.price.toLocaleString('en-IN')} (+ ₹${GYM_INFO.registrationFee} Reg Fee if new)\n` +
    `*Preferred Start Date:* ${submission.startDate}\n` +
    `*Fitness Goals:* ${submission.fitnessGoals || 'General Fitness & Strength'}\n` +
    `-----------------------------------\n` +
    `I have registered on the website and would like to confirm my admission!`
  );

  const waUrl = `https://wa.me/${GYM_INFO.phoneRaw}?text=${waMessage}`;

  const emailSubject = encodeURIComponent(`Gym Registration: ${submission.fullName} (${submission.id})`);
  const emailBody = encodeURIComponent(
    `Dear BE STRONG FITNESS STUDIO Team,\n\n` +
    `I have registered for a gym membership on your website.\n\n` +
    `Registration Details:\n` +
    `- ID: ${submission.id}\n` +
    `- Name: ${submission.fullName}\n` +
    `- Phone: ${submission.phone}\n` +
    `- Email: ${submission.email}\n` +
    `- Selected Plan: ${submission.planName} (₹${submission.price})\n` +
    `- Preferred Start Date: ${submission.startDate}\n` +
    `- Fitness Goals: ${submission.fitnessGoals}\n\n` +
    `Please guide me with the joining process and payment.`
  );
  const emailUrl = `mailto:${GYM_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-[#d4af37]/50 shadow-2xl p-6 sm:p-8 text-neutral-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#f5d061] gold-glow">
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5d061]">
            Registration Successful
          </span>
          <h3 className="font-cinzel text-2xl font-black text-white mt-1">
            Welcome to Be Strong Fitness Studio
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Your admission registration pass has been generated.
          </p>
        </div>

        {/* Registration Card / Slip */}
        <div className="rounded-2xl bg-black/60 border border-neutral-800 p-5 space-y-3.5 text-xs sm:text-sm mb-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400">Registration ID:</span>
            <span className="font-mono font-bold text-[#f5d061]">{submission.id}</span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#d4af37]" /> Name:
            </span>
            <span className="font-semibold text-white">{submission.fullName}</span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> Phone:
            </span>
            <span className="font-medium text-neutral-200">{submission.phone}</span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" /> Plan:
            </span>
            <span className="font-semibold text-amber-300 text-right">{submission.planName}</span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400">Plan Fee:</span>
            <span className="font-bold text-white font-cinzel text-base">₹{submission.price.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> Preferred Start:
            </span>
            <span className="font-medium text-neutral-200">{submission.startDate}</span>
          </div>

          {submission.fitnessGoals && (
            <div className="pt-1">
              <span className="text-neutral-400 block text-[11px] mb-0.5">Fitness Goals / Message:</span>
              <p className="text-neutral-300 bg-neutral-900/80 p-2 rounded border border-neutral-800 text-xs italic">
                "{submission.fitnessGoals}"
              </p>
            </div>
          )}

          <div className="pt-2 text-[11px] text-amber-300/80 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Note: ₹750 one-time registration fee applies to all new members.</span>
          </div>
        </div>

        {/* Action Buttons: WhatsApp & Email */}
        <div className="space-y-2.5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Details on WhatsApp ({GYM_INFO.phone})</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={emailUrl}
              className="py-2.5 px-3 rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#d4af37]" />
              <span>Email Gym</span>
            </a>

            <button
              onClick={handlePrint}
              className="py-2.5 px-3 rounded-xl border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-[#d4af37]" />
              <span>Print Slip</span>
            </button>
          </div>
        </div>

        {/* Next step guide */}
        <p className="mt-5 text-[11px] text-center text-neutral-500">
          Present this slip or WhatsApp message at our front desk located in Trivandrum to complete your admission.
        </p>
      </div>
    </div>
  );
};
