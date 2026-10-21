/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapped to rich obsidian graphite & slate
        navy: {
          DEFAULT: '#12151c',
          950: '#0c0e12', // Deepest graphite black
          900: '#12151c', // Rich graphite surface
          800: '#181d26', // Elevated card surface
          700: '#222836',
          600: '#313a4d',
          500: '#45526c',
          200: '#cbd5e1',
          100: '#e2e8f0',
          50: '#f8fafc',
        },
        graphite: {
          950: '#0c0e12',
          900: '#12151c',
          850: '#181d26',
          800: '#202634',
          750: '#283042',
          700: '#333e54',
          600: '#485672',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        gold: {
          DEFAULT: '#c5a880',
          dark: '#9f834d',
          text: '#9f834d',
          light: '#dfc79b',
          soft: '#fbf7ee',
          50: '#fdfbf7',
          glow: 'rgba(197, 168, 128, 0.2)',
          500: '#c5a880',
          600: '#b09062',
          700: '#957549',
          800: '#7a5e3a',
        },
        'gold-text': '#9f834d',
        accent: {
          DEFAULT: '#c5a880',
          dark: '#9f834d',
          light: '#dfc79b',
          glow: 'rgba(197, 168, 128, 0.2)',
        },
        offwhite: {
          DEFAULT: '#F8FAFC',
          200: '#E2E8F0',
          400: '#94A3B8',
          600: '#64748B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        xs: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        soft: '0 2px 15px -3px rgba(12, 14, 18, 0.05), 0 4px 6px -2px rgba(12, 14, 18, 0.02)',
        card: '0 4px 20px -2px rgba(12, 14, 18, 0.08), 0 2px 6px -1px rgba(12, 14, 18, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(12, 14, 18, 0.14), 0 4px 12px -2px rgba(12, 14, 18, 0.06)',
        gold: '0 4px 20px -2px rgba(197, 168, 128, 0.25)',
        'gold-sm': '0 2px 12px rgba(197, 168, 128, 0.18)',
        'gold-glow': '0 0 30px rgba(197, 168, 128, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -18px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.96) translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'scale(1) translate3d(0, 0, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translate3d(30px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, 14px, 0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.12' },
          '50%': { opacity: '0.22' },
        },
      },
    },
  },
  plugins: [],
};
