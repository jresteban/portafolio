/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slide-up 0.5s ease 0s 1 normal backwards'
      },
      keyframes: {
        'slide-up': {
          from: {
            opacity: 0,
            transform: 'translateY(40px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}
