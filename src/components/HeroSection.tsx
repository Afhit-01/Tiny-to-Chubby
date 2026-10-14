import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { RoseBlossom, LavenderSprig } from './FloralDecorations';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#180b22] via-[#241135] to-[#1a0c25]"
    >
      {/* Background artwork with measured contrast scrim */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none overflow-hidden">
        <img
          src="/src/assets/images/celebration_petals_1791960507757.jpg"
          alt="Ethereal purple celebration flowers"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c25] via-[#1a0c25]/70 to-[#180b22]" />
      </div>

      {/* Architectural depth numeral '20' positioned with intentional balance */}
      <div
        className="absolute z-0 select-none pointer-events-none font-serif font-light text-[22vw] leading-none tracking-tighter text-[#542B83]/10"
        style={{
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
        }}
        aria-hidden="true"
      >
        20
      </div>

      {/* Delicate botanical accent */}
      <div className="absolute top-20 left-4 sm:left-12 pointer-events-none opacity-40 hidden sm:block">
        <LavenderSprig className="w-14 h-32" color="#A47BC9" />
      </div>
      <div className="absolute bottom-16 right-6 sm:right-16 pointer-events-none opacity-35 hidden sm:block">
        <RoseBlossom className="w-24 h-24" tone="dusty" />
      </div>

      {/* Main Editorial Hero Container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center">
        {/* Unboxed editorial kicker */}
        <div className="flex items-center gap-3 mb-5 text-xs tracking-[0.28em] uppercase text-[#D8BC86]/80 font-medium">
          <span className="w-6 h-[1px] bg-[#D8BC86]/40" />
          <span>Barakallahu Feeki · Chapter Twenty</span>
          <span className="w-6 h-[1px] bg-[#D8BC86]/40" />
        </div>

        {/* Salutation */}
        <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#D7A1AA] mb-2 font-normal">
          Happy 20th Birthday
        </p>

        {/* Romdah & Abikẹ Typographic Composition */}
        <div className="my-2 sm:my-3">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal text-[#FFFAF4] tracking-tight">
            Romdah
          </h1>

          <div className="flex items-center justify-center gap-2 mt-1 sm:mt-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic gold-gradient-text tracking-wide font-normal">
              “Abikẹ”
            </span>
            <Sparkles className="w-4 h-4 text-[#D8BC86]/80" />
          </div>
        </div>

        {/* Clean hairline separator */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D8BC86]/50 to-transparent my-6" />

        {/* Sincere Birthday Du'ā & Message */}
        <p className="text-sm sm:text-base md:text-lg text-[#E8DDF5]/85 max-w-xl mx-auto leading-relaxed font-light px-2">
          Twenty looks beautiful on you. May Allah bless you with an extraordinary year ahead,
          fill your life with barakah, and surround you with His continuous rahmah and peace.
        </p>

        {/* Clean unboxed metadata */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs tracking-wider uppercase text-[#D7A1AA]/75 font-medium">
          <span>A Blessed Milestone</span>
          <span aria-hidden="true" className="text-[#D8BC86]/50">·</span>
          <span>Endless Grace</span>
          <span aria-hidden="true" className="text-[#D8BC86]/50">·</span>
          <span>Remembered In Every Prayer</span>
        </div>

        {/* Restrained Scroll Cue */}
        <div className="mt-12 sm:mt-16">
          <button
            onClick={onScrollToNext}
            className="group inline-flex flex-col items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#D8BC86]/70 hover:text-[#FFFAF4] transition-colors cursor-pointer"
            aria-label="Scroll to floral celebration"
          >
            <span>Begin The Journey</span>
            <ChevronDown className="w-4 h-4 text-[#D8BC86]/70 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
