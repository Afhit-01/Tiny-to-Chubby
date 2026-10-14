import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayAudio } from '../utils/audio';
import floralPurpleRosesImg from '../assets/images/floral_purple_roses_1791960507766.jpg';
import botanicalDustyRoseImg from '../assets/images/botanical_dusty_rose_1791960508354.jpg';

export const FloralCelebrationSection: React.FC = () => {
  const [activeBloomIndex, setActiveBloomIndex] = useState<number | null>(null);

  const bloomCompliments = [
    { title: 'Grace', note: 'Every step you take carries an effortless poise and gentle elegance.' },
    { title: 'Laughter', note: 'Your laugh has a way of warming any room and bringing joy.' },
    { title: 'Barakah', note: 'May Allah fill your days with continuous blessing and deep peace in your heart.' },
    { title: 'Strength', note: 'A quiet resilience and noble sincerity that shines brighter with time.' },
  ];

  const handleBloomClick = (idx: number) => {
    setActiveBloomIndex(idx === activeBloomIndex ? null : idx);
    birthdayAudio.playChime(660 + idx * 80, 1.8, 0.18);
  };

  const handleSendPetalShower = () => {
    birthdayAudio.playCelebrationChime();
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#542B83', '#D7A1AA', '#D8BC86', '#E8DDF5'],
      ticks: 180,
      gravity: 0.8,
      scalar: 1.05,
    });
  };

  return (
    <section
      id="flowers"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#1f0e2c] text-[#FFFAF4] overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-2 font-medium">
            01 · In Full Bloom
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFAF4] tracking-tight">
            A Floral Celebration <br />
            <span className="italic font-serif gold-gradient-text">for Abikẹ</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#D8BC86]/30 mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#E8DDF5]/80 font-light leading-relaxed">
            You deserve beautiful things, beautiful moments, and an extraordinary year ahead.
            Just as flowers bloom in their own perfect season, twenty is your time to flourish.
          </p>
        </div>

        {/* Curated Gallery Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Featured Botanical Study */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-[#542B83]/40 bg-[#160a1f] shadow-xl group">
              <img
                src={floralPurpleRosesImg}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/images/floral_purple_roses.jpg')) {
                    target.src = '/images/floral_purple_roses.jpg';
                  }
                }}
                alt="Bespoke royal purple roses bouquet with champagne gold leaves"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14081c]/90 via-transparent to-transparent pointer-events-none" />

              {/* Artwork caption bar */}
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[#D8BC86] font-serif italic text-sm sm:text-base">Royal Purples & Champagne Botanicals</p>
                  <p className="text-[11px] text-[#E8DDF5]/65">Botanical composition curated for Romdah · Abikẹ</p>
                </div>
                <button
                  onClick={handleSendPetalShower}
                  className="px-3.5 py-1.5 rounded-full bg-[#35174f]/80 hover:bg-[#542B83] text-[#FFFAF4] border border-[#D8BC86]/35 transition-all text-xs cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Sparkles className="w-3 h-3 text-[#D8BC86]" />
                  <span>Scatter Petals</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Companion Artwork & Bloom Notes */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Companion Artwork */}
            <div className="relative rounded-2xl overflow-hidden border border-[#542B83]/30 bg-[#160a1f] shadow-md group">
              <img
                src={botanicalDustyRoseImg}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/images/botanical_dusty_rose.jpg')) {
                    target.src = '/images/botanical_dusty_rose.jpg';
                  }
                }}
                alt="Dusty rose and lilac mist blossoms arrangement"
                className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#1e0e2a] border-t border-white/[0.06]">
                <span className="text-[11px] uppercase tracking-widest text-[#D7A1AA] font-medium">A Sincere Du'ā</span>
                <p className="text-xs sm:text-sm font-serif italic text-[#FFFAF4] mt-1 leading-snug">
                  “May Allah guide your steps, protect you from harm, and make what lies ahead better than what has passed.”
                </p>
              </div>
            </div>

            {/* Interactive Bloom Notes */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#1a0c25]/70">
              <div className="flex items-center justify-between mb-3 text-xs text-[#D8BC86]">
                <span className="uppercase tracking-wider font-medium flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-[#D7A1AA] fill-[#D7A1AA]" />
                  Blossoms of Character
                </span>
                <span className="text-[10px] text-[#E8DDF5]/50 tracking-wider">Tap to read</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {bloomCompliments.map((bloom, idx) => {
                  const isSelected = activeBloomIndex === idx;
                  return (
                    <button
                      key={bloom.title}
                      onClick={() => handleBloomClick(idx)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#D8BC86]/80 bg-[#35184e]/70 shadow-sm'
                          : 'border-white/[0.06] bg-[#160a1f]/40 hover:border-white/[0.15]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xs sm:text-sm text-[#FFFAF4]">
                          {bloom.title}
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#D8BC86]' : 'bg-[#542B83]'}`} />
                      </div>
                      <p className={`text-[11px] mt-1 transition-all ${isSelected ? 'text-[#E8DDF5]' : 'text-[#E8DDF5]/50 line-clamp-1'}`}>
                        {bloom.note}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
