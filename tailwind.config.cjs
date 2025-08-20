/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a3186ff",   // Bright Blue - Trust & focus
        secondary: "#f59e0b", // Warm Amber - Optimismi
        accent: "#22c55e",    // Green - Growth & success
        background: "#f9fafb",// Soft background
        text: "#1f2937",      // Dark gray for reading comfort
        highlight: "#9333ea", // Purple - Creativity
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
