/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EDE4D6',
          400: '#DFCDB7',
          DEFAULT: '#FAF7F2',
        },
        charcoal: {
          900: '#12100E',
          800: '#171512',
          700: '#23201C',
          600: '#34302B',
          DEFAULT: '#171512',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F4ECE0',
          200: '#E8D5BC',
          300: '#DCBE98',
          400: '#C9A673',
          500: '#B89355',
          600: '#9E7A3E',
          700: '#7F5E2B',
          DEFAULT: '#B89355',
        },
        muted: {
          DEFAULT: '#756F67',
          light: '#9E978E',
          dark: '#524D46',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.15em',
      },
      boxShadow: {
        'soft-gold': '0 10px 30px -10px rgba(184, 147, 85, 0.15)',
        'luxury': '0 20px 40px -15px rgba(23, 21, 18, 0.07)',
        'elevated': '0 30px 60px -20px rgba(23, 21, 18, 0.12)',
      }
    },
  },
  plugins: [],
}
