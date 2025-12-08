/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Saddle Brown
        primary: {
          DEFAULT: "#8B4513", // brown-700
          50: "#F5EDE6",
          100: "#E6D4C4",
          200: "#D4B89E",
          300: "#C29C78",
          400: "#B5855C",
          500: "#A86F40",
          600: "#8B4513", // brown-700
          700: "#6D3610",
          800: "#4F270C",
          900: "#311808",
        },
        // Secondary Colors - Chocolate Orange
        secondary: {
          DEFAULT: "#D2691E", // chocolate
          50: "#FBF2EC",
          100: "#F5DCC9",
          200: "#EEC4A3",
          300: "#E7AC7D",
          400: "#E19860",
          500: "#DB8443",
          600: "#D2691E", // chocolate
          700: "#A85318",
          800: "#7E3E12",
          900: "#54290C",
        },
        // Accent Colors - Vibrant Coral Orange
        accent: {
          DEFAULT: "#FF6B35", // coral-orange
          50: "#FFF0EC",
          100: "#FFD9CE",
          200: "#FFBFAD",
          300: "#FFA58C",
          400: "#FF8B6B",
          500: "#FF6B35", // coral-orange
          600: "#E64E1A",
          700: "#B83D14",
          800: "#8A2D0F",
          900: "#5C1E0A",
        },
        // Background Colors
        background: "#FAFAF9", // warm-gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#2D1810", // brown-900
          secondary: "#6B4E3D", // brown-600
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#E8F5E8",
          100: "#C3E6C3",
          200: "#9DD69D",
          300: "#77C677",
          400: "#51B651",
          500: "#228B22", // forest-green
          600: "#1B6F1B",
          700: "#145314",
          800: "#0D370D",
          900: "#061B06",
        },
        warning: {
          DEFAULT: "#FF8C00", // dark-orange
          50: "#FFF5E6",
          100: "#FFE4BF",
          200: "#FFD299",
          300: "#FFC073",
          400: "#FFAE4D",
          500: "#FF8C00", // dark-orange
          600: "#CC7000",
          700: "#995400",
          800: "#663800",
          900: "#331C00",
        },
        error: {
          DEFAULT: "#DC143C", // crimson
          50: "#FCEAEE",
          100: "#F7C5D0",
          200: "#F2A0B2",
          300: "#ED7B94",
          400: "#E85676",
          500: "#E33158",
          600: "#DC143C", // crimson
          700: "#B0102F",
          800: "#840C23",
          900: "#580817",
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(139, 69, 19, 0.1)',
        'warm': '0 1px 3px 0 rgba(139, 69, 19, 0.1), 0 1px 2px 0 rgba(139, 69, 19, 0.1)',
        'warm-md': '0 4px 6px -1px rgba(139, 69, 19, 0.15), 0 2px 4px -1px rgba(139, 69, 19, 0.1)',
        'warm-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.15), 0 4px 6px -2px rgba(139, 69, 19, 0.1)',
        'warm-xl': '0 20px 25px -5px rgba(139, 69, 19, 0.2), 0 10px 10px -5px rgba(139, 69, 19, 0.1)',
        'elevation-1': '0 2px 4px rgba(139, 69, 19, 0.1)',
        'elevation-2': '0 4px 8px rgba(139, 69, 19, 0.12)',
        'elevation-3': '0 8px 16px rgba(139, 69, 19, 0.14)',
        'elevation-4': '0 16px 24px rgba(139, 69, 19, 0.16)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      scale: {
        '98': '0.98',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}