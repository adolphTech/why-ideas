/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"Source Code Pro"', 'monospace']
      },
      colors: {
        // AI / ML enhanced palette
        cosmic: {
          50: '#0f0b18',
          100: '#150f23',
          200: '#1d1530',
          300: '#261d3d',
          400: '#31264d',
          500: '#3d3060',
          600: '#4a3b76',
          700: '#5b4a92',
          800: '#6d59af',
          900: '#7f69cc',
        },
        neon: {
          cyan: '#06B6D4',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          magenta: '#D946EF',
          lime: '#A3E635',
          amber: '#F59E0B'
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        // New
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
        'grid-drift': 'grid-drift 20s linear infinite',
        'orbit': 'orbit 12s linear infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'shimmer-border': 'shimmer-border 4s linear infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'glow-pulse': {
          '0%,100%': { filter: 'brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'brightness(1.4)', transform: 'scale(1.03)' }
        },
        'grid-drift': {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-40px) translateX(20px)' },
          '100%': { transform: 'translateY(0) translateX(0)' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' }
        },
        'particle-float': {
          '0%,100%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-25px) scale(1.15)', opacity: '1' }
        },
        'shimmer-border': {
          '0%': { 'background-position': '0% 50%' },
            '100%': { 'background-position': '200% 50%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh-light': 'linear-gradient(-45deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)',
        'gradient-mesh-dark': 'linear-gradient(-45deg, #1e1b4b, #312e81, #1e40af, #1e3a8a)',
        'ai-core': 'radial-gradient(circle at 30% 20%, rgba(139,92,246,0.25), rgba(6,182,212,0) 60%), linear-gradient(135deg,#0b0f17,#161b29,#0b0f17)',
        'ai-lines': 'repeating-linear-gradient(90deg, rgba(124,92,255,0.08) 0, rgba(124,92,255,0.08) 1px, transparent 1px, transparent 80px)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(99, 102, 241, 0.1)',
        'neon-cyan': '0 0 10px rgba(6,182,212,0.6), 0 0 25px rgba(6,182,212,0.35)',
        'neon-violet': '0 0 10px rgba(139,92,246,0.6), 0 0 25px rgba(139,92,246,0.35)',
      },
    },
  },
  plugins: [],
  safelist: [
    'animate-glow-pulse','animate-grid-drift','animate-orbit','animate-particle-float','animate-shimmer-border'
  ]
}