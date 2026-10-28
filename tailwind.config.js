const v = (n) => `rgb(var(--${n}) / <alpha-value>)`;
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: { DEFAULT: v('ink'), 2: v('ink2'), line: v('line') }, lime: v('accent') },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'], mono: ['"JetBrains Mono"', 'monospace'] },
  } },
  plugins: [],
};
