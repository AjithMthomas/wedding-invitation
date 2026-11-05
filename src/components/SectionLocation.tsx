import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Share2, ExternalLink } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionLocation: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  // Editable placeholders
  const venueName = '[ADD VENUE]';
  const venueAddress = '[ADD VENUE ADDRESS]';

  const handleCopy = () => {
    navigator.clipboard.writeText(`${venueName}, ${venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent(`${venueName} ${venueAddress}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const inviteUrl = `${window.location.origin}/sooraj-shena-invitation`;
    const text = encodeURIComponent(
      `🕉️ Wedding Invitation: Sneha Dilip & Sooraj\nWith the blessings of our families, you are cordially invited to celebrate our wedding!\nVenue: ${venueName}, ${venueAddress}\nView invitation online: ${inviteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section 
      id="wedding-location" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#2D0D14] via-[#20080D] to-[#1A060A] overflow-hidden"
    >
      {/* Background Lace & Paper Texture */}
      <div className="absolute inset-0 lace-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-royal tracking-[0.25em] text-[#D8C49A] uppercase mb-2">
            HOW TO REACH US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            Venue & Directions
          </h2>
          <OrnamentalDivider variant="kalash" className="my-4" />
          <p className="text-xs sm:text-sm font-serif italic text-[#EEE5D7]/80">
            Find your way to our celebration with ease. We eagerly await your gracious arrival.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Venue Information & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-gradient-to-b from-[#3A1017] via-[#45151D] to-[#2E0E14] border-2 border-[#C5A45C]/50 rounded-2xl p-6 sm:p-10 shadow-luxury"
          >
            <div className="flex items-center gap-2 text-[#C5A45C] text-xs font-royal tracking-widest uppercase mb-4">
              <MapPin className="w-4 h-4" />
              <span>CELEBRATION DESTINATION</span>
            </div>

            <h3 className="text-3xl font-royal font-bold text-gold-shimmer mb-2">
              {venueName}
            </h3>

            <p className="text-sm font-serif text-[#FAF7F2] italic mb-6 leading-relaxed">
              {venueAddress}
            </p>

            <div className="h-[1px] w-full bg-[#C5A45C]/20 mb-6" />

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Google Maps Directions CTA */}
              <button
                onClick={openGoogleMaps}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Get Directions On Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </button>

              {/* Copy Address Button */}
              <button
                onClick={handleCopy}
                className="w-full py-3 px-6 rounded-xl bg-[#250B10] hover:bg-[#350E17] border border-[#C5A45C]/40 text-[#D8C49A] font-royal text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Address Copied To Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Venue Address</span>
                  </>
                )}
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={shareOnWhatsApp}
                className="w-full py-3 px-6 rounded-xl bg-[#1F4B34]/60 hover:bg-[#1F4B34] border border-[#25D366]/40 text-[#F8F4EC] font-royal text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4 text-[#25D366]" />
                <span>Share Invitation On WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Stylized Royal Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C5A45C]/60 shadow-2xl bg-[#1A060A] group"
          >
            {/* Map visual representation with antique gold grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#C5A45C_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
            
            {/* Road/river stylized graphic overlay */}
            <svg className="absolute inset-0 w-full h-full stroke-[#C5A45C]/30 fill-none" viewBox="0 0 400 300">
              <path d="M0 150 Q100 80 200 150 T400 150" strokeWidth="3" />
              <path d="M120 0 Q150 120 200 150 T280 300" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="200" cy="150" r="40" stroke="#C5A45C" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" style={{ animationDuration: '30s' }} />
            </svg>

            {/* Glowing Map Pin in Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-[#641F2B] border-2 border-[#C5A45C] shadow-gold-glow flex items-center justify-center text-white">
                  <MapPin className="w-7 h-7 text-[#FFF4D9] animate-bounce" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/60 rounded-full blur-xs" />
              </div>
              <div className="mt-3 px-3 py-1 rounded-full bg-[#45151D]/95 border border-[#C5A45C] text-[11px] font-royal text-gold-shimmer shadow-lg whitespace-nowrap">
                {venueName}
              </div>
            </div>

            {/* Map corner label */}
            <div className="absolute bottom-3 left-3 bg-[#1A060A]/90 px-3 py-1 rounded-md border border-[#C5A45C]/30 text-[10px] text-[#D8C49A] font-serif">
              ✦ GPS Navigation & Directions Active
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

