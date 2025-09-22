/** @type {import('tailwindcss').Config} */
module.exports =  {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: { DEFAULT: '#6366F1' },
        secondary: { DEFAULT: '#22D3EE' },
        accent: { DEFAULT: '#F59E0B' },
          
      },
      backgroundImage: {
        // use royalty-free galaxy images you place into /src/assets
        'galaxy-1': "url('/src/assets/galaxy-1.jpg')",
        'galaxy-2': "url('/src/assets/galaxy-2.jpg')",
        'noise': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"/>')",
      },
      keyframes: {
        float: { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-6px)' } },
        pulseGlow: { '0%,100%': { opacity: 0.4 }, '50%': { opacity: 0.8 } },
        gradientMove: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
        gradientMove: 'gradientMove 12s linear infinite',
      },
    },
  },
  plugins: [],
}
