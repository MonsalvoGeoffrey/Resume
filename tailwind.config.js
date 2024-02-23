/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.{html,js,_hs}"],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
    },
  },
  plugins: [],
}

