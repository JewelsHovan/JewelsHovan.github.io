/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg':        '#0a0a0f',
        'cyber-fg':        '#e0e0e0',
        'cyber-card':      '#12121a',
        'cyber-card-hover':'#1a1a2e',
        'cyber-muted':     '#1c1c2e',
        'cyber-muted-fg':  '#6b7280',
        'cyber-accent':    '#00ff88',
        'cyber-magenta':   '#ff00ff',
        'cyber-cyan':      '#00d4ff',
        'cyber-border':    '#2a2a3a',
        'cyber-ring':      '#00ff88',
        'cyber-destructive':'#ff3366',
        'dark-blue':    '#0a0a0f',
        'navy':         '#1c1c2e',
        'slate':        '#2a2a3a',
        'steel-blue':   '#2a2a3a',
        'light-blue':   '#6b7280',
        'accent-cyan':  '#00ff88',
        'accent-teal':  '#00d4ff',
        'accent-purple':'#ff00ff',
        'text-light':   '#e0e0e0',
        'text-muted':   '#6b7280',
        'card-bg':      '#12121a',
        'card-hover':   '#1a1a2e',
      },
      fontFamily: {
        'cyber-heading': ['"Orbitron"', '"Share Tech Mono"', 'monospace'],
        'cyber-body':    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        'cyber-label':   ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-green':       '0 0 5px #00ff88, 0 0 20px rgba(0,255,136,0.3)',
        'neon-green-lg':    '0 0 10px #00ff88, 0 0 40px rgba(0,255,136,0.4)',
        'neon-magenta':     '0 0 5px #ff00ff, 0 0 20px rgba(255,0,255,0.3)',
        'neon-magenta-lg':  '0 0 10px #ff00ff, 0 0 40px rgba(255,0,255,0.4)',
        'neon-cyan':        '0 0 5px #00d4ff, 0 0 20px rgba(0,212,255,0.3)',
        'neon-cyan-lg':     '0 0 10px #00d4ff, 0 0 40px rgba(0,212,255,0.4)',
      },
      animation: {
        'glitch':       'glitch 3s infinite',
        'blink':        'blink 1s step-end infinite',
        'rgb-shift':    'rgbShift 4s ease-in-out infinite',
        'cyber-pulse':  'cyberPulse 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%':      { transform: 'translate(-2px, 2px)' },
          '40%':      { transform: 'translate(-2px, -2px)' },
          '60%':      { transform: 'translate(2px, 2px)' },
          '80%':      { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        rgbShift: {
          '0%, 100%': { textShadow: '2px 0 #ff00ff, -2px 0 #00d4ff' },
          '50%':      { textShadow: '-2px 0 #ff00ff, 2px 0 #00d4ff' },
        },
        cyberPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #00ff88, 0 0 20px rgba(0,255,136,0.3)' },
          '50%':      { boxShadow: '0 0 10px #00ff88, 0 0 40px rgba(0,255,136,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
