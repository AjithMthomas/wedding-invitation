import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, Check } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface Wish {
  id: string;
  name: string;
  message: string;
  icon: string;
  time: string;
}

export const SectionClosingBlessing: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: '1',
      name: 'Venkatesh & Suma Family',
      message: 'May Lord Venkateshwara and Mahalakshmi bless Sneha and Sooraj with unending prosperity, joyous health, and eternal companionship!',
      icon: '🪷',
      time: 'Just now',
    },
    {
      id: '2',
      name: 'Anand & Deepa',
      message: 'Heartiest congratulations to the wonderful couple! Can’t wait to celebrate your special day and shower you with flowers and love.',
      icon: '🪔',
      time: '1 hour ago',
    },
    {
      id: '3',
      name: 'Pooja & Karthik',
      message: 'Two of the kindest souls we know, united in sacred matrimony. Wishing Sneha and Sooraj a lifetime of smiles, laughter, and sweet adventures!',
      icon: '💖',
      time: '2 hours ago',
    },
  ]);

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string>('🪷');
  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'not-attending' | null>(null);

  const icons = ['🪷', '🪔', '🏺', '💖', '✨'];

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#C5A45C', '#641F2B', '#FFF4D9', '#EBA03C'],
    });

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      icon: selectedIcon,
      time: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
  };

  const handleRsvp = (status: 'attending' | 'not-attending') => {
    setRsvpStatus(status);
    if (status === 'attending') {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#C5A45C', '#D8C49A', '#FAF7F2'],
      });
    }
  };

  return (
    <section 
      id="closing-blessing" 
      className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#1A060A] via-[#2A0E13] to-[#140407] overflow-hidden text-center"
    >
      {/* Background Lace & Paper Pattern */}
      <div className="absolute inset-0 lace-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Sacred Seal Mini Motif */}
        <div className="w-20 h-20 mx-auto rounded-full border border-[#C5A45C] p-1 shadow-gold-glow mb-6 overflow-hidden bg-[#45151D]">
          <img
            src="/images/royal_wax_seal.jpg"
            alt="Royal Monogram"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm font-royal tracking-[0.3em] text-[#D8C49A] uppercase mb-3">
            WITH HEARTFELT GRATITUDE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-light leading-relaxed max-w-2xl mx-auto">
            "Your presence will make our celebration even more special."
          </h2>

          <OrnamentalDivider variant="lotus" className="my-6" />

          <p className="text-base sm:text-lg font-serif italic text-[#EEE5D7] max-w-xl mx-auto leading-relaxed mb-8">
            "We look forward to celebrating this beautiful beginning with you."
          </p>

          <div className="my-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-royal font-bold text-gold-shimmer">
              Sneha & Sooraj
            </h3>
            <p className="text-xs font-royal tracking-[0.25em] text-[#C5A45C] uppercase mt-2">
              #SnehaWedsSooraj
            </p>
          </div>
        </motion.div>

        {/* Quick RSVP Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-14 max-w-md mx-auto bg-[#301015]/80 border border-[#C5A45C]/50 rounded-2xl p-6 shadow-xl"
        >
          <span className="text-xs font-royal tracking-widest text-[#D8C49A] uppercase block mb-1">
            WILL YOU GRACE OUR AUSPICIOUS DAY?
          </span>
          <p className="text-xs font-serif italic text-[#EEE5D7]/75 mb-4">
            Kindly let the family know if you can attend
          </p>

          {rsvpStatus ? (
            <div className="py-3 px-4 rounded-xl bg-[#45151D] border border-[#C5A45C] text-[#FAF7F2] flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#C5A45C]" />
              <span className="font-serif text-sm">
                {rsvpStatus === 'attending' 
                  ? 'Thank you! We joyfully look forward to welcoming you.' 
                  : 'Thank you for letting us know. You will be in our thoughts and prayers!'}
              </span>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => handleRsvp('attending')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A45C] to-[#D8C49A] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                Joyfully Accept 🌸
              </button>
              <button
                onClick={() => handleRsvp('not-attending')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#250B10] hover:bg-[#350E17] border border-[#C5A45C]/40 text-[#D8C49A] font-royal text-xs uppercase tracking-wider transition-all"
              >
                Regretfully Decline
              </button>
            </div>
          )}
        </motion.div>

        {/* Bless The Couple / Guest Wishes Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-b from-[#380E15] via-[#45151D] to-[#2E0E14] border-2 border-[#C5A45C]/50 rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-royal tracking-[0.2em] text-[#C5A45C] uppercase">
              GUESTBOOK OF WISHES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] font-normal mt-1">
              Shower Your Blessings on the Couple
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSendWish} className="max-w-xl mx-auto space-y-4 mb-10">
            <div>
              <label className="text-xs font-royal text-[#D8C49A] uppercase tracking-wider block mb-1">
                Your Name / Family Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh & Family"
                className="w-full px-4 py-2.5 rounded-xl bg-[#20080D] border border-[#C5A45C]/40 text-[#FAF7F2] placeholder-[#EEE5D7]/40 focus:outline-none focus:border-[#C5A45C] text-sm font-serif"
              />
            </div>

            <div>
              <label className="text-xs font-royal text-[#D8C49A] uppercase tracking-wider block mb-1">
                Your Auspicious Wedding Wish
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers, blessings, or sweet words for Sneha & Sooraj..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#20080D] border border-[#C5A45C]/40 text-[#FAF7F2] placeholder-[#EEE5D7]/40 focus:outline-none focus:border-[#C5A45C] text-sm font-serif resize-none"
              />
            </div>

            {/* Icon picker */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-royal text-[#D8C49A] mr-1 hidden sm:inline">Emblem:</span>
                {icons.map((ic) => (
                  <button
                    key={ic}
                    type="button"
                    onClick={() => setSelectedIcon(ic)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border transition-all ${
                      selectedIcon === ic
                        ? 'border-[#C5A45C] bg-[#C5A45C]/20 scale-110'
                        : 'border-transparent hover:border-[#C5A45C]/40'
                    }`}
                  >
                    {ic}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A45C] to-[#D8C49A] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Send Blessing</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Wishes List */}
          <div className="space-y-4 max-w-2xl mx-auto max-h-80 overflow-y-auto pr-2">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="bg-[#20080D]/70 border border-[#C5A45C]/30 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{w.icon}</span>
                    <h5 className="font-royal text-sm font-bold text-gold-shimmer">
                      {w.name}
                    </h5>
                  </div>
                  <span className="text-[10px] text-[#EEE5D7]/50 font-serif italic">
                    {w.time}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-serif text-[#EEE5D7] italic leading-relaxed pl-6">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Final Auspicious Vedic Footer */}
        <div className="mt-20 pt-8 border-t border-[#C5A45C]/20 text-center">
          <p className="text-xs font-royal tracking-[0.3em] text-[#C5A45C] uppercase mb-1">
            ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
          </p>
          <p className="text-[11px] font-serif text-[#EEE5D7]/60 italic">
            "May all beings be blessed with peace, harmony, and joy."
          </p>
          <p className="text-[10px] text-[#EEE5D7]/40 font-sans mt-3">
            Crafted with deep love and devotion for Sneha & Sooraj's Wedding • 2026
          </p>
        </div>

      </div>
    </section>
  );
};

