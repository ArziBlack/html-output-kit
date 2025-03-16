/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "#e2e8f0",
          input: "#e2e8f0",
          ring: "#94a3b8",
          background: "#ffffff",
          foreground: "#0f172a",
          primary: {
            DEFAULT: "#2563eb",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#64748b",
            foreground: "#ffffff",
          },
          destructive: {
            DEFAULT: "#dc2626",
            foreground: "#ffffff",
          },
          muted: {
            DEFAULT: "#f1f5f9",
            foreground: "#64748b",
          },
          accent: {
            DEFAULT: "#f59e0b",
            foreground: "#ffffff",
          },
          popover: {
            DEFAULT: "#ffffff",
            foreground: "#0f172a",
          },
          card: {
            DEFAULT: "#ffffff",
            foreground: "#0f172a",
          },
        },
        borderRadius: {
          lg: "8px",
          md: "6px",
          sm: "4px",
        },
      },
    },
    plugins: [
    //   require("tailwindcss-animate")
    ],
  }
  
  