/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': 'Figtree, sans-serif',
      },
      colors: {
        'corporate-color': '#007AFF',
        'corporate-lightColor': '#f0f7ff',
      },
      height: {
        'bannerSlider': 'calc(100vh - 136px)',
      },
      backgroundImage: {
        'footer-bg': "url('/images/banner/banner2.jpg')",
        'cta-bg': "url('/images/banner/banner4.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

