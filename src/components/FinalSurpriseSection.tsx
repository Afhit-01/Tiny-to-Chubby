import React, { useState } from 'react';
import { Gift, Heart, ArrowUp, Edit3, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RoseBlossom, LavenderSprig } from './FloralDecorations';
import { birthdayAudio } from '../utils/audio';

interface FinalSurpriseProps {
  onBackToTop: () => void;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseProps> = ({ onBackToTop }) => {
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);
  const [isEditingSecret, setIsEditingSecret] = useState(false);
  const [secretMessage, setSecretMessage] = useState(
    `You are the kind of person who leaves an indelible mark of kindness on everyone you cross paths with. Never let anyone dim your spark, change your gentle nature, or make you forget how exceptionally rare and wonderful you are. 

May Allah bless your life with abundant barakah, surround you with His infinite rahmah, protect you from all harm, and grant you everything your heart sincerely prays for in this world and the next. Happy 20th birthday, Abikẹ! 💜`
  );

  const handleReveal = () => {
    setSurpriseRevealed(true);
    birthdayAudio.playCelebrationChime();

    const end = Date.now() + 1000;
    const colors = ['#542B83', '#D8BC86', '#D7A1AA', '#FFFAF4', '#9153C2'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 50,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 50,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section
      id="surprise"
      className="relative py-28 sm:py-36 px-4 sm:px-6 bg-[#13071b] text-[#FFFAF4] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Delicate background flora */}
      <div className="absolute top-12 left-6 pointer-events-none opacity-25 hidden sm:block">
        <RoseBlossom className="w-24 h-24" tone="purple" />
      </div>
      <div className="absolute top-12 right-8 pointer-events-none opacity-25 hidden sm:block">
        <LavenderSprig className="w-14 h-28" color="#D8BC86" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Unboxed Chapter Kicker */}
        <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-3 font-medium">
          06 · The Grand Finale
        </p>

        {/* Required Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#FFFAF4] tracking-tight mb-3">
          Happy 20th Birthday, <br />
          <span className="italic gold-gradient-text font-serif">Abikẹ.</span>
        </h2>

        {/* Required Subtitle */}
        <p className="text-sm sm:text-lg font-serif text-[#E8DDF5]/80 max-w-lg mx-auto leading-relaxed mb-9 font-light">
          May this chapter be kinder, brighter, and more beautiful than you imagined.
        </p>

        {/* Surprise Button */}
        {!surpriseRevealed ? (
          <button
            onClick={handleReveal}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm text-[#1f0e2d] bg-[#D8BC86] hover:bg-[#E5CD9C] active:bg-[#C9A96E] font-medium tracking-wide shadow-lg shadow-[#000000]/40 transition-all duration-200 cursor-pointer"
          >
            <Gift className="w-4 h-4 text-[#1f0e2d]" />
            <span className="font-semibold">One More Little Surprise</span>
          </button>
        ) : (
          /* Revealed Secret Box */
          <div className="w-full max-w-lg p-7 sm:p-9 rounded-2xl bg-[#1d0a27] border border-[#D8BC86]/40 shadow-xl animate-fadeIn relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
              <span className="text-[11px] uppercase tracking-widest text-[#D8BC86] flex items-center gap-1.5 font-medium">
                <Heart className="w-3 h-3 text-[#D7A1AA] fill-[#D7A1AA]" />
                Secret Birthday Wish Unlocked
              </span>
              <button
                onClick={() => setIsEditingSecret(!isEditingSecret)}
                className="text-[11px] text-[#E8DDF5]/70 hover:text-[#D8BC86] transition-colors p-1 cursor-pointer flex items-center gap-1"
                title="Edit secret wish"
              >
                {isEditingSecret ? <Check className="w-3 h-3 text-[#D8BC86]" /> : <Edit3 className="w-3 h-3" />}
                <span>{isEditingSecret ? 'Save' : 'Edit'}</span>
              </button>
            </div>

            {isEditingSecret ? (
              <textarea
                value={secretMessage}
                onChange={(e) => setSecretMessage(e.target.value)}
                rows={5}
                className="w-full p-3 rounded-xl border border-white/[0.15] bg-[#13071b] text-xs sm:text-sm text-[#FFFAF4] focus:outline-none"
              />
            ) : (
              <p className="font-serif italic text-sm sm:text-base text-[#FFFAF4] leading-relaxed whitespace-pre-line text-left sm:text-center">
                “{secretMessage}”
              </p>
            )}

            <div className="mt-5 pt-3 border-t border-white/[0.06] text-center text-[11px] text-[#D7A1AA]">
              <span>Forever proud of you · Happy 20th Birthday</span>
            </div>
          </div>
        )}

        {/* Closing Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#806782]">
          <p className="tracking-widest uppercase">
            Designed with care for Romdah (Abikẹ) · Year Twenty
          </p>

          <button
            onClick={onBackToTop}
            className="inline-flex items-center gap-1.5 text-[#D8BC86] hover:text-[#FFFAF4] transition-colors cursor-pointer py-1"
          >
            <span>Back to beginning</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
