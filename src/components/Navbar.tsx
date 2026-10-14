import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { birthdayAudio } from '../utils/audio';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const playing = birthdayAudio.toggleMusic();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { label: 'Birthday', id: 'hero' },
    { label: 'Flowers', id: 'flowers' },
    { label: 'Tiny to !Chubby', id: 'transformation' },
    { label: 'Wishes', id: 'wishes' },
    { label: 'Letter', id: 'letter' },
  ];

  const handleLinkClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
    birthdayAudio.playSoftTick();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#160a1e]/90 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-[#D7A1AA] via-[#D8BC86] to-[#9153C2] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* 3-Zone Top Bar Contract */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-base sm:text-lg font-serif tracking-wide text-[#FFFAF4] hover:text-[#D8BC86] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer flex items-center gap-1.5"
          >
            <span>Romdah</span>
            <span className="text-[#D8BC86] font-normal font-serif italic text-sm">· Abikẹ</span>
          </button>

          {/* Zone 2: 4-5 single-line clean nav links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#E8DDF5]/80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-[#D8BC86] transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8BC86] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Ambient Sound Controller */}
            <button
              onClick={toggleSound}
              aria-label={isAudioPlaying ? 'Mute ambient melody' : 'Play ambient melody'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-xs text-[#FFFAF4] transition-all cursor-pointer whitespace-nowrap shrink-0"
              title={isAudioPlaying ? 'Mute background sound' : 'Play gentle background sound'}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#D8BC86]" />
                  <span className="hidden sm:inline text-[#E8DDF5]">Melody On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#D7A1AA]" />
                  <span className="hidden sm:inline text-[#E8DDF5]/70">Play Melody</span>
                </>
              )}
            </button>

            {/* Final Surprise shortcut */}
            <button
              onClick={() => handleLinkClick('surprise')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D8BC86] hover:bg-[#E5CD9C] text-[#1f0e2d] text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3 h-3 text-[#1f0e2d]" />
              <span>Surprise</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#E8DDF5] hover:text-[#D8BC86] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] z-30 bg-[#291638]/95 backdrop-blur-lg border-b border-[#542B83]/40 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-sm font-serif tracking-wider text-[#FFFAF4] hover:text-[#D8BC86] py-2 border-b border-[#542B83]/20"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('surprise')}
              className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#D8BC86] text-[#291638] text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Final Birthday Surprise
            </button>
          </div>
        </div>
      )}
    </>
  );
};
