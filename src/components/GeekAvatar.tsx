import React from 'react';

interface GeekAvatarProps {
  className?: string;
}

/**
 * Handcrafted vector SVG illustrated character representing a young Muslim male geek:
 * - Four-eyed with stylish dark-rim glasses and gold accents
 * - Clean-shaven (strictly no beard, no moustache)
 * - Modern styled dark hair
 * - Warm, friendly, welcoming smile
 * - Modest midnight-plum mandarin collar shirt with champagne detailing
 * - Built entirely of vector SVG elements with CSS-based natural blinking and floating
 */
export const GeekAvatar: React.FC<GeekAvatarProps> = ({ className = 'w-28 h-28' }) => {
  return (
    <div className={`relative select-none ${className}`}>
      {/* SVG Character Illustration */}
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
        aria-label="Illustrated young Muslim male avatar with stylish glasses smiling warmly"
      >
        <defs>
          {/* Hair Gradient */}
          <linearGradient id="hairGrad" x1="110" y1="20" x2="110" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#32223F" />
            <stop offset="70%" stopColor="#1B1224" />
            <stop offset="100%" stopColor="#120A1A" />
          </linearGradient>

          {/* Skin Gradients */}
          <linearGradient id="skinGrad" x1="110" y1="65" x2="110" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2AB84" />
            <stop offset="65%" stopColor="#CB9268" />
            <stop offset="100%" stopColor="#B47B52" />
          </linearGradient>

          <linearGradient id="neckGrad" x1="110" y1="140" x2="110" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A66F48" />
            <stop offset="100%" stopColor="#BA8159" />
          </linearGradient>

          {/* Shirt Gradients */}
          <linearGradient id="shirtGrad" x1="110" y1="165" x2="110" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3A1C54" />
            <stop offset="50%" stopColor="#2A143D" />
            <stop offset="100%" stopColor="#1C0D2A" />
          </linearGradient>

          {/* Glasses Frame Gradient */}
          <linearGradient id="glassesGrad" x1="40" y1="90" x2="180" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#251633" />
            <stop offset="50%" stopColor="#140A1D" />
            <stop offset="100%" stopColor="#251633" />
          </linearGradient>

          {/* Glasses Lens Sheen */}
          <linearGradient id="lensSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="30%" stopColor="#E8DDF5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
          </linearGradient>

          {/* Subtle Background Glow behind head */}
          <radialGradient id="avatarBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#542B83" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#291638" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Backdrop Ambient Halo */}
        <circle cx="110" cy="110" r="105" fill="url(#avatarBackdrop)" />

        {/* 1. Shoulders & Modest Mandarin Shirt */}
        <g id="clothing">
          {/* Base Torso */}
          <path
            d="M45 220 C45 185, 75 168, 110 168 C145 168, 175 185, 175 220 Z"
            fill="url(#shirtGrad)"
          />
          {/* Mandarin Collar Band */}
          <path
            d="M86 164 C94 172, 126 172, 134 164 C138 172, 134 186, 110 186 C86 186, 82 172, 86 164 Z"
            fill="#231034"
            stroke="#D8BC86"
            strokeWidth="1.2"
          />
          {/* Champagne Collar Button */}
          <circle cx="110" cy="177" r="2.5" fill="#D8BC86" />
          {/* Placket line */}
          <path d="M110 186 L110 220" stroke="#542B83" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Minimalist shoulder seams */}
          <path d="M60 205 C75 190, 88 184, 96 180" stroke="#542B83" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M160 205 C145 190, 132 184, 124 180" stroke="#542B83" strokeWidth="1" strokeOpacity="0.6" />
        </g>

        {/* 2. Neck */}
        <g id="neck">
          <path
            d="M93 135 L93 170 C100 174, 120 174, 127 170 L127 135 Z"
            fill="url(#neckGrad)"
          />
          {/* Under-chin shadow */}
          <ellipse cx="110" cy="142" rx="17" ry="5" fill="#99623D" opacity="0.6" />
        </g>

        {/* 3. Ears */}
        <g id="ears">
          {/* Left Ear */}
          <ellipse cx="67" cy="112" rx="7.5" ry="12" fill="#CB9268" transform="rotate(-6 67 112)" />
          <ellipse cx="67" cy="112" rx="4" ry="7" fill="#B47B52" opacity="0.6" />
          {/* Right Ear */}
          <ellipse cx="153" cy="112" rx="7.5" ry="12" fill="#CB9268" transform="rotate(6 153 112)" />
          <ellipse cx="153" cy="112" rx="4" ry="7" fill="#B47B52" opacity="0.6" />
        </g>

        {/* 4. Head & Face (Clean-shaven, no beard, no moustache) */}
        <g id="face-base">
          {/* Jaw & Cheeks */}
          <path
            d="M68 98 C68 65, 82 48, 110 48 C138 48, 152 65, 152 98 C152 128, 136 150, 110 150 C84 150, 68 128, 68 98 Z"
            fill="url(#skinGrad)"
          />
          {/* Gentle Cheeks blush */}
          <ellipse cx="84" cy="118" rx="8" ry="4.5" fill="#E89678" opacity="0.3" />
          <ellipse cx="136" cy="118" rx="8" ry="4.5" fill="#E89678" opacity="0.3" />
        </g>

        {/* 5. Modern Clean Hair (Neatly styled, slightly textured on top) */}
        <g id="hair">
          {/* Hair back volume */}
          <path
            d="M65 88 C60 62, 75 32, 110 30 C145 32, 160 62, 155 88 C148 78, 142 75, 134 76 C124 74, 118 64, 104 65 C92 66, 84 72, 74 76 C69 77, 66 82, 65 88 Z"
            fill="url(#hairGrad)"
          />
          {/* Stylish volume sweep on top */}
          <path
            d="M67 68 C74 45, 96 34, 122 34 C146 34, 156 46, 153 66 C143 55, 131 52, 118 53 C105 54, 94 58, 82 65 C76 68, 71 68, 67 68 Z"
            fill="#3F2B4E"
          />
          {/* Sideburns (Tapered, high, and neatly groomed - no beard) */}
          <path d="M68 85 L69 104 L74 98 L74 85 Z" fill="#1C1224" />
          <path d="M152 85 L151 104 L146 98 L146 85 Z" fill="#1C1224" />
        </g>

        {/* 6. Expressive Eyebrows */}
        <g id="eyebrows">
          {/* Left Eyebrow (Warm, slightly arched, friendly) */}
          <path
            d="M80 88 C86 84, 95 84, 101 87"
            stroke="#1D1225"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Right Eyebrow */}
          <path
            d="M119 87 C125 84, 134 84, 140 88"
            stroke="#1D1225"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* 7. Eyes with Natural Blinking CSS Animation */}
        <g id="eyes" className="avatar-blink">
          {/* Left Eye */}
          <ellipse cx="91" cy="99" rx="6" ry="6.5" fill="#FFFFFF" />
          <circle cx="91.5" cy="99" r="4.2" fill="#2E1B10" />
          <circle cx="92.8" cy="97.6" r="1.5" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="129" cy="99" rx="6" ry="6.5" fill="#FFFFFF" />
          <circle cx="128.5" cy="99" r="4.2" fill="#2E1B10" />
          <circle cx="129.8" cy="97.6" r="1.5" fill="#FFFFFF" />
        </g>

        {/* 8. Stylish Geek Glasses ("Four-eyes") */}
        <g id="glasses">
          {/* Glasses Frame: Left Rim (Stylish rounded-square acetate) */}
          <rect
            x="76"
            y="87"
            width="32"
            height="26"
            rx="9"
            fill="url(#lensSheen)"
            stroke="url(#glassesGrad)"
            strokeWidth="3.4"
          />
          {/* Left Lens Glint reflection */}
          <path
            d="M81 92 L98 92"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Glasses Frame: Right Rim */}
          <rect
            x="112"
            y="87"
            width="32"
            height="26"
            rx="9"
            fill="url(#lensSheen)"
            stroke="url(#glassesGrad)"
            strokeWidth="3.4"
          />
          {/* Right Lens Glint reflection */}
          <path
            d="M117 92 L134 92"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Center Bridge (Champagne-gold accent) */}
          <path
            d="M107 96 C109 94, 111 94, 113 96"
            stroke="#D8BC86"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* Glasses Temples (connecting to ears) */}
          <path d="M76 96 L67 98" stroke="#1F132A" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M144 96 L153 98" stroke="#1F132A" strokeWidth="2.8" strokeLinecap="round" />

          {/* Tiny gold hinge studs on temple corners */}
          <circle cx="78" cy="92" r="1" fill="#D8BC86" />
          <circle cx="142" cy="92" r="1" fill="#D8BC86" />
        </g>

        {/* 9. Nose */}
        <g id="nose">
          <path
            d="M109 105 C111 114, 113 117, 110 119 C107 119, 106 117, 104 118"
            stroke="#9F653E"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* 10. Warm, Friendly Clean Smile (Clean shaven - no moustache) */}
        <g id="smile">
          {/* Smile line */}
          <path
            d="M97 129 C103 138, 117 138, 123 129"
            stroke="#7C3B24"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="#8E432A"
          />
          {/* White teeth shine */}
          <path
            d="M100 130 C106 135, 114 135, 120 130 Z"
            fill="#FFFBF5"
          />
          {/* Subtle dimple marks */}
          <circle cx="95" cy="128" r="1" fill="#BA7F59" opacity="0.8" />
          <circle cx="125" cy="128" r="1" fill="#BA7F59" opacity="0.8" />
        </g>
      </svg>

      {/* Embedded CSS for realistic character blinking & natural feel */}
      <style>{`
        @keyframes avatarBlink {
          0%, 94%, 100% {
            transform: scaleY(1);
          }
          96%, 98% {
            transform: scaleY(0.1);
          }
        }
        .avatar-blink {
          transform-origin: 110px 99px;
          animation: avatarBlink 4.2s infinite ease-in-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .avatar-blink {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};
