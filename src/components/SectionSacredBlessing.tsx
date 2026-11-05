import React from 'react';
import { motion } from 'framer-motion';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionSacredBlessing: React.FC = () => {
  return (
    <section 
      id="sacred-invitation" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#2E0E14] via-[#45151D] to-[#250B10] overflow-hidden"
    >
      {/* Decorative lace backdrop */}
      <div className="absolute inset-0 lace-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Sacred Shloka Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xs sm:text-sm font-royal tracking-[0.3em] text-[#D8C49A] uppercase mb-2">
            ॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥
          </p>
          <p className="text-xs text-[#EEE5D7]/75 font-serif italic">
            "Mangalam Bhagavan Vishnuh, Mangalam Garudadhwajah"
          </p>
          
          <OrnamentalDivider variant="lotus" className="my-6" />
        </motion.div>

        {/* Formal Invitation Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-[#301015]/90 border-2 border-[#C5A45C]/50 rounded-3xl p-8 sm:p-14 shadow-2xl relative"
        >
          {/* Subtle antique gold corner decors */}
          <div className="absolute top-4 left-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute top-4 right-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute bottom-4 left-4 text-[#C5A45C] text-sm">✦</div>
          <div className="absolute bottom-4 right-4 text-[#C5A45C] text-sm">✦</div>

          <h3 className="text-xs sm:text-sm font-royal tracking-[0.25em] text-[#C5A45C] uppercase mb-4">
            THE SACRED UNION
          </h3>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#FAF7F2] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            "With immense joy and the blessings of our families, we invite you to join us in celebrating the sacred union of <span className="text-gold-shimmer font-medium">Sneha</span> and <span className="text-gold-shimmer font-medium">Sooraj</span>."
          </p>

          <p className="text-xs sm:text-sm text-[#EEE5D7]/85 font-serif italic max-w-lg mx-auto mb-10 leading-relaxed">
            As two souls pledge their lives in sacred dharma, love, and companionship, your presence, prayers, and heartfelt blessings will sanctify our new journey.
          </p>

          {/* Radha Krishna Classical Masterpiece Artwork */}
          <div className="relative max-w-md mx-auto">
            {/* Ornate Arch Frame */}
            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#C5A45C] shadow-luxury p-1.5 bg-gradient-to-b from-[#C5A45C]/40 via-[#641F2B] to-[#301015]">
              <div className="rounded-t-full rounded-b-xl overflow-hidden aspect-[4/5.2] relative group">
                <img
                  src="/images/radha_krishna.jpg"
                  alt="Divine Radha Krishna Auspicious Wedding Blessing"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle divine lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#250B10]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 inset-x-4 text-center">
                  <p className="text-xs font-royal tracking-[0.2em] text-[#FFF4D9] uppercase drop-shadow">
                    ॥ राधा कृष्ण प्रेम शाश्वतम् ॥
                  </p>
                  <p className="text-[10px] text-[#D8C49A] font-serif italic mt-0.5">
                    "Eternal Divine Love & Blessings"
                  </p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

