/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#641F2B',
          deep: '#641F2B',
          dark: '#45151D',
          darker: '#301015',
          light: '#852B3A',
        },
        wine: {
          DEFAULT: '#45151D',
          dark: '#2E0E14',
          deep: '#45151D',
        },
        gold: {
          antique: '#C5A45C',
          champagne: '#D8C49A',
          light: '#F4E7CE',
          shimmer: '#E8D5B0',
          dark: '#8C6F32',
        },
        ivory: {
          DEFAULT: '#F8F4EC',
          warm: '#EEE5D7',
          soft: '#FAF7F2',
        },
        cream: {
          DEFAULT: '#EEE5D7',
          light: '#F5EFE6',
          dark: '#D8CCA8',
        },
        weddingBrown: '#301D1B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        royal: ['"Cinzel"', 'Cinzel Decorative', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4E7CE 0%, #C5A45C 50%, #8C6F32 100%)',
        'royal-gradient': 'linear-gradient(180deg, #45151D 0%, #641F2B 50%, #301015 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FAF7F2 0%, #EEE5D7 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(197, 164, 92, 0.15)',
        'gold-glow': '0 0 25px rgba(197, 164, 92, 0.4)',
        'wax-seal': '0 10px 25px rgba(30, 8, 12, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

