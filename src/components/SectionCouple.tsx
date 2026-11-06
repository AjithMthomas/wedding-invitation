import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionCouple: React.FC = () => {
  return (
    <section 
      id="couple-introduction" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#301015] overflow-hidden"
    >
      {/* Background Subtle Burgundy Silk Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-color-dodge pointer-events-none"
        style={{ backgroundImage: `url('/images/burgundy_lace_texture.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#301015] via-transparent to-[#2E0E14] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-royal tracking-[0.25em] text-[#D8C49A] uppercase mb-2">
            THE CELEBRATION OF TWO SOULS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            Meet the Bride & Groom
          </h2>
          <OrnamentalDivider variant="simple" className="my-4" />
          <p className="text-sm font-serif italic text-[#EEE5D7]/80 max-w-lg mx-auto">
            "In each other, they found not just love, but a shared soul, endless laughter, and a lifetime of devotion."
          </p>
        </div>

        {/* Editorial Couple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* BRIDE: Sneha Dilip */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            {/* Portrait Frame */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border border-[#C5A45C]/50 group mb-6">
              <img
                src="/images/couple/couple_2.jpeg"
                alt="Sneha Dilip - The Bride"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E0E14] via-transparent to-transparent opacity-50" />
              <div className="absolute top-3 left-3 text-[#C5A45C] text-xs font-serif opacity-80">✦</div>
              <div className="absolute bottom-3 right-3 text-[#C5A45C] text-xs font-serif opacity-80">✦</div>
            </div>

            {/* Bride Details */}
            <div className="max-w-sm">
              <span className="text-xs font-royal uppercase tracking-[0.2em] text-[#C5A45C] flex items-center justify-center md:justify-end gap-1.5 mb-1">
                <Sparkles className="w-3 h-3 text-[#C5A45C]" />
                The Bride
              </span>
              <h3 className="text-3xl sm:text-4xl font-royal font-bold text-gold-shimmer mb-2">
                Sneha D
              </h3>
              <p className="text-sm font-serif text-[#EEE5D7] leading-relaxed italic">
                Graceful, gentle, and radiant with quiet strength. A cherished daughter stepping forward with joy into a sacred new chapter of life.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* GROOM: Sooraj V */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Portrait Frame */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border border-[#C5A45C]/50 group mb-6">
              <img
                src="/images/couple/couple_3.jpeg"
                alt="Sooraj V - The Groom"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E0E14] via-transparent to-transparent opacity-50" />
              <div className="absolute top-3 right-3 text-[#C5A45C] text-xs font-serif opacity-80">✦</div>
              <div className="absolute bottom-3 left-3 text-[#C5A45C] text-xs font-serif opacity-80">✦</div>
            </div>

            {/* Groom Details */}
            <div className="max-w-sm">
              <span className="text-xs font-royal uppercase tracking-[0.2em] text-[#C5A45C] flex items-center justify-center md:justify-start gap-1.5 mb-1">
                The Groom
                <Sparkles className="w-3 h-3 text-[#C5A45C]" />
              </span>
              <h3 className="text-3xl sm:text-4xl font-royal font-bold text-gold-shimmer mb-2">
                Sooraj V
              </h3>
              <p className="text-sm font-serif text-[#EEE5D7] leading-relaxed italic">
                Steadfast, kind-hearted, and driven by love. A devoted son and loving partner eager to build a life of shared dreams and happiness.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Candid Shared Memory Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-24 max-w-4xl mx-auto bg-gradient-to-r from-[#45151D]/80 via-[#641F2B]/70 to-[#45151D]/80 rounded-2xl border border-[#C5A45C]/40 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#C5A45C] shadow-lg shrink-0">
            <img
              src="/images/couple/couple_4.jpeg"
              alt="Sneha and Sooraj Together"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-royal tracking-widest text-[#D8C49A] uppercase">
              A LOVE WRITTEN IN THE STARS
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2] font-normal my-2">
              "Together, life is a sweeter melody."
            </h4>
            <p className="text-xs sm:text-sm font-serif text-[#EEE5D7]/85 leading-relaxed">
              Every step leading up to this sacred day has been a testament to patience, laughter, and family blessings. We cannot wait to celebrate this milestone surrounded by the people who mean the world to us.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

