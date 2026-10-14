/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FloralCelebrationSection } from './components/FloralCelebrationSection';
import { TinyToChubbySection } from './components/TinyToChubbySection';
import { AppreciationSection } from './components/AppreciationSection';
import { WishesSection } from './components/WishesSection';
import { LetterSection } from './components/LetterSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { FloatingPetalsOverlay } from './components/FloralDecorations';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenSurprise = () => {
    setHasOpened(true);
    // Smooth scroll to top of main site after reveal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#1c1028] text-[#FFFAF4] selection:bg-[#542B83] selection:text-white">
      {/* 1. Opening Screen - Appears first on entry */}
      {!hasOpened && <OpeningScreen onOpen={handleOpenSurprise} />}

      {/* 2. Main Experience - Fully revealed upon clicking opening surprise */}
      {hasOpened && (
        <main className="relative animate-fadeIn">
          {/* Subtle Ambient Floating Petals */}
          <FloatingPetalsOverlay />

          {/* Minimal 3-Zone Sticky Navigation Bar */}
          <Navbar onScrollTo={handleScrollToSection} />

          {/* Section A: The Hero Celebration */}
          <HeroSection onScrollToNext={() => handleScrollToSection('flowers')} />

          {/* Section B: A Floral Celebration */}
          <FloralCelebrationSection />

          {/* Section C: Tiny to !Chubby */}
          <TinyToChubbySection />

          {/* Section D: A Little Appreciation */}
          <AppreciationSection />

          {/* Section E: Wishes for Her Twenties */}
          <WishesSection />

          {/* Section F: The Birthday Letter */}
          <LetterSection />

          {/* Section G: The Final Birthday Surprise */}
          <FinalSurpriseSection onBackToTop={handleBackToTop} />
        </main>
      )}
    </div>
  );
}
