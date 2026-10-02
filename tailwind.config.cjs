// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // SKILL.md Token Palette grounded in Electrical Engineering & PCB Telemetry
        obsidian: '#080B11',   // Core Base Background
        substrate: '#111726',  // Panel Surface
        silicon: '#1E293B',    // Structural Border
        copper: '#D97724',     // Primary Accent: PCB Copper Trace Metal
        volt: '#38BDF8',       // Secondary Accent: Electric Voltage Telemetry
        signal: '#F59E0B',     // Status Accent: High-Voltage Signal Amber
        phosphor: '#10B981',   // Telemetry Accent: Circuit Active Phosphor Green
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
};
