import React, { useState } from 'react';
import { Feather, Copy, Check, Edit3, Heart } from 'lucide-react';
import { RoseBlossom, LavenderSprig } from './FloralDecorations';
import { birthdayAudio } from '../utils/audio';

export const LetterSection: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState(
    `Dear Abikẹ,

Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

Happy 20th Birthday!

Stepping into twenty is such a special milestone. It marks a quiet, beautiful threshold between all the memories that built you and all the brilliant adventures waiting just ahead.

Looking at you today, what stands out most isn't just that you’re turning twenty—it’s the grace, humor, and sincerity you bring into every space you enter. From the spontaneous laughter and our inside jokes to the quiet moments where you simply show up as your genuine self, you are a rare and deeply valued presence.

I pray that Allah grants you vibrant health, enduring happiness, deep peace of heart, and immense barakah in every hour of your days. May Allah surround you with His boundless rahmah, protect you from all harm, guide your every step, and make all of your affairs easy. May He bless you with beneficial knowledge, open doors to beautiful opportunities, surround you with sincere and righteous friendships, and grant you victory and success in this life and the Hereafter.

And on a very special note: May Allah bless you with good health, happiness, barakah, and plenty of beautiful things in this new decade. And may He also grant you the very special transition from Tiny to !Chubby in real life. Ameen. This particular du'ā must not be forgotten! 😄

May Allah fill your twenties with unmatched goodness and make the journey ahead far better than you ever expected. Never forget how loved and appreciated you are.

With warmest du'ās, laughs, and sincere friendship always,
Your Friend Always.`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(letterContent);
    setIsCopied(true);
    birthdayAudio.playSoftTick();
    setTimeout(() => setIsCopied(false), 2400);
  };

  return (
    <section
      id="letter"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#160a1e] text-[#291638] overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Intro Tag */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-2 font-medium">
            05 · An Intimate Note
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFAF4]">
            A little note for you, Abikẹ.
          </h2>
        </div>

        {/* Stationery Paper Presentation */}
        <div className="relative rounded-3xl bg-[#FAF7F0] text-[#291638] p-8 sm:p-12 md:p-16 shadow-2xl border border-[#D8BC86]/30 overflow-hidden">
          {/* Subtle paper frame */}
          <div className="absolute inset-2 border border-[#D8BC86]/20 rounded-2xl pointer-events-none" />

          {/* Decorative Corner Florals */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-30">
            <LavenderSprig className="w-10 h-20" color="#806782" />
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none opacity-25">
            <RoseBlossom className="w-14 h-14" tone="dusty" />
          </div>

          {/* Letter Header */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#D8BC86]/25">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#806782] font-serif">
              <Feather className="w-3.5 h-3.5 text-[#542B83]" />
              <span>Twenty Years of Grace · October 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-[#542B83] hover:text-[#291638] transition-colors p-1 cursor-pointer flex items-center gap-1 font-medium"
                title="Edit message"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isEditing ? 'Done' : 'Personalize'}</span>
              </button>
              <button
                onClick={handleCopy}
                className="text-xs text-[#542B83] hover:text-[#291638] transition-colors p-1 cursor-pointer flex items-center gap-1 font-medium"
                title="Copy note"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Letter Prose */}
          {isEditing ? (
            <textarea
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
              rows={14}
              className="w-full p-4 rounded-xl border border-[#542B83]/30 font-serif text-base sm:text-lg leading-relaxed text-[#291638] bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#542B83]"
            />
          ) : (
            <div className="font-serif text-base sm:text-lg md:text-[19px] text-[#291638]/90 leading-relaxed sm:leading-[1.85] whitespace-pre-line tracking-wide">
              {letterContent}
            </div>
          )}

          {/* Wax Seal & Postscript */}
          <div className="mt-10 pt-6 border-t border-[#D8BC86]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#806782] italic font-serif">
              <Heart className="w-3.5 h-3.5 text-[#D7A1AA] fill-[#D7A1AA]" />
              <span>Written with genuine friendship & care</span>
            </div>

            {/* Tactile Wax Seal */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#4a2277] to-[#6d39a3] border border-[#D8BC86] flex items-center justify-center text-[#FFFAF4] shadow-md transform rotate-6 select-none">
              <span className="font-serif italic font-bold text-xs tracking-tighter">RA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
