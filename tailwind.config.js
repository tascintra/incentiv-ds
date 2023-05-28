/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': ['1.75rem', '2.25rem'],
      },

      lineHeight: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        11: '2.75rem',
      },

      colors: {
        neutral: {
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
        },
        primary: {
          50: '#E8F1FC',
          500: '#1B74E4',
          600: '#165DB6',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          500: '#667085',
          400: '#98A2B3',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        info: {
          success: {
            500: '#12B76A',
            600: '#039855',
          },
          error: {
            500: '#F04438',
          },
          destructive: {
            500: '#EF4444',
          },
        },
      },

      boxShadow: {
        sidebar: '0px -148px 112px -5px rgba(10, 26, 43, 0.08)',
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  plugins: [],
}
