/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Vibrant Orange (for primary buttons and highlights)
        secondary: "#33FF57", // Fresh Green (for success messages and notifications)
        accent: "#FFC300", // Warm Yellow (for attention-grabbing elements like notifications)
        background: "#F8F9FA", // Light Grey (for the main background)
        text: "#333333", // Dark Grey (for primary text and icons)
        border: "#E0E0E0", // Light Grey (for borders and dividers)
        success: "#28A745", // Green (for positive actions and messages)
        warning: "#FFC107", // Amber (for warnings and important notices)
        error: "#DC3545", // Red (for errors and critical alerts)
        highlight: "#FFD700", // Gold (for special highlights and important elements)
        
        darkPrimary: "#1E1E1E", // Dark Grey (for primary background in dark mode)
        darkSecondary: "#28A745", // Green (for success messages and notifications in dark mode)
        darkAccent: "#FFC300", // Warm Yellow (for attention-grabbing elements in dark mode)
        darkBackground: "#1E1E1E", // Dark Grey (for the main background in dark mode)
        darkText: "#FFFFFF", // White (for primary text and icons in dark mode)
        darkOnHover: "#505050", // Dark Grey (for hover states on buttons and links in dark mode)
        darkBorder: "#333333", // Medium Dark Grey (for borders and dividers in dark mode)
        darkSuccess: "#28A745", // Green (for positive actions and messages in dark mode)
        darkWarning: "#FFC107", // Amber (for warnings and important notices in dark mode)
        darkError: "#FF5252", // Bright Red (for errors and critical alerts in dark mode)
        darkHighlight: "#FFD700", // Gold (for special highlights and important elements in dark mode)
        
      },
      fontSize: {
        cXS: ".75rem",
        cSM: ".875rem",
        cMD: "1rem",
        cLG: "1.125rem",
        cXL: "1.25rem",
        c2XL: "1.5rem",
        c3XL: "1.875rem",
        c4XL: "2.25rem",
        C5XL: "3rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
