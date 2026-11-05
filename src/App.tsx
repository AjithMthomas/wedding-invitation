import React, { useState, useEffect } from 'react';
import { HeroInvitation } from './components/HeroInvitation';
import { SectionAnnouncement } from './components/SectionAnnouncement';
import { SectionCouple } from './components/SectionCouple';
import { SectionSacredBlessing } from './components/SectionSacredBlessing';
import { SectionFamily } from './components/SectionFamily';
import { SectionCeremony } from './components/SectionCeremony';
import { SectionLocation } from './components/SectionLocation';
import { SectionClosingBlessing } from './components/SectionClosingBlessing';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalsCanvas } from './components/PetalsCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Compass } from 'lucide-react';

export const App: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  // Ensure path is /sooraj-shena-invitation in the URL bar
  useEffect(() => {
    const currentPath = decodeURIComponent(window.location.pathname).replace(/\/+$/, '');
    if (
      currentPath === '' ||
      currentPath === '/' ||
      currentPath === '/sooraj shena invitation' ||
      currentPath === '/sooraj-sneha-invitation'
    ) {
      window.history.replaceState(null, '', '/sooraj-shena-invitation' + window.location.hash);
    }
  }, []);

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  const navLinks = [
    { label: 'Announcement', href: '#wedding-announcement' },
    { label: 'Couple', href: '#couple-introduction' },
    { label: 'Invitation', href: '#sacred-invitation' },
    { label: 'Family', href: '#family-details' },
    { label: 'Ceremony', href: '#wedding-ceremony' },
    { label: 'Location', href: '#wedding-location' },
    { label: 'Blessings', href: '#closing-blessing' },
  ];

  return (
    <div className="relative min-h-screen bg-[#301D1B] text-[#F8F4EC] selection:bg-[#C5A45C] selection:text-[#301D1B] font-serif">
      {/* Custom Luxury Desktop Cursor */}
      <CustomCursor />

      {/* Ambient Falling Petals Shower */}
      <PetalsCanvas />

      {/* Floating Audio Controller (Starts playing after user unseals the invitation) */}
      <AudioPlayer autoStartTrigger={isCardOpen} />

      {/* Floating Quick Navigation (Visible once card is opened) */}
      {isCardOpen && (
        <div className="fixed top-4 left-4 z-40">
          <button
            onClick={() => setShowNav(!showNav)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#45151D]/90 backdrop-blur-md border border-[#C5A45C]/50 text-[#D8C49A] hover:text-[#FFF4D9] text-xs font-royal uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95"
            title="Jump to wedding section"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5A45C]" />
            <span className="hidden sm:inline">Sections</span>
          </button>

          {showNav && (
            <div className="mt-2 bg-[#301015]/95 backdrop-blur-md border border-[#C5A45C]/60 rounded-2xl p-2.5 shadow-2xl flex flex-col gap-1 min-w-[170px] animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setShowNav(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-royal uppercase tracking-wider text-[#EEE5D7] hover:bg-[#641F2B] hover:text-gold-shimmer transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* HERO SECTION — 3D PHYSICAL INVITATION EXPERIENCE */}
      {/* ========================================================= */}
      <HeroInvitation isOpen={isCardOpen} onOpen={handleOpenCard} />

      {/* ========================================================= */}
      {/* STORYTELLING SECTIONS */}
      {/* ========================================================= */}
      <main className="relative z-10">
        {/* Section 1: Wedding Announcement */}
        <SectionAnnouncement />

        {/* Section 2: Couple Introduction */}
        <SectionCouple />

        {/* Section 3: Sacred Wedding Invitation & Radha Krishna Blessing */}
        <SectionSacredBlessing />

        {/* Section 4: Family Details */}
        <SectionFamily />

        {/* Section 5: Wedding Ceremony Details & Rituals */}
        <SectionCeremony />

        {/* Section 6: Location & Directions */}
        <SectionLocation />

        {/* Section 7: Final Blessing, RSVP & Wishes Wall */}
        <SectionClosingBlessing />
      </main>
    </div>
  );
};

export default App;

