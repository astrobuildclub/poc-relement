/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fs-8': 'var(--fs-8)',
        'fs-7': 'var(--fs-7)',
        'fs-6': 'var(--fs-6)',
        'fs-5': 'var(--fs-5)',
        'fs-4': 'var(--fs-4)',
        'fs-3': 'var(--fs-3)',
        'fs-2': 'var(--fs-2)',
        'fs-1': 'var(--fs-1)',
        'fs-0': 'var(--fs-0)',
        'fs--1': 'var(--fs--1)',
        'fs--2': 'var(--fs--2)',
        'fs--3': 'var(--fs--3)',
      },
      /* Spacing: use arbitrary values p-[var(--space-xl)], gap-[var(--space-l)], etc. */
      maxWidth: {
        content: 'var(--content-max-width)',
      },
    },
  },
  plugins: [],
};
