import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Flame, PartyPopper } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionCeremony: React.FC = () => {
  const [activeRitual, setActiveRitual] = useState<number>(0);

  const rituals = [
    {
      title: 'Shri Ganesh Puja',
      sub: 'Invoking Auspicious Blessings',
      desc: 'The sacred ceremonies commence with heartfelt prayers to Lord Ganesha, the remover of all obstacles, seeking divine grace, prosperity, and harmony for Sneha & Sooraj.',
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
      sub: 'The Tying of the Holy Thali',
      desc: 'The supreme sacred moment where the groom ties the auspicious Mangalsutra / Thali, accompanied by the joyous shower of Akshata and resonant temple chimes at Guruvayur.',
      icon: '📿',
    },
    {
      title: 'Saptapadi',
      sub: 'The Seven Sacred Steps',
      desc: 'Circling the consecrated Agni fire, the couple takes sacred vows of lifelong friendship, spiritual dharma, abundance, health, and eternal togetherness.',
      icon: '🔥',
    },
  ];

  const handleAddWeddingToCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sneha and Sooraj Wedding//EN',
      'BEGIN:VEVENT',
      'UID:wedding-ceremony-sneha-sooraj-20270418',
      'DTSTAMP:20270418T043000Z',
      'DTSTART:20270418T043000Z',
      'DTEND:20270418T073000Z',
      'SUMMARY:Sneha D & Sooraj V — Sacred Wedding Ceremony',
      'DESCRIPTION:Sacred Hindu Wedding Ceremony (Muhurtham at 10:00 AM) of Sneha D & Sooraj V at the divine sanctum of Guruvayur Sree Krishna Temple.',
      'LOCATION:Guruvayur Sree Krishna Temple, Guruvayur, Kerala',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    downloadIcs(icsData, 'Sneha_Sooraj_Wedding_Ceremony.ics');
  };

  const handleAddReceptionToCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sneha and Sooraj Reception//EN',
      'BEGIN:VEVENT',
      'UID:wedding-reception-sneha-sooraj-20270420',
      'DTSTAMP:20270420T113000Z',
      'DTSTART:20270420T113000Z',
      'DTEND:20270420T153000Z',
      'SUMMARY:Sneha D & Sooraj V — Grand Wedding Reception',
      'DESCRIPTION:Grand Wedding Reception celebrating Sneha D & Sooraj V from 5:00 PM to 9:00 PM at Top In Town, Opp. K.S.R.T.C Bus Stand, Palakkad, Kerala.',
      'LOCATION:Top In Town, Opp. K.S.R.T.C Bus Stand, Palakkad, Keralam 678014',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    downloadIcs(icsData, 'Sneha_Sooraj_Wedding_Reception.ics');
  };

  const downloadIcs = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', filename);
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

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#45151D] border border-[#C5A45C]/50 text-xs font-royal tracking-[0.2em] text-[#D8C49A] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C5A45C] animate-pulse" />
            <span>Auspicious Celebrations</span>
            <Flame className="w-3.5 h-3.5 text-[#C5A45C] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            Ceremony & Reception
          </h2>
          <OrnamentalDivider variant="lotus" className="my-4" />
          <p className="text-xs sm:text-sm font-serif italic text-[#EEE5D7]/80">
            Blessed vows taken at Guruvayur Temple, followed by an evening of joy and feasting with family and friends.
          </p>
        </div>

        {/* Dual Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* ========================================================= */}
          {/* EVENT 1: SACRED MARRIAGE CEREMONY */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#45151D] via-[#351017] to-[#250B10] border-2 border-[#C5A45C]/70 rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#641F2B] border border-[#C5A45C]/60 text-[11px] font-royal tracking-widest text-[#FFF4D9] uppercase">
                  <Flame className="w-3 h-3 text-[#C5A45C]" />
                  Sacred Muhurtham
                </span>
                <span className="text-xs font-serif text-[#D8C49A] italic">
                  Hindu Vedic Rites
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-royal font-bold text-gold-shimmer mb-6">
                The Marriage Ceremony
              </h3>

              <div className="space-y-5">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <Calendar className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Wedding Date
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-semibold tracking-wide">
                      18 April 2027
                    </p>
                    <p className="text-xs text-[#EEE5D7]/75 font-serif italic">
                      Sunday • Auspicious Day
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Muhurtham Time
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-semibold tracking-wide">
                      10:00 AM
                    </p>
                    <p className="text-xs text-[#EEE5D7]/75 font-serif italic">
                      Morning Auspicious Lagna
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Ceremony Location
                    </span>
                    <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium leading-snug">
                      Guruvayur Sree Krishna Temple
                    </p>
                    <p className="text-xs text-[#EEE5D7]/75 font-serif italic mt-0.5">
                      Guruvayur, Thrissur District, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Add to Calendar CTA */}
            <div className="mt-8 pt-6 border-t border-[#C5A45C]/25">
              <button
                onClick={handleAddWeddingToCalendar}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Save Wedding To Calendar (.ics)</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* EVENT 2: MARRIAGE RECEPTION */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#45151D] via-[#351017] to-[#250B10] border-2 border-[#C5A45C]/70 rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#641F2B] border border-[#C5A45C]/60 text-[11px] font-royal tracking-widest text-[#FFF4D9] uppercase">
                  <PartyPopper className="w-3 h-3 text-[#C5A45C]" />
                  Grand Celebration
                </span>
                <span className="text-xs font-serif text-[#D8C49A] italic">
                  Dinner & Felicitations
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-royal font-bold text-gold-shimmer mb-6">
                Wedding Reception
              </h3>

              <div className="space-y-5">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <Calendar className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Reception Date
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-semibold tracking-wide">
                      20 April 2027
                    </p>
                    <p className="text-xs text-[#EEE5D7]/75 font-serif italic">
                      Tuesday • Evening Celebration
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Reception Time
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#FAF7F2] font-semibold tracking-wide">
                      5:00 PM – 9:00 PM
                    </p>
                    <p className="text-xs text-[#EEE5D7]/75 font-serif italic">
                      Evening Gathering & Feast
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#641F2B] border border-[#C5A45C]/60 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-[#C5A45C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-royal uppercase tracking-widest text-[#D8C49A]">
                      Reception Venue
                    </span>
                    <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium leading-snug">
                      Top In Town
                    </p>
                    <p className="text-xs text-[#EEE5D7]/85 font-serif italic mt-0.5">
                      Opp. K.S.R.T.C Bus Stand, Palakkad, Keralam – 678014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Add to Calendar CTA */}
            <div className="mt-8 pt-6 border-t border-[#C5A45C]/25">
              <button
                onClick={handleAddReceptionToCalendar}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Save Reception To Calendar (.ics)</span>
              </button>
            </div>
          </motion.div>

        </div>

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
