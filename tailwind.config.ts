import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        surface: {
          50: '#f8fafc',
          100: '#eef2f5',
          200: '#e2e8f0',
          900: '#0f172a',
        },
        accent: {
          50: '#f2f7ff',
          100: '#e6edff',
          300: '#c2d4ff',
          500: '#6b7bff',
          600: '#5866e9',
          700: '#3d47c3',
        },
        neutral: {
          700: '#1f2937',
          500: '#4b5563',
          400: '#6b7280',
          300: '#9ca3af',
        },
      },
      boxShadow: {
        soft: '0 16px 60px -25px rgba(20, 31, 61, 0.25)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
