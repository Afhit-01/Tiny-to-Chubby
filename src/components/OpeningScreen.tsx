import React, { useState } from 'react';
import { Sparkles, Moon } from 'lucide-react';
import { RoseBlossom, LavenderSprig, ChampagneLeaves } from './FloralDecorations';
import { GeekAvatar } from './GeekAvatar';
import { birthdayAudio } from '../utils/audio';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  const [isUnfolding, setIsUnfolding] = useState(false);

  const handleOpenClick = () => {
    setIsUnfolding(true);
    birthdayAudio.playCelebrationChime();
    birthdayAudio.startMusic();

    // Cinematic unfolding delay
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-5 py-8 transition-all duration-1000 ease-in-out ${
        isUnfolding
          ? 'opacity-0 scale-[1.03] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 40%, #2f1742 0%, #1f0e2d 55%, #13071b 100%)',
      }}
    >
      {/* Restrained Ambient Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#1f0e2d]/40 to-[#0e0413]/85 pointer-events-none" />

      {/* Subtle, sparse stardust specks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: '15%', left: '18%', size: 2, opacity: 0.4 },
          { top: '22%', left: '78%', size: 3, opacity: 0.35 },
          { top: '68%', left: '12%', size: 2.5, opacity: 0.3 },
          { top: '75%', left: '84%', size: 2, opacity: 0.4 },
          { top: '88%', left: '45%', size: 2, opacity: 0.25 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#D8BC86]"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Art-Directed Asymmetric Botanical Framing */}
      {/* Top-Left Botanical Anchor */}
      <div className="absolute -top-6 -left-6 sm:top-2 sm:left-2 pointer-events-none opacity-45 sm:opacity-65 transition-opacity">
        <div className="flex items-start">
          <RoseBlossom className="w-20 h-20 sm:w-28 sm:h-28 text-[#542B83]" tone="purple" />
          <LavenderSprig className="w-10 h-20 sm:w-14 sm:h-28 -ml-4 mt-3" color="#A47BC9" />
          <ChampagneLeaves className="w-10 h-24 hidden md:block -ml-3" />
        </div>
      </div>

      {/* Bottom-Right Botanical Accent */}
      <div className="absolute -bottom-6 -right-6 sm:bottom-2 sm:right-2 pointer-events-none opacity-45 sm:opacity-65">
        <div className="flex items-end justify-end">
          <LavenderSprig className="w-10 h-20 sm:w-14 sm:h-28 -mr-3" color="#B897D8" />
          <RoseBlossom className="w-16 h-16 sm:w-24 sm:h-24" tone="dusty" />
        </div>
      </div>

      {/* Centerpiece Content */}
      <div className="relative z-10 max-w-md w-full mx-auto text-center flex flex-col items-center">
        {/* Quiet, unboxed editorial kicker */}
        <div className="flex items-center gap-2 mb-4 text-[11px] uppercase tracking-[0.28em] text-[#D8BC86]/80 font-medium">
          <Moon className="w-3.5 h-3.5 text-[#D8BC86]/70 stroke-[1.5]" />
          <span>A Private Milestone Celebration</span>
        </div>

        {/* Illustrated Vector Character Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#D8BC86]/40 p-1 bg-gradient-to-b from-[#2e1642] to-[#180a22] shadow-2xl transition-transform duration-300 hover:scale-105 flex items-center justify-center">
            <GeekAvatar className="w-full h-full" />
          </div>
        </div>

        {/* Natural, Personal Welcoming Greeting */}
        <div className="max-w-sm mx-auto mb-4 px-2 text-center">
          <p className="text-xs sm:text-sm text-[#E8DDF5]/90 font-serif italic leading-relaxed">
            “Assalamu Alaikum, Abikẹ! I put together this little corner of the internet to honor your milestone 20th birthday. Step inside whenever you’re ready.”
          </p>
        </div>

        {/* Primary Opening Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#FFFAF4] leading-snug mb-2 tracking-tight">
          Someone very special <br />
          <span className="italic gold-gradient-text font-serif">is turning 20.</span>
        </h1>

        {/* Subline */}
        <p className="text-xs sm:text-sm text-[#E8DDF5]/75 font-light max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-7 leading-relaxed">
          And this little corner of the internet is all hers.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm text-[#1f0e2d] bg-[#D8BC86] hover:bg-[#E5CD9C] active:bg-[#C9A96E] font-medium tracking-wide shadow-lg shadow-[#000000]/40 transition-all duration-200 cursor-pointer"
        >
          <span className="font-semibold">Open Your Birthday Surprise</span>
          <Sparkles className="w-3.5 h-3.5 text-[#1f0e2d] transition-transform duration-300 group-hover:rotate-12" />
        </button>

        {/* Quiet Footnote */}
        <p className="mt-5 text-[10px] sm:text-[11px] text-[#D7A1AA]/60 tracking-[0.2em] uppercase font-light">
          Dedicated with sincere du'ā to Romdah · Abikẹ
        </p>
      </div>

      {/* Cinematic Transition Radial Dissolve */}
      {isUnfolding && (
        <div className="absolute inset-0 z-30 pointer-events-none bg-radial from-[#542B83]/70 via-[#1f0e2d]/90 to-[#12071a] opacity-90 transition-opacity duration-1000" />
      )}
    </div>
  );
};
