import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "error": "#ffb4ab",
        "inverse-primary": "#755b00",
        "surface-container": "#201f1f",
        "on-secondary-fixed": "#1b1c1c",
        "on-secondary-container": "#b6b5b4",
        "on-error-container": "#ffdad6",
        "surface-container-highest": "#353534",
        "secondary-container": "#474747",
        "primary-fixed-dim": "#e6c364",
        "secondary-fixed": "#e4e2e1",
        "background": "#131313",
        "primary-fixed": "#ffe08f",
        "primary-container": "#c9a84c",
        "tertiary": "#cbc6bf",
        "on-tertiary-container": "#41403a",
        "secondary": "#c8c6c5",
        "inverse-on-surface": "#313030",
        "on-secondary": "#303030",
        "surface-container-high": "#2a2a2a",
        "on-primary-container": "#503d00",
        "tertiary-fixed": "#e7e2da",
        "surface-tint": "#e6c364",
        "on-tertiary-fixed": "#1d1c17",
        "on-primary-fixed": "#241a00",
        "surface-container-lowest": "#0e0e0e",
        "outline-variant": "#4d4637",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-container-low": "#1c1b1b",
        "surface": "#131313",
        "on-surface": "#e5e2e1",
        "on-tertiary": "#32302b",
        "inverse-surface": "#e5e2e1",
        "primary": "#e6c364",
        "tertiary-fixed-dim": "#cac6be",
        "on-background": "#e5e2e1",
        "on-primary-fixed-variant": "#584400",
        "outline": "#99907e",
        "tertiary-container": "#afaba4",
        "on-primary": "#3d2e00",
        "on-surface-variant": "#d0c5b2",
        "error-container": "#93000a",
        "surface-dim": "#131313",
        "on-error": "#690005",
        "on-secondary-fixed-variant": "#474747",
        "surface-bright": "#3a3939",
        "surface-variant": "#353534",
        "on-tertiary-fixed-variant": "#494741"
      },
      fontFamily: {
        "headline": ["Noto Serif"],
        "body": ["Manrope"],
        "label": ["Manrope"]
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.22, 1, 0.36, 1)", 
      },
      boxShadow: {
        "luxury": "0 10px 40px -10px rgba(0,0,0,0.3)",
        "glow": "0 0 30px rgba(230,195,100,0.15)",
        "glow-hover": "0 0 40px rgba(230,195,100,0.3)"
      },
      animation: {
        "shimmer": "shimmer 4s linear infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        shimmer: {
          "to": { backgroundPosition: "200% center" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" } // Needs to translate half width if contents are duplicated
        }
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "md": "0.25rem",
        "lg": "0.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
export default config;
