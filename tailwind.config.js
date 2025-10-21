module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B5E20", // deep-green-800
          50: "#E8F5E8", // light-green-50
          100: "#C8E6C9", // light-green-100
          200: "#A5D6A7", // light-green-200
          300: "#81C784", // light-green-300
          400: "#66BB6A", // light-green-400
          500: "#4CAF50", // light-green-500
          600: "#43A047", // light-green-600
          700: "#388E3C", // light-green-700
          800: "#2E7D32", // light-green-800
          900: "#1B5E20", // light-green-900
        },
        secondary: {
          DEFAULT: "#37474F", // blue-gray-600
          50: "#ECEFF1", // blue-gray-50
          100: "#CFD8DC", // blue-gray-100
          200: "#B0BEC5", // blue-gray-200
          300: "#90A4AE", // blue-gray-300
          400: "#78909C", // blue-gray-400
          500: "#607D8B", // blue-gray-500
          600: "#546E7A", // blue-gray-600
          700: "#455A64", // blue-gray-700
          800: "#37474F", // blue-gray-800
          900: "#263238", // blue-gray-900
        },
        accent: {
          DEFAULT: "#FF6F00", // orange-600
          50: "#FFF3E0", // orange-50
          100: "#FFE0B2", // orange-100
          200: "#FFCC80", // orange-200
          300: "#FFB74D", // orange-300
          400: "#FFA726", // orange-400
          500: "#FF9800", // orange-500
          600: "#FF8F00", // orange-600
          700: "#FF6F00", // orange-700
          800: "#E65100", // orange-800
          900: "#BF360C", // orange-900
        },
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#212121", // gray-800
          secondary: "#616161", // gray-600
        },
        success: {
          DEFAULT: "#2E7D32", // green-800
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          500: "#4CAF50", // green-500
        },
        warning: {
          DEFAULT: "#F57C00", // amber-600
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          500: "#FFC107", // amber-500
        },
        error: {
          DEFAULT: "#C62828", // red-700
          50: "#FFEBEE", // red-50
          100: "#FFCDD2", // red-100
          500: "#F44336", // red-500
        },
        border: {
          DEFAULT: "#E0E0E0", // gray-300
          light: "#F5F5F5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
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
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'modal': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionTimingFunction: {
        'micro': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'micro': '200ms',
        'smooth': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
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
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-micro': {
          transition: 'all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.transition-smooth': {
          transition: 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}