import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Share2, ExternalLink } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const SectionLocation: React.FC = () => {
  const [copiedWedding, setCopiedWedding] = useState<boolean>(false);
  const [copiedReception, setCopiedReception] = useState<boolean>(false);

  const weddingVenue = {
    title: 'Marriage Ceremony Venue',
    name: 'Guruvayur Sree Krishna Temple',
    address: 'Guruvayur, Thrissur District, Kerala – 680101',
    date: '18 April 2027 • 10:00 AM',
    query: 'Guruvayur+Sree+Krishna+Temple',
  };

  const receptionVenue = {
    title: 'Wedding Reception Venue',
    name: 'Top In Town',
    address: 'Opp. K.S.R.T.C Bus Stand, Palakkad, Keralam – 678014',
    date: '20 April 2027 • 5:00 PM – 9:00 PM',
    query: 'Top+In+Town+Opp+KSRTC+Bus+Stand+Palakkad+Keralam+678014',
  };

  const handleCopy = (address: string, isWedding: boolean) => {
    navigator.clipboard.writeText(address);
    if (isWedding) {
      setCopiedWedding(true);
      setTimeout(() => setCopiedWedding(false), 2500);
    } else {
      setCopiedReception(true);
      setTimeout(() => setCopiedReception(false), 2500);
    }
  };

  const openGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const inviteUrl = `${window.location.origin}/sooraj-shena-invitation`;
    const text = encodeURIComponent(
      `🕉️ Wedding Invitation: Sneha D & Sooraj V\n\n` +
      `With the blessings of our families, you are cordially invited to celebrate our wedding!\n\n` +
      `🌸 Marriage Ceremony:\n📅 18 April 2027 (10:00 AM)\n📍 Guruvayur Sree Krishna Temple, Kerala\n\n` +
      `🎉 Grand Reception:\n📅 20 April 2027 (5:00 PM – 9:00 PM)\n📍 Top In Town, Opp. K.S.R.T.C Bus Stand, Palakkad\n\n` +
      `View our digital invitation here:\n${inviteUrl}`
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

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-royal tracking-[0.25em] text-[#D8C49A] uppercase mb-2">
            DESTINATION & DIRECTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF7F2] font-normal">
            Locations & Maps
          </h2>
          <OrnamentalDivider variant="kalash" className="my-4" />
          <p className="text-xs sm:text-sm font-serif italic text-[#EEE5D7]/80">
            Directions to both our sacred marriage ceremony at Guruvayur Temple and grand reception at Palakkad.
          </p>
        </div>

        {/* Dual Venue Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          
          {/* ========================================================= */}
          {/* VENUE 1: GURUVAYUR TEMPLE */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#3A1017] via-[#45151D] to-[#2E0E14] border-2 border-[#C5A45C]/50 rounded-2xl p-6 sm:p-8 shadow-luxury flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-royal text-[#C5A45C] flex items-center gap-1.5 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C5A45C]" />
                  {weddingVenue.title}
                </span>
                <span className="text-[11px] font-serif text-[#D8C49A]">
                  {weddingVenue.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-royal font-bold text-gold-shimmer mb-2">
                {weddingVenue.name}
              </h3>

              <p className="text-sm font-serif text-[#FAF7F2] italic mb-6 leading-relaxed">
                {weddingVenue.address}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#C5A45C]/25">
              <button
                onClick={() => openGoogleMaps(weddingVenue.query)}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Directions to Guruvayur</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </button>

              <button
                onClick={() => handleCopy(`${weddingVenue.name}, ${weddingVenue.address}`, true)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#250B10] hover:bg-[#350E17] border border-[#C5A45C]/40 text-[#D8C49A] font-royal text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {copiedWedding ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Temple Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* VENUE 2: TOP IN TOWN, PALAKKAD */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-[#3A1017] via-[#45151D] to-[#2E0E14] border-2 border-[#C5A45C]/50 rounded-2xl p-6 sm:p-8 shadow-luxury flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-royal text-[#C5A45C] flex items-center gap-1.5 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C5A45C]" />
                  {receptionVenue.title}
                </span>
                <span className="text-[11px] font-serif text-[#D8C49A]">
                  {receptionVenue.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-royal font-bold text-gold-shimmer mb-2">
                {receptionVenue.name}
              </h3>

              <p className="text-sm font-serif text-[#FAF7F2] italic mb-6 leading-relaxed">
                {receptionVenue.address}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#C5A45C]/25">
              <button
                onClick={() => openGoogleMaps(receptionVenue.query)}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#C5A45C] via-[#D8C49A] to-[#C5A45C] text-[#301D1B] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Directions to Palakkad</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </button>

              <button
                onClick={() => handleCopy(`${receptionVenue.name}, ${receptionVenue.address}`, false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#250B10] hover:bg-[#350E17] border border-[#C5A45C]/40 text-[#D8C49A] font-royal text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {copiedReception ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Reception Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Global WhatsApp Share CTA */}
        <div className="max-w-md mx-auto text-center">
          <button
            onClick={shareOnWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl bg-[#1F4B34]/80 hover:bg-[#1F4B34] border border-[#25D366]/40 text-[#F8F4EC] font-royal text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4 text-[#25D366]" />
            <span>Forward Invitation On WhatsApp</span>
          </button>
          <p className="text-[11px] text-[#EEE5D7]/60 font-serif italic mt-2">
            Share venue details & schedule with relatives and friends
          </p>
        </div>

      </div>
    </section>
  );
};
