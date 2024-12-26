import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'layout-12-r': ['12px', { lineHeight: '100%', letterSpacing: '0%', fontWeight: '400' }],
        'layout-14-r': ['14px', { lineHeight: '100%', letterSpacing: '0%', fontWeight: '400' }],
        'layout-16-b': ['16px', { lineHeight: '100%', letterSpacing: '0%', fontWeight: '700' }],
        'layout-28-b': ['28px', { lineHeight: '100%', letterSpacing: '0%', fontWeight: '700' }],
      },
      colors: {
        gl: {
          'grayscale-100': 'rgba(245, 245, 245, 1)',
          'grayscale-200': 'rgba(158, 158, 158, 1)',
          'grayscale-300': 'rgba(128, 128, 128, 1)',
          'green-base': 'rgba(13, 152, 0, 1)',
          'green-opacity-30': 'rgba(13, 152, 0, 0.3)',
          'green-opacity-40': 'rgba(182, 224, 178, 0.4)',
          'green-opacity-50': 'rgba(13, 152, 0, 0.5)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config
