import React from 'react';

interface ThanosLogoProps {
  className?: string;
  size?: number | string;
}

export const ThanosLogo: React.FC<ThanosLogoProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      aria-label="Logo Academia Thanos - High Performance Academy"
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&family=Montserrat:wght@800;900&display=swap');
            .thanos-svg-title {
              font-family: 'Orbitron', 'Montserrat', 'Arial Black', sans-serif;
              font-weight: 900;
              fill: #FFFFFF;
              text-anchor: middle;
              letter-spacing: 0.08em;
            }
            .thanos-svg-sub {
              font-family: 'Montserrat', 'Orbitron', 'Arial Black', sans-serif;
              font-weight: 900;
              fill: #FFFFFF;
              text-anchor: middle;
              letter-spacing: 0.22em;
              font-size: 15px;
            }
          `}
        </style>
      </defs>

      {/* Background Black Circle */}
      <circle cx="250" cy="250" r="248" fill="#000000" />

      {/* Outer Concentric White Rings */}
      <circle cx="250" cy="250" r="240" fill="none" stroke="#FFFFFF" strokeWidth="6" />
      <circle cx="250" cy="250" r="226" fill="none" stroke="#FFFFFF" strokeWidth="4.5" />

      {/* Inner Gauntlet Emblem Circular Frame */}
      <circle cx="250" cy="154" r="76" fill="#000000" stroke="#FFFFFF" strokeWidth="5" />

      {/* Infinity Gauntlet Drawing (White Outline on Black) */}
      <g transform="translate(250, 154)" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Gauntlet Forearm / Wrist Armor Base */}
        <path
          d="M-36,52 L-30,22 L-38,12 L-36,-2 L-30,-12 L-26,-22 L-18,-32 L18,-32 L26,-22 L30,-12 L36,-2 L38,12 L30,22 L36,52 Z"
          strokeWidth="3"
          fill="#000000"
        />

        {/* Forearm Plate Notches and Segments */}
        <path d="M-30,22 L30,22" strokeWidth="2.5" />
        <path d="M-26,36 L26,36" strokeWidth="2" />
        <path d="M-22,48 L22,48" strokeWidth="2" />

        {/* Wrist V-cut Chevron Plate */}
        <path d="M-30,14 L0,22 L30,14" strokeWidth="2.5" />
        <path d="M-24,2 L0,9 L24,2" strokeWidth="2.5" />

        {/* Wrist Bolt / Mechanical Cylinder on side */}
        <circle cx="36" cy="1" r="5" strokeWidth="2.5" fill="#000000" />
        <circle cx="36" cy="1" r="2" fill="#FFFFFF" />

        {/* Clenched Fist Knuckles (Top 4 Fingers) */}
        {/* Pinky Finger */}
        <path d="M-24,-24 C-25,-36 -19,-44 -14,-44 C-10,-44 -8,-38 -8,-32" strokeWidth="2.5" fill="#000000" />
        {/* Ring Finger */}
        <path d="M-14,-34 C-14,-44 -9,-50 -4,-50 C1,-50 2,-44 2,-34" strokeWidth="2.5" fill="#000000" />
        {/* Middle Finger (Highest) */}
        <path d="M-2,-34 C-2,-48 4,-54 9,-54 C15,-54 16,-46 16,-34" strokeWidth="2.5" fill="#000000" />
        {/* Index Finger */}
        <path d="M12,-32 C13,-44 19,-48 24,-48 C29,-48 30,-40 28,-30" strokeWidth="2.5" fill="#000000" />

        {/* Thumb (Curled on Right Side) */}
        <path d="M28,-24 C36,-24 40,-16 38,-4 C36,6 30,12 24,12" strokeWidth="2.5" fill="#000000" />
        <ellipse cx="32" cy="-8" rx="3.5" ry="5.5" strokeWidth="2" fill="#000000" transform="rotate(25, 32, -8)" />
        <ellipse cx="32" cy="-8" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(25, 32, -8)" />

        {/* Knuckle Gem Sockets (4 Stones) */}
        <ellipse cx="-18" cy="-28" rx="3.5" ry="3" strokeWidth="2" fill="#000000" />
        <circle cx="-18" cy="-28" r="1.5" fill="#FFFFFF" />

        <ellipse cx="-7" cy="-30" rx="3.5" ry="3" strokeWidth="2" fill="#000000" />
        <circle cx="-7" cy="-30" r="1.5" fill="#FFFFFF" />

        <ellipse cx="6" cy="-31" rx="4" ry="3.5" strokeWidth="2" fill="#000000" />
        <circle cx="6" cy="-31" r="1.5" fill="#FFFFFF" />

        <ellipse cx="19" cy="-27" rx="3.5" ry="3" strokeWidth="2" fill="#000000" />
        <circle cx="19" cy="-27" r="1.5" fill="#FFFFFF" />

        {/* Finger Joint Creases & Segments */}
        <path d="M-21,-18 L-13,-20 L-3,-21 L8,-21 L20,-18" strokeWidth="1.8" />
        <path d="M-19,-11 L-12,-12 L-3,-13 L8,-13 L18,-11" strokeWidth="1.8" />

        {/* Center Mind Stone (Large Stone on Back of Hand) */}
        <path
          d="M0,-16 C12,-16 16,-8 16,0 C16,8 8,13 0,14 C-8,13 -16,8 -16,0 C-16,-8 -12,-16 0,-16 Z"
          strokeWidth="2.2"
          fill="#000000"
        />
        <ellipse cx="0" cy="-1" rx="9" ry="8" strokeWidth="2.5" fill="#000000" />
        <ellipse cx="0" cy="-1" rx="5" ry="4.5" strokeWidth="1.5" fill="#000000" />
        <circle cx="0" cy="-1" r="2.5" fill="#FFFFFF" />
      </g>

      {/* Typography: THANOS */}
      <text x="250" y="312" className="thanos-svg-title" fontSize="68">
        THANOS
      </text>

      {/* Typography: HIGH PERFORMANCE ACADEMY */}
      <text x="250" y="348" className="thanos-svg-sub">
        HIGH PERFORMANCE ACADEMY
      </text>
    </svg>
  );
};
