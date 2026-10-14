import React, { useId } from 'react';

// Delicate Lavender Sprig SVG Illustration
export const LavenderSprig: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-32',
  color = '#806782',
}) => (
  <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M40 155C40 100 42 45 44 15"
      stroke="#5D5061"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Florets */}
    <ellipse cx="40" cy="20" rx="5" ry="8" fill="#B393D3" opacity="0.9" transform="rotate(-15 40 20)" />
    <ellipse cx="48" cy="28" rx="6" ry="9" fill="#9269B5" opacity="0.85" transform="rotate(25 48 28)" />
    <ellipse cx="34" cy="36" rx="6" ry="10" fill="#7E54A2" opacity="0.9" transform="rotate(-30 34 36)" />
    <ellipse cx="46" cy="48" rx="6.5" ry="10" fill="#9874BC" opacity="0.85" transform="rotate(20 46 48)" />
    <ellipse cx="35" cy="60" rx="7" ry="11" fill="#6A3B8F" opacity="0.9" transform="rotate(-25 35 60)" />
    <ellipse cx="47" cy="72" rx="7" ry="11" fill="#8459A7" opacity="0.8" transform="rotate(20 47 72)" />
    <ellipse cx="36" cy="85" rx="6" ry="10" fill="#714294" opacity="0.85" transform="rotate(-20 36 85)" />
    <ellipse cx="45" cy="98" rx="5" ry="9" fill="#9C77BE" opacity="0.8" transform="rotate(18 45 98)" />
    <ellipse cx="38" cy="112" rx="4.5" ry="8" fill={color} opacity="0.75" transform="rotate(-15 38 112)" />
    {/* Delicate slender leaves */}
    <path d="M41 115C50 112 58 116 62 122" stroke="#5D5061" strokeWidth="1" strokeLinecap="round" />
    <path d="M40 125C30 120 22 124 18 132" stroke="#5D5061" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Botanical Rose Blossom vector
export const RoseBlossom: React.FC<{ className?: string; tone?: 'purple' | 'dusty' | 'gold' }> = ({
  className = 'w-24 h-24',
  tone = 'purple',
}) => {
  const gradientId = useId();
  
  const gradients = {
    purple: {
      c1: '#9153C2',
      c2: '#542B83',
      c3: '#291638',
      stroke: 'rgba(216, 188, 134, 0.3)',
    },
    dusty: {
      c1: '#F2DDE1',
      c2: '#D7A1AA',
      c3: '#8E5A64',
      stroke: 'rgba(255, 250, 244, 0.4)',
    },
    gold: {
      c1: '#FFF3DB',
      c2: '#D8BC86',
      c3: '#8C6E38',
      stroke: 'rgba(255, 255, 255, 0.5)',
    },
  };

  const g = gradients[tone];

  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={g.c1} />
          <stop offset="60%" stopColor={g.c2} />
          <stop offset="100%" stopColor={g.c3} />
        </radialGradient>
      </defs>
      {/* Outer Petals */}
      <path
        d="M60 15 C75 15, 95 30, 95 48 C95 65, 80 80, 60 80 C40 80, 25 65, 25 48 C25 30, 45 15, 60 15 Z"
        fill={`url(#${gradientId})`}
        opacity="0.85"
      />
      <path
        d="M30 40 C15 55, 20 85, 45 95 C70 105, 95 90, 100 70 C105 50, 85 30, 65 35"
        stroke={g.stroke}
        strokeWidth="1.2"
        fill={`url(#${gradientId})`}
        opacity="0.75"
      />
      {/* Middle Petals */}
      <path
        d="M45 42 C50 30, 75 32, 78 45 C80 58, 65 70, 52 68 C39 66, 40 54, 45 42 Z"
        fill={g.c2}
        opacity="0.9"
        stroke={g.stroke}
        strokeWidth="0.8"
      />
      {/* Rose Center Swirl */}
      <path
        d="M58 48 C62 46, 68 50, 66 54 C64 58, 56 58, 55 54 C54 50, 60 49, 62 52"
        stroke={g.stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Champagne Gold Foliage Stem
export const ChampagneLeaves: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = 'w-24 h-48',
  flipped = false,
}) => (
  <svg
    viewBox="0 0 100 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? '-scale-x-100' : ''}`}
    aria-hidden="true"
  >
    <path
      d="M20 190 C35 140, 50 80, 75 20"
      stroke="#D8BC86"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path d="M30 160 C48 150, 62 154, 66 164 C52 170, 38 166, 30 160 Z" fill="#D8BC86" opacity="0.5" />
    <path d="M40 120 C22 110, 10 116, 8 126 C22 130, 34 126, 40 120 Z" fill="#D8BC86" opacity="0.6" />
    <path d="M50 85 C68 74, 82 78, 86 88 C70 94, 58 90, 50 85 Z" fill="#D8BC86" opacity="0.65" />
    <path d="M60 50 C44 42, 34 46, 32 54 C46 58, 56 54, 60 50 Z" fill="#D8BC86" opacity="0.7" />
    <path d="M72 25 C82 15, 90 20, 88 28 C80 32, 74 29, 72 25 Z" fill="#D8BC86" opacity="0.8" />
  </svg>
);

// Gentle Floating Petals overlay for ambient luxury (whisper-soft)
export const FloatingPetalsOverlay: React.FC = () => {
  const petals = [
    { left: '12%', delay: '0s', duration: '22s', size: 12, rotate: 20 },
    { left: '38%', delay: '4s', duration: '26s', size: 14, rotate: 45 },
    { left: '72%', delay: '2s', duration: '24s', size: 13, rotate: -15 },
    { left: '88%', delay: '8s', duration: '28s', size: 15, rotate: 60 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20" aria-hidden="true">
      {petals.map((p, idx) => (
        <div
          key={idx}
          className="absolute opacity-25"
          style={{
            left: p.left,
            top: '-30px',
            animation: `driftPetal ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <path
              d="M12 0 C18 6, 24 16, 24 24 C24 30, 18 34, 12 34 C6 34, 0 30, 0 24 C0 16, 6 6, 12 0 Z"
              fill={idx % 2 === 0 ? '#D7A1AA' : '#B897D8'}
              fillOpacity="0.65"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes driftPetal {
          0% {
            transform: translateY(0vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          50% {
            transform: translateY(50vh) translateX(20px) rotate(180deg);
            opacity: 0.4;
          }
          85% {
            opacity: 0.25;
          }
          100% {
            transform: translateY(115vh) translateX(-15px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
