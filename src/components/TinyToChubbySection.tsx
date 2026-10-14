import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayAudio } from '../utils/audio';

export const TinyToChubbySection: React.FC = () => {
  // Phase: 0 = "Tiny", 1 = transforming/stretching, 2 = "!Chubby"
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play on first visibility
  useEffect(() => {
    let timer1: number;
    let timer2: number;

    const runTransformation = () => {
      setPhase(0);
      timer1 = window.setTimeout(() => {
        setPhase(1);
        birthdayAudio.playChime(520, 0.8, 0.12);
        timer2 = window.setTimeout(() => {
          setPhase(2);
          birthdayAudio.playChime(880, 1.5, 0.22);
          confetti({
            particleCount: 25,
            spread: 50,
            origin: { y: 0.65 },
            colors: ['#D7A1AA', '#542B83', '#D8BC86'],
            ticks: 120,
          });
        }, 1100);
      }, 1500);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasInteracted) {
          runTransformation();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [hasInteracted]);

  const handleReplay = () => {
    setHasInteracted(true);
    setPhase(0);
    birthdayAudio.playSoftTick();

    setTimeout(() => {
      setPhase(1);
      birthdayAudio.playChime(520, 0.8, 0.12);
      setTimeout(() => {
        setPhase(2);
        birthdayAudio.playChime(880, 1.5, 0.22);
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#D7A1AA', '#542B83', '#D8BC86', '#FFFAF4'],
          ticks: 140,
        });
      }, 1100);
    }, 1100);
  };

  return (
    <section
      id="transformation"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#180a22] text-[#FFFAF4] overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Unboxed Chapter Kicker */}
        <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-2 font-medium">
          02 · The Inside Joke
        </p>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FFFAF4] mb-3">
          The Legendary Evolution
        </h2>

        {/* The Exact phrase displayed with crisp typography */}
        <div className="inline-flex items-center gap-3 text-base sm:text-lg font-serif text-[#D8BC86] tracking-wider mb-8">
          <span className="font-light">Tiny</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D7A1AA]" />
          <span className="font-semibold">!Chubby</span>
        </div>

        {/* Refined Character Transformation Stage */}
        <div className="w-full max-w-lg mx-auto p-8 sm:p-12 rounded-3xl bg-[#210e30]/80 border border-[#542B83]/30 shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[260px]">
          {/* Subtle top hairline highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8BC86]/40 to-transparent" />

          {/* Transformation Display Area */}
          <div className="relative py-6 flex items-center justify-center min-h-[120px]">
            {phase === 0 && (
              <div className="animate-fadeIn transition-all duration-700 ease-out flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-serif font-light text-[#E8DDF5]/70 tracking-widest italic scale-95">
                  tiny
                </span>
                <span className="text-[11px] text-[#806782] tracking-widest mt-2 uppercase">
                  (Year 0 · The beginning)
                </span>
              </div>
            )}

            {phase === 1 && (
              <div className="transition-all duration-700 ease-in-out flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-serif font-medium text-[#D7A1AA] tracking-wider scale-105">
                  evolving...
                </span>
                <div className="w-20 h-1 bg-[#542B83]/40 rounded-full mt-3 overflow-hidden">
                  <div className="w-full h-full bg-[#D8BC86] animate-pulse" />
                </div>
              </div>
            )}

            {phase === 2 && (
              <div className="transition-all duration-500 ease-out transform scale-100 flex flex-col items-center">
                {/* Preserves exact exclamation mark: !Chubby */}
                <div className="relative inline-block">
                  <span className="text-5xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D6] via-[#D7A1AA] to-[#F2DDE1] tracking-tight">
                    !Chubby
                  </span>
                  <Sparkles className="absolute -top-2 -right-5 w-5 h-5 text-[#D8BC86]" />
                </div>
                <span className="text-xs text-[#D8BC86] tracking-widest mt-2.5 uppercase font-medium">
                  (20 & Unapologetically Gorgeous ✨)
                </span>
              </div>
            )}
          </div>

          {/* Required Caption from Prompt */}
          <p className="text-xs sm:text-sm font-serif italic text-[#E8DDF5]/85 mt-3 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
            “Some transformations deserve their own celebration.”
          </p>

          {/* Replay Control */}
          <div className="mt-5">
            <button
              onClick={handleReplay}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-xs text-[#E8DDF5] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 text-[#D8BC86]" />
              <span>Replay Evolution</span>
            </button>
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-xs text-[#806782] max-w-sm mx-auto leading-relaxed">
          Through every version of you, you’ve brought unmatched joy and laughter into the world.
          Here’s to the iconic <span className="text-[#D7A1AA] font-medium">!Chubby</span> era!
        </p>
      </div>
    </section>
  );
};
