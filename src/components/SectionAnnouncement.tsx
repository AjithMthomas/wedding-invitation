import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionAnnouncement: React.FC = () => {
  return (
    <section 
      id="wedding-announcement" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#2A0E13] via-[#45151D] to-[#301015] overflow-hidden"
    >
      {/* Background Lace & Paper Texture */}
      <div className="absolute inset-0 lace-pattern opacity-10 pointer-events-none" />

      {/* Subtle Antique Gold Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(20,6,8,0.7)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Sacred Announcement Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#301015]/80 border border-[#C5A45C]/40 text-[#D8C49A] text-xs uppercase tracking-[0.25em] font-royal mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#C5A45C] text-[#C5A45C]" />
            <span>Sacred Matrimony</span>
            <Heart className="w-3.5 h-3.5 fill-[#C5A45C] text-[#C5A45C]" />
          </div>

          <p className="text-sm sm:text-base font-serif italic text-[#EEE5D7] tracking-wider mb-2">
            With the blessings of our families
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FAF7F2] font-light max-w-xl mx-auto leading-relaxed">
            "Two hearts, one beautiful journey."
          </h2>

          <OrnamentalDivider variant="kalash" className="my-5" />
        </motion.div>

        {/* Couple Names Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="my-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-royal font-bold text-gold-shimmer tracking-wide">
            Sneha Dilip
          </h1>
          <div className="flex items-center justify-center my-2 gap-4">
            <span className="w-12 h-[1px] bg-[#C5A45C]/40" />
            <span className="text-3xl sm:text-4xl font-script text-[#D8C49A]">&</span>
            <span className="w-12 h-[1px] bg-[#C5A45C]/40" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-royal font-bold text-gold-shimmer tracking-wide">
            Sooraj
          </h1>
        </motion.div>

        {/* Featured Couple Archival Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 sm:mt-12 relative max-w-2xl mx-auto"
        >
          {/* Ornate Gold Frame Behind */}
          <div className="absolute -inset-2.5 sm:-inset-3 rounded-2xl border-2 border-[#C5A45C]/50 bg-gradient-to-b from-[#641F2B]/40 to-transparent blur-[1px]" />
          <div className="absolute -inset-1 rounded-xl border border-[#D8C49A]/30 pointer-events-none" />

          {/* Corner Flourishes */}
          <div className="absolute -top-3 -left-3 text-[#C5A45C] text-lg select-none">✦</div>
          <div className="absolute -top-3 -right-3 text-[#C5A45C] text-lg select-none">✦</div>
          <div className="absolute -bottom-3 -left-3 text-[#C5A45C] text-lg select-none">✦</div>
          <div className="absolute -bottom-3 -right-3 text-[#C5A45C] text-lg select-none">✦</div>

          {/* Photo Container */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] shadow-luxury border border-[#C5A45C]/60 group">
            <img
              src="/images/couple/couple_1.jpeg"
              alt="Sneha and Sooraj"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle Warm Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#301015] via-transparent to-transparent opacity-60" />

            {/* Bottom Caption */}
            <div className="absolute bottom-4 inset-x-4 text-center">
              <p className="text-xs sm:text-sm font-serif italic text-[#FFF4D9] tracking-wider drop-shadow-md">
                "Bound by sacred love, blessed for eternity"
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

