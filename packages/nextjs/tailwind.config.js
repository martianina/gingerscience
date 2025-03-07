/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "customDarkTheme",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        customDarkTheme: {
          primary: "#D9480F", // Ginger Red (MC1R Core Color)
          "primary-content": "#FFFFFF",
          secondary: "#E25822", // Auburn Orange (Rich Accent)
          "secondary-content": "#FAF3E0", // Off-White (Light Contrast)
          accent: "#FFDAB9", // Peach (Background & Soft Highlights)
          "accent-content": "#1E1E1E", // Soft Black for Text
          neutral: "#FAF3E0", // Off-White (Clean & Modern Base)
          "neutral-content": "#1E1E1E", // Soft Black for Readability
          "base-100": "#FFDAB9", // Pale Peach (Main Background)
          "base-200": "#FAF3E0", // Lighter Cream Tone for Sections
          "base-300": "#FFDAB9", // Soft Peach for Additional Layers
          "base-content": "#1E1E1E", // Soft Black for Text Contrast
          info: "#E25822", // Auburn Orange for Emphasis
          success: "#D9480F", // Ginger Red for Calls to Action
          warning: "#FFDAB9", // Peach for Warm Warnings
          error: "#E25822", // Auburn Orange for Errors

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "avenir-next": ["Avenir Next", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
      },
      boxShadow: {
        "md-glow": "0 4px 10px rgba(217, 72, 15, 0.4)", // Subtle MC1R Glow
        "lg-glow": "0 6px 15px rgba(226, 88, 34, 0.5)", // Auburn Accent Glow
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, #D9480F, #E25822)",
      },
    },
  },
};