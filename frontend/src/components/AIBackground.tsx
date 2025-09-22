import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  hue: number;
}

const generateParticles = (count = 28): Particle[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8,
    hue: Math.floor(Math.random() * 300),
  }));
};

const AIBackground: React.FC<{ className?: string }> = ({ className }) => {
  const particles = useMemo(() => generateParticles(), []);

  return (
    <div className={"pointer-events-none absolute inset-0 overflow-hidden " + (className || '')}>
      {/* Core radial gradient / base */}
      <div className="absolute inset-0 bg-ai-core" />
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.25),transparent_60%)]" />
      {/* Subtle lines / grid (animated) */}
      <div className="absolute inset-0 opacity-30 will-change-transform animate-grid-drift">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(124,92,255,0.12)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 mix-blend-screen">
        {particles.map(p => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 1, 0.4, 1, 0],
              scale: [0.4, 1, 1.1, 0.9, 0.4],
              x: [p.x + '%', p.x + 2 + '%', p.x - 1 + '%', p.x + '%'],
              y: [p.y + '%', p.y - 3 + '%', p.y + 1 + '%', p.y + '%'],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="absolute rounded-full shadow-neon-violet"
            style={{
              width: p.size,
              height: p.size,
              left: p.x + '%',
              top: p.y + '%',
              background: `radial-gradient(circle, hsla(${p.hue},85%,65%,0.9), hsla(${p.hue},85%,55%,0.15))`,
              filter: 'blur(0.5px) saturate(130%)',
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 400\'> <filter id=\'n\'> <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4'/> </filter> <rect width=\'400\' height=\'400\' filter=\'url(%23n)\' opacity=\'0.35\'/> </svg>')]" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.55))]" />
    </div>
  );
};

export default AIBackground;
