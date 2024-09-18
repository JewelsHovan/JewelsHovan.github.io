/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F0F4F8', // Very light blue-gray
          200: '#D9E2EC', // Light blue-gray
          300: '#BCCCDC', // Medium light blue-gray
          400: '#9FB3C8', // Medium blue-gray
          500: '#829AB1', // Blue-gray
        },
        neutral: {
          100: '#F7F7F7', // Very light gray
          200: '#E1E1E1', // Light gray
          300: '#CFCFCF', // Medium light gray
          400: '#B1B1B1', // Medium gray
          500: '#9E9E9E', // Gray
        },
        accent: {
          blue: '#4A90E2', // Accent blue
          gray: '#607D8B', // Accent blue-gray
          green: '#2ecc71', // Bright green
          purple: '#9b59b6', // Bright purple
        },
        secondary: {
          400: '#e74c3c', // Bright red
          700: '#c0392b', // Darker red for hover
        },
        // Adding your custom colors
        'paynes_gray': {
          DEFAULT: '#326273',
          100: '#0a1317',
          200: '#14272d',
          300: '#1e3a44',
          400: '#284d5b',
          500: '#326273',
          600: '#4789a2',
          700: '#6eaac0',
          800: '#9fc6d5',
          900: '#cfe3ea',
        },
        'moonstone': {
          DEFAULT: '#5c9ead',
          100: '#122023',
          200: '#244047',
          300: '#35606a',
          400: '#47808d',
          500: '#5c9ead',
          600: '#7db2bd',
          700: '#9dc5ce',
          800: '#bed8de',
          900: '#deecef',
        },
        'anti_flash_white': {
          DEFAULT: '#eeeeee',
          100: '#2f2f2f',
          200: '#5f5f5f',
          300: '#8e8e8e',
          400: '#bebebe',
          500: '#eeeeee',
          600: '#f1f1f1',
          700: '#f4f4f4',
          800: '#f8f8f8',
          900: '#fbfbfb',
        },
        'dark_purple': {
          DEFAULT: '#190b28',
          100: '#050208',
          200: '#0a0410',
          300: '#0f0718',
          400: '#140920',
          500: '#190b28',
          600: '#461f70',
          700: '#7332b8',
          800: '#a16fd8',
          900: '#d0b7eb',
        },
        'russian_violet': {
          DEFAULT: '#0d0630',
          100: '#03010a',
          200: '#050214',
          300: '#08041e',
          400: '#0b0528',
          500: '#0d0630',
          600: '#231083',
          700: '#391ad4',
          800: '#755deb',
          900: '#baaef5',
        },
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
      },
      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'DEFAULT': 'var(--border-radius-base)',
        'lg': 'var(--border-radius-lg)',
      },
      textColor: {
        'header': '#374151', // This is the color used in the Projects page
      },
    },
  },
  plugins: [],
}