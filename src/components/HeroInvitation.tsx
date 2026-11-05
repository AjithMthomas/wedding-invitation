import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { OrnamentalDivider } from './OrnamentalDivider';

interface HeroInvitationProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const HeroInvitation: React.FC<HeroInvitationProps> = ({ isOpen, onOpen }) => {
  const [isCracking, setIsCracking] = useState<boolean>(false);
  const [sealParticles, setSealParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleOpenCard = () => {
    if (isOpen || isCracking) return;

    // Trigger cracking sound & animation
    setIsCracking(true);
    audioEngine.playSealCrack();

    // Generate gold spark burst
    const particles = Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      const dist = Math.random() * 80 + 40;
      return {
        id: i,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      };
    });
    setSealParticles(particles);

    // After brief crack delay, open the flaps and play temple bell
    setTimeout(() => {
      audioEngine.playTempleBell();
      onOpen();
      setIsCracking(false);
    }, 450);
  };

  const scrollToNext = () => {
    const el = document.getElementById('wedding-announcement');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden bg-[#2A0E13]">
      {/* Background: Ivory Lace on Textured Burgundy Surface */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/images/burgundy_lace_bg.jpg')` }}
      />

      {/* Decorative ambient lace borders */}
      <div className="absolute inset-0 z-0 pointer-events-none border-[12px] sm:border-[20px] border-[#EEE5D7]/10" />
      <div className="absolute inset-4 sm:inset-8 z-0 pointer-events-none border border-[#C5A45C]/30" />

      {/* 3D Scene Wrapper */}
      <div className="relative z-10 w-full max-w-xl md:max-w-2xl perspective-2000 py-6">
        
        {/* Main Invitation Card Container */}
        <div 
          className="relative w-full aspect-[4/5.2] sm:aspect-[4/5] rounded-xl shadow-2xl preserve-3d transition-transform duration-1000 ease-out"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(197, 164, 92, 0.25)',
          }}
        >
          {/* ========================================================= */}
          {/* INNER CARD (Revealed when flaps open) */}
          {/* ========================================================= */}
          <div className="absolute inset-0 bg-[#45151D] border-2 border-[#C5A45C]/60 rounded-xl overflow-hidden flex flex-col items-center justify-between p-6 sm:p-10 text-center shadow-inner">
            {/* Inner subtle lace backdrop */}
            <div className="absolute inset-0 lace-pattern opacity-15 pointer-events-none" />

            {/* Inner Ornamental Border */}
            <div className="absolute inset-3 border border-[#C5A45C]/40 rounded-lg pointer-events-none flex flex-col justify-between p-2">
              <div className="flex justify-between text-[#C5A45C]/70 text-xs font-serif">
                <span>✦</span>
                <span>✦</span>
              </div>
              <div className="flex justify-between text-[#C5A45C]/70 text-xs font-serif">
                <span>✦</span>
                <span>✦</span>
              </div>
            </div>

            {/* Top: Sacred Ganesha Emblem */}
            <div className="relative z-10 flex flex-col items-center pt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C5A45C]/60 p-1 shadow-lg bg-[#301015]/80 overflow-hidden mb-2">
                <img
                  src="/images/ganesha_gold.jpg"
                  alt="Lord Ganesha Auspicious Blessing"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#D8C49A] uppercase font-royal">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <p className="text-[10px] text-[#EEE5D7]/75 font-serif italic mt-0.5">
                Om Shri Ganeshaya Namaha
              </p>
            </div>

            {/* Middle: Couple Names & Invitation Verse */}
            <div className="relative z-10 my-auto py-2">
              <p className="text-xs sm:text-sm font-serif tracking-widest text-[#EEE5D7] uppercase mb-1">
                Together with their families
              </p>
              
              <OrnamentalDivider variant="lotus" className="my-2" />

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-royal font-bold text-gold-shimmer my-1">
                Sneha Dilip
              </h1>
              <p className="text-xl sm:text-2xl font-script text-[#D8C49A] my-0.5">&</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-royal font-bold text-gold-shimmer mb-3">
                Sooraj
              </h1>

              <p className="text-xs sm:text-sm text-[#F8F4EC]/90 font-serif max-w-md mx-auto leading-relaxed italic px-2">
                Cordially invite you to share in the celebration of their wedding as they unite in sacred matrimony.
              </p>
            </div>

            {/* Bottom: Date hint & Scroll trigger button */}
            <div className="relative z-10 pb-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301015]/90 border border-[#C5A45C]/40 text-[#D8C49A] text-xs font-serif mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A45C]" />
                <span>Sacred Hindu Wedding Celebration</span>
              </div>

              <div>
                <button
                  onClick={scrollToNext}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F8F4EC] hover:text-[#C5A45C] transition-colors group font-royal"
                >
                  <span>Explore Wedding Invitation</span>
                  <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A45C] group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* LEFT GATEFOLD FLAP */}
          {/* ========================================================= */}
          <motion.div
            initial={false}
            animate={{
              rotateY: isOpen ? -115 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.25, 1, 0.5, 1], // Custom luxury cubic-bezier easing
            }}
            style={{ transformOrigin: 'left center' }}
            className="absolute top-0 left-0 w-1/2 h-full z-20 preserve-3d pointer-events-none rounded-l-xl overflow-hidden"
          >
            <div className="relative w-full h-full bg-gradient-to-r from-[#3A1017] via-[#641F2B] to-[#45151D] border-l-2 border-y-2 border-r border-[#C5A45C]/70 shadow-2xl flex flex-col justify-between p-4 sm:p-6">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 paper-texture opacity-90" />
              {/* Lace border edge */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#C5A45C]/30 to-transparent" />

              {/* Inner ornamental lines */}
              <div className="relative z-10 flex justify-between text-[#C5A45C]/50 text-xs">
                <span>❧</span>
              </div>
              <div className="relative z-10 text-center font-royal text-[#D8C49A]/80 text-[10px] sm:text-xs tracking-[0.2em] uppercase writing-vertical">
                TOGETHER WITH OUR FAMILIES
              </div>
              <div className="relative z-10 flex justify-between text-[#C5A45C]/50 text-xs">
                <span>❧</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT GATEFOLD FLAP */}
          {/* ========================================================= */}
          <motion.div
            initial={false}
            animate={{
              rotateY: isOpen ? 115 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{ transformOrigin: 'right center' }}
            className="absolute top-0 right-0 w-1/2 h-full z-20 preserve-3d pointer-events-none rounded-r-xl overflow-hidden"
          >
            <div className="relative w-full h-full bg-gradient-to-l from-[#3A1017] via-[#641F2B] to-[#45151D] border-r-2 border-y-2 border-l border-[#C5A45C]/70 shadow-2xl flex flex-col justify-between p-4 sm:p-6">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 paper-texture opacity-90" />
              {/* Lace border edge */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#C5A45C]/30 to-transparent" />

              {/* Inner ornamental lines */}
              <div className="relative z-10 flex justify-end text-[#C5A45C]/50 text-xs">
                <span>☙</span>
              </div>
              <div className="relative z-10 text-center font-royal text-[#D8C49A]/80 text-[10px] sm:text-xs tracking-[0.2em] uppercase writing-vertical">
                SNEHA & SOORAJ
              </div>
              <div className="relative z-10 flex justify-end text-[#C5A45C]/50 text-xs">
                <span>☙</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER WAX SEAL & INTERACTIVE CTA */}
          {/* ========================================================= */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: isCracking ? 1.08 : 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 1.4,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none"
                onClick={handleOpenCard}
              >
                {/* Subtle Invitation Teaser Above Seal */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="mb-4 text-center px-4"
                >
                  <p className="text-[11px] sm:text-xs font-serif tracking-[0.25em] text-[#EEE5D7] uppercase drop-shadow">
                    Together with their families
                  </p>
                  <p className="text-[12px] sm:text-sm font-royal text-gold-shimmer tracking-wider mt-0.5">
                    We cordially invite you to celebrate our wedding
                  </p>
                </motion.div>

                {/* The Circular Wax Seal with S & S Monogram */}
                <div className="relative group">
                  {/* Glowing gold back aura */}
                  <div className="absolute -inset-3 rounded-full bg-[#C5A45C]/25 blur-md group-hover:bg-[#C5A45C]/40 transition-all duration-500 animate-pulse-slow" />

                  {/* Wax Seal Image Container */}
                  <div 
                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-[#C5A45C] shadow-wax-seal overflow-hidden transition-transform duration-300 group-hover:scale-105 active:scale-95 bg-[#45151D]"
                  >
                    <img
                      src="/images/royal_wax_seal.jpg"
                      alt="Antique Gold Wax Seal Monogram"
                      className="w-full h-full object-cover filter contrast-110 drop-shadow"
                    />

                    {/* Crack effect overlay when clicking */}
                    {isCracking && (
                      <div className="absolute inset-0 bg-[#FFF4D9]/40 mix-blend-overlay animate-ping" />
                    )}
                  </div>

                  {/* Gold spark burst particles */}
                  {sealParticles.map((pt) => (
                    <motion.div
                      key={pt.id}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{ x: pt.x, y: pt.y, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#FFF4D9] shadow-gold-glow pointer-events-none"
                    />
                  ))}
                </div>

                {/* Primary CTA Button: "OPEN INVITATION" */}
                <motion.div 
                  className="mt-6 flex flex-col items-center"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                >
                  <button
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#641F2B] via-[#45151D] to-[#641F2B] border-2 border-[#C5A45C] text-[#FFF4D9] font-royal text-xs sm:text-sm tracking-[0.2em] uppercase shadow-luxury hover:bg-[#852B3A] transition-all flex items-center gap-2 group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A45C] group-hover:rotate-180 transition-transform duration-500" />
                    <span>OPEN INVITATION</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A45C] group-hover:rotate-180 transition-transform duration-500" />
                  </button>

                  <span className="text-[11px] text-[#EEE5D7]/75 font-serif italic mt-2">
                    ✦ Tap to unseal the sacred invitation ✦
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

