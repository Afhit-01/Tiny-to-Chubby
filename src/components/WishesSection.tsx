import React, { useState } from 'react';
import { Compass, Sun, Shield, MapPin, Feather, Heart, Moon } from 'lucide-react';
import { birthdayAudio } from '../utils/audio';

interface Wish {
  id: string;
  number: string;
  theme: string;
  headline: string;
  shortSnippet: string;
  deepReflection: string;
  icon: React.ElementType;
}

export const WishesSection: React.FC = () => {
  const [selectedWishId, setSelectedWishId] = useState<string>('peace');

  const wishes: Wish[] = [
    {
      id: 'peace',
      number: '01',
      theme: 'Sakinah',
      headline: 'Happiness, Peace & Contentment',
      shortSnippet: 'Calm mornings, peaceful thoughts, and a gentle heart anchored in faith.',
      deepReflection: 'May Allah grant your heart unshakeable peace (sakinah) and contentment. Even when the world feels hurried, may you always find stillness, good health, and a deep, reassuring tranquility in your soul.',
      icon: Sun,
    },
    {
      id: 'growth',
      number: '02',
      theme: 'Ilm & Barakah',
      headline: 'Growth, Knowledge & Opportunities',
      shortSnippet: 'Doors of opportunity that open wide with barakah in every new endeavor.',
      deepReflection: 'May Allah bless you with beneficial knowledge (ilm nafi\'), expand your wisdom, and open doors of righteous opportunities. May every challenge you face reveal how capable, resilient, and blessed you are.',
      icon: Compass,
    },
    {
      id: 'friendships',
      number: '03',
      theme: 'Suhbah',
      headline: 'Sincere Friendships & Pure Companionship',
      shortSnippet: 'People who cherish you wholly, celebrate your wins, and support your journey.',
      deepReflection: 'May Allah surround you with loyal, righteous friends who remind you of goodness, celebrate your genuine spirit, and stand by you unconditionally throughout your twenties and beyond.',
      icon: Heart,
    },
    {
      id: 'confidence',
      number: '04',
      theme: 'Hidayah',
      headline: 'Confidence, Guidance & Self-Discovery',
      shortSnippet: 'Stepping into your true light and knowing your worth with steadfast conviction.',
      deepReflection: 'Turning twenty is the gateway to owning your true voice. May Allah guide your steps, protect your heart from doubt, and give you unwavering confidence and grace in who you are.',
      icon: Shield,
    },
    {
      id: 'adventures',
      number: '05',
      theme: 'Surprises',
      headline: 'Beautiful Surprises & Memorable Adventures',
      shortSnippet: 'Unexpected delights, joyful journeys, and sweet moments that take your breath away.',
      deepReflection: 'May Allah surprise you with unexpected ease, places of beauty that enrich your spirit, and joyous memories with those who truly love and appreciate you.',
      icon: MapPin,
    },
    {
      id: 'courage',
      number: '06',
      theme: 'Success',
      headline: 'Success in this Life and the Hereafter',
      shortSnippet: 'The courage to pursue noble dreams with sincere faith and full conviction.',
      deepReflection: 'May Allah grant you success in this life and the Hereafter (dunya and akhirah). May you always have the courage to pursue what is pure, to stand strong in truth, and to build a life full of light.',
      icon: Feather,
    },
  ];

  const handleSelect = (id: string) => {
    setSelectedWishId(id);
    birthdayAudio.playChime(700, 1.2, 0.14);
  };

  const activeWish = wishes.find((w) => w.id === selectedWishId) || wishes[0];

  return (
    <section
      id="wishes"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#251236] text-[#FFFAF4] overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-2 font-medium">
            04 · The Decade Ahead
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFAF4] tracking-tight">
            Wishes for Your Twenties
          </h2>
          <div className="w-12 h-[1px] bg-[#D8BC86]/30 mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#E8DDF5]/80 font-light leading-relaxed">
            Twenty is not just another birthday; it is the dawn of a defining decade.
            Here are six heartfelt blessings for the journey unfolding before you.
          </p>
        </div>

        {/* 2-Column Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Wish Selector List (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {wishes.map((wish) => {
              const isSelected = selectedWishId === wish.id;
              const Icon = wish.icon;

              return (
                <button
                  key={wish.id}
                  onClick={() => handleSelect(wish.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#37194f] border-[#D8BC86]/80 shadow-md ring-1 ring-[#D8BC86]/30'
                      : 'bg-[#1c0d28]/70 border-white/[0.07] hover:border-white/[0.18]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-medium text-[#D8BC86]/80">
                        {wish.number} · {wish.theme}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D8BC86]' : 'text-[#806782]'}`} />
                    </div>

                    <h3 className="text-sm sm:text-base font-serif font-medium text-[#FFFAF4] leading-snug">
                      {wish.headline}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#E8DDF5]/65 font-light mt-1.5 line-clamp-2 leading-relaxed">
                      {wish.shortSnippet}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#D7A1AA]">
                    <span className="font-light">{isSelected ? 'Active blessing' : 'Read reflection'}</span>
                    <span className={`w-1 h-1 rounded-full ${isSelected ? 'bg-[#D8BC86]' : 'bg-[#542B83]'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Reading Monograph (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#1b0c27] border border-[#D8BC86]/30 shadow-xl relative overflow-hidden">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D8BC86]/80 font-medium mb-3">
                Wish {activeWish.number} of 06 · {activeWish.theme}
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#FFFAF4] leading-tight mb-3">
                {activeWish.headline}
              </h3>

              <div className="w-8 h-[1px] bg-[#D8BC86]/50 mb-4" />

              <p className="text-sm font-serif italic text-[#F0E3CB] mb-3 leading-snug">
                “{activeWish.shortSnippet}”
              </p>

              <p className="text-xs sm:text-sm text-[#E8DDF5]/85 font-light leading-relaxed">
                {activeWish.deepReflection}
              </p>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#D7A1AA]/80">
                <span className="tracking-wider uppercase">For Romdah · Abikẹ</span>
                <span className="italic font-serif">Year 20 Supplication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Quranic Du'ā Ribbon */}
        <div className="mt-14 max-w-2xl mx-auto p-6 sm:p-7 rounded-2xl bg-[#1b0c27]/90 border border-white/[0.08] text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2 text-[10px] uppercase tracking-[0.25em] text-[#D8BC86]/80">
            <Moon className="w-3 h-3 text-[#D8BC86]/70 stroke-[1.5]" />
            <span>A Du'ā For Both Worlds</span>
          </div>
          <p className="text-lg sm:text-2xl font-serif text-[#F0E3CB] leading-relaxed my-2" dir="rtl">
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
          </p>
          <p className="text-xs sm:text-sm font-serif italic text-[#D7A1AA] mt-1 leading-relaxed">
            “Our Lord, grant us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.”
          </p>
          <p className="text-[10px] text-[#806782] tracking-wider uppercase mt-1.5">
            Surah Al-Baqarah (2:201)
          </p>
        </div>
      </div>
    </section>
  );
};
