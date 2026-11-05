import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Copy, Check } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionFamily: React.FC = () => {
  const [copiedBride, setCopiedBride] = useState<boolean>(false);
  const [copiedGroom, setCopiedGroom] = useState<boolean>(false);

  const copyAddress = (text: string, isBride: boolean) => {
    navigator.clipboard.writeText(text);
    if (isBride) {
      setCopiedBride(true);
      setTimeout(() => setCopiedBride(false), 2500);
    } else {
      setCopiedGroom(true);
      setTimeout(() => setCopiedGroom(false), 2500);
    }
  };

  const brideAddress = `#24 Satish Nilayam,\n12th Main, 3rd Cross,\nMathikere,\nBangalore – 560054.`;
  const groomAddress = `Prasad Nivas,\nVilayachathure,\nVilayanoor (P.O.),\nPalakkad – 678671.`;

  return (
    <section 
      id="family-details" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#250B10] overflow-hidden"
    >
      {/* Background Lace & Paper Motif */}
      <div className="absolute inset-0 lace-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-royal tracking-[0.25em] text-[#D8C49A] uppercase mb-2">
            WITH GRACIOUS BLESSINGS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            Family Lineage
          </h2>
          <OrnamentalDivider variant="kalash" className="my-4" />
          <p className="text-xs sm:text-sm font-serif italic text-[#EEE5D7]/80">
            Honoring the roots that nurtured and guided us to this blessed union.
          </p>
        </div>

        {/* Dual Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ========================================================= */}
          {/* BRIDE'S FAMILY */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-b from-[#3A1017] via-[#45151D] to-[#301015] border-2 border-[#C5A45C]/50 rounded-2xl p-6 sm:p-10 shadow-luxury flex flex-col justify-between"
          >
            {/* Top Ornamental Badge */}
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#301015] border border-[#C5A45C]/60 text-xs font-royal tracking-[0.2em] text-[#D8C49A] uppercase mb-4">
                BRIDE
              </span>

              <h3 className="text-3xl sm:text-4xl font-royal font-bold text-gold-shimmer mb-3">
                Sneha Dilip
              </h3>

              <p className="text-xs uppercase tracking-widest text-[#EEE5D7]/70 font-sans mb-1">
                Daughter of
              </p>

              <div className="my-3 py-2 border-y border-[#C5A45C]/20">
                <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium">
                  Mrs. Beena Dilip Kumar
                </p>
                <p className="text-sm font-serif text-[#D8C49A] my-0.5">&</p>
                <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium">
                  Mr. Dilip Kumar V S
                </p>
              </div>
            </div>

            {/* Address Box */}
            <div className="mt-6 pt-5 border-t border-[#C5A45C]/30 bg-[#250B10]/60 rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-royal text-[#C5A45C] flex items-center gap-1.5 uppercase tracking-wider">
                  <Home className="w-3.5 h-3.5 text-[#C5A45C]" />
                  Address
                </span>
                <button
                  onClick={() => copyAddress(brideAddress, true)}
                  className="text-[11px] text-[#D8C49A] hover:text-[#FFF4D9] flex items-center gap-1 transition-colors"
                  title="Copy address"
                >
                  {copiedBride ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm font-serif text-[#EEE5D7] leading-relaxed whitespace-pre-line pl-1">
                #24 Satish Nilayam,
                12th Main, 3rd Cross,
                Mathikere,
                Bangalore – 560054.
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* GROOM'S FAMILY */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-b from-[#3A1017] via-[#45151D] to-[#301015] border-2 border-[#C5A45C]/50 rounded-2xl p-6 sm:p-10 shadow-luxury flex flex-col justify-between"
          >
            {/* Top Ornamental Badge */}
            <div className="text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#301015] border border-[#C5A45C]/60 text-xs font-royal tracking-[0.2em] text-[#D8C49A] uppercase mb-4">
                GROOM
              </span>

              <h3 className="text-3xl sm:text-4xl font-royal font-bold text-gold-shimmer mb-3">
                Sooraj
              </h3>

              <p className="text-xs uppercase tracking-widest text-[#EEE5D7]/70 font-sans mb-1">
                Son of
              </p>

              <div className="my-3 py-2 border-y border-[#C5A45C]/20">
                <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium">
                  Mr. Raja Kesava Das V
                </p>
                <p className="text-sm font-serif text-[#D8C49A] my-0.5">&</p>
                <p className="text-lg sm:text-xl font-serif text-[#FAF7F2] font-medium">
                  Mrs. Pushkala V
                </p>
              </div>
            </div>

            {/* Address Box */}
            <div className="mt-6 pt-5 border-t border-[#C5A45C]/30 bg-[#250B10]/60 rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-royal text-[#C5A45C] flex items-center gap-1.5 uppercase tracking-wider">
                  <Home className="w-3.5 h-3.5 text-[#C5A45C]" />
                  Address
                </span>
                <button
                  onClick={() => copyAddress(groomAddress, false)}
                  className="text-[11px] text-[#D8C49A] hover:text-[#FFF4D9] flex items-center gap-1 transition-colors"
                  title="Copy address"
                >
                  {copiedGroom ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm font-serif text-[#EEE5D7] leading-relaxed whitespace-pre-line pl-1">
                Prasad Nivas,
                Vilayachathure,
                Vilayanoor (P.O.),
                Palakkad – 678671.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

