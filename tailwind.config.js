/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/.js",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'large-screen': "url('./images/bg-sidebar-mobile.svg')",
        'small-screen': "url('./src/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}

