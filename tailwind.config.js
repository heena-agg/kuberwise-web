/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces and text. These flip inside `.on-ink`, so components that
        // use them work unchanged on light and dark sections alike.
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        raised: 'rgb(var(--raised) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        'ink-faint': 'rgb(var(--ink-faint) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',

        // The logo's structural colour: navy on light, light ink on dark.
        'brand-ink': 'rgb(var(--brand-ink) / <alpha-value>)',
        // The pot inside the mark, which reads as a hole punched in the hexagon.
        'mark-void': 'rgb(var(--mark-void) / <alpha-value>)',

        // Per-theme accent: gold under `.theme-kuberwise`, blue under
        // `.theme-stockraze`.
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-bright': 'rgb(var(--accent-bright) / <alpha-value>)',
        'accent-contrast': 'rgb(var(--accent-contrast) / <alpha-value>)',

        // Fixed brand colours, for cross-brand references (e.g. a Stockraze
        // card on a Kuberwise page) and for the logo, which must not shift
        // with the theme. Sampled from the supplied logo artwork.
        navy: { DEFAULT: '#223962', deep: '#1A2C4D' },
        gold: { DEFAULT: '#DE9F42', deep: '#9C6720' },
        blue: { DEFAULT: '#1D4ED8', bright: '#3B82F6' },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        // Logo lockup only. The artwork is set in a geometric heavy sans, so
        // it is loaded separately from the page faces and used nowhere else.
        brand: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.01em' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.65rem' }],
        lg: ['1.0625rem', { lineHeight: '1.75rem' }],
        xl: ['1.1875rem', { lineHeight: '1.85rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.015em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        shell: '76rem',
        measure: '38ch',
        prose: '62ch',
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        hairline: '0 1px 0 0 rgb(var(--line) / 1)',
        lift: '0 1px 2px 0 rgb(15 17 21 / 0.04), 0 12px 32px -12px rgb(15 17 21 / 0.14)',
      },
      keyframes: {
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
