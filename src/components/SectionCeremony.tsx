import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Flame, HeartHandshake } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionCeremony: React.FC = () => {
  const [activeRitual, setActiveRitual] = useState<number>(0);

  const rituals = [
    {
      title: 'Shri Ganesh Puja',
      sub: 'Invoking Auspicious Blessings',
      desc: 'The sacred ceremonies commence with heartfelt prayers to Lord Ganesha, the remover of all obstacles, seeking divine grace, prosperity, and harmony for the couple.',
      icon: '🕉️',
    },
    {
      title: 'Kanyadaanam',
      sub: 'The Sacred Trust of Love',
      desc: 'A deeply moving ritual where the parents entrust their beloved daughter with emotional blessings, honoring the union of two families in mutual respect and love.',
      icon: '🌸',
    },
    {
      title: 'Mangalya Dharanam',
      sub: 'The Tying of the Holy Mangalsutra',
      desc: 'The supreme sacred moment where the groom ties the auspicious Mangalsutra, accompanied by the joyous shower of Akshata and the resonant chanting of Vedic mantras.',
      icon: '📿',
    },
    {
      title: 'Saptapadi',
      sub: 'The Seven Sacred Steps',
      desc: 'Circling the consecrated Agni fire seven times, the couple takes sacred vows of lifelong friendship, spiritual dharma, abundance, health, and eternal togetherness.',
      icon: '🔥',
    },
  ];

  const handleAddToCalendar = () => {
    // Generate .ics calendar file or alert user
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sneha and Sooraj Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Sneha & Sooraj Royal Hindu Wedding',
      'DESCRIPTION:Sacred union and wedding celebration of Sneha Dilip & Sooraj. Venue: [ADD VENUE]',
      'LOCATION:[ADD VENUE], [ADD VENUE ADDRESS]',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Sneha_Sooraj_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="wedding-ceremony" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#2D0D14] overflow-hidden"
    >
      {/* Background Lace & Silk Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/images/burgundy_lace_texture.jpg')` }}
      />
      <div className="absolute inset-0 lace-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45151D] border border-[#C5A45C]/50 text-xs font-royal tracking-[0.2em] text-[#D8C49A] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C5A45C] animate-pulse" />
            <span>Auspicious Muhurtham</span>
            <Flame className="w-3.5 h-3.5 text-[#C5A45C] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            The Wedding Ceremony
          </h2>
          <OrnamentalDivider variant="lotus" className="my-4" />
          <p className="text-xs sm:text-sm font-serif italic text-[#EEE5D7]/80">
            Sacred Vedic rites performed amidst the fragrance of fresh jasmine, glowing brass lamps, and family blessings.
          </p>
        </div>

        {/* Primary Event Details Card (Calendar Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#45151D] via-[#351017] to-[#250B10] border-2 border-[#C5A45C]/60 rounded-3xl p-6 sm:p-12 shadow-2xl relative mb-16 overflow-hidden"
        >
          {/* Ornate corner brackets */}
          <div className="absolute top-4 left-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute top-4 right-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute bottom-4 left-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute bottom-4 right-4 text-[#C5A45C] text-sm">✦</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Event Details with Editable Placeholders */}
            <div className="space-y-6">
              
              {/* Wedding Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                  <Calendar className="w-6 h-6 text-[#C5A45C]" />
                </div>
                <div>
                  <span className="text-xs font-royal uppercase tracking-widest text-[#D8C49A]">
                    Wedding Date
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-medium tracking-wide mt-0.5">
                    <span className="px-3 py-1 rounded bg-[#1F070B] border border-dashed border-[#C5A45C]/60 text-gold-shimmer font-semibold inline-block">
                      [ADD DATE]
                    </span>
                  </div>
                  <p className="text-[11px] text-[#EEE5D7]/60 font-serif italic mt-1">
                    * Date to be finalized & announced soon
                  </p>
                </div>
              </div>

              {/* Muhurtham / Wedding Time */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-[#C5A45C]" />
                </div>
                <div>
                  <span className="text-xs font-royal uppercase tracking-widest text-[#D8C49A]">
                    Muhurtham / Wedding Time
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-medium tracking-wide mt-0.5">
                    <span className="px-3 py-1 rounded bg-[#1F070B] border border-dashed border-[#C5A45C]/60 text-gold-shimmer font-semibold inline-block">
                      [ADD TIME]
                    </span>
                  </div>
                  <p className="text-[11px] text-[#EEE5D7]/60 font-serif italic mt-1">
                    * Auspicious Vedic Lagna
                  </p>
                </div>
              </div>

              {/* Wedding Venue & Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-[#C5A45C]" />
                </div>
                <div>
                  <span className="text-xs font-royal uppercase tracking-widest text-[#D8C49A]">
                    Wedding Venue & Location
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-medium tracking-wide mt-0.5">
                    <span className="px-3 py-1 rounded bg-[#1F070B] border border-dashed border-[#C5A45C]/60 text-gold-shimmer font-semibold inline-block">
                      [ADD VENUE]
                    </span>
                  </div>
                  <div className="text-sm font-serif text-[#EEE5D7] mt-1">
                    <span className="text-xs font-sans text-[#D8C49A] block mb-0.5">Venue Address:</span>
                    <span className="italic text-[#FAF7F2] font-serif">[ADD VENUE ADDRESS]</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Calendar Preview & Interactive Add to Calendar */}
            <div className="bg-[#20080D]/80 border border-[#C5A45C]/40 rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-inner">
              <div className="w-full pb-4 border-b border-[#C5A45C]/20">
                <span className="text-xs font-royal tracking-widest text-[#C5A45C] uppercase block mb-1">
                  SAVE THE SACRED DATE
                </span>
                <p className="text-xs font-serif italic text-[#EEE5D7]/75">
                  Add this auspicious celebration to your personal calendar
                </p>
              </div>

              {/* Traditional Diya / Deepam Motif */}
              <div className="my-6 relative">
                <div className="w-20 h-20 rounded-full bg-[#641F2B]/40 border border-[#C5A45C]/50 flex items-center justify-center text-3xl shadow-gold-glow animate-pulse-slow">
                  🪔
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400/30 rounded-full blur-sm" />
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={handleAddToCalendar}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add To Calendar (.ics)</span>
                </button>

                <p className="text-[11px] text-[#EEE5D7]/60 font-serif italic">
                  Compatible with Apple Calendar, Google Calendar & Outlook
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Sacred Hindu Rituals Carousel / Tabs */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <span className="text-xs font-royal tracking-[0.2em] text-[#C5A45C] uppercase">
              SACRED VEDIC TRADITIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] font-normal mt-1">
              The Meaning Behind Our Rites
            </h3>
          </div>

          {/* Ritual Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {rituals.map((r, idx) => (
              <button
                key={r.title}
                onClick={() => setActiveRitual(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-royal uppercase tracking-wider transition-all border ${
                  activeRitual === idx
                    ? 'bg-[#C5A45C] text-[#301D1B] border-[#C5A45C] font-bold shadow-md scale-105'
                    : 'bg-[#3A1017]/80 text-[#D8C49A] border-[#C5A45C]/30 hover:border-[#C5A45C]'
                }`}
              >
                <span className="mr-1.5">{r.icon}</span>
                {r.title}
              </button>
            ))}
          </div>

          {/* Active Ritual Card */}
          <motion.div
            key={activeRitual}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-[#380E15]/90 border border-[#C5A45C]/50 rounded-2xl p-6 sm:p-8 text-center shadow-luxury"
          >
            <div className="text-4xl mb-3">{rituals[activeRitual].icon}</div>
            <h4 className="text-2xl font-royal font-bold text-gold-shimmer mb-1">
              {rituals[activeRitual].title}
            </h4>
            <p className="text-xs uppercase tracking-widest text-[#D8C49A] font-serif mb-4">
              {rituals[activeRitual].sub}
            </p>
            <p className="text-sm font-serif text-[#EEE5D7] leading-relaxed">
              {rituals[activeRitual].desc}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

