import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
		'pink-a': '#ECC7EF',
		'orange-a': "#FF9F0E"
      },
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "100",
            transform: "translateY(0px)",
          },
        },
		slideUpLeave: {
			"0%": {
			  opacity: "100",
			  transform: "translateY(0)",
			},
			"100%": {
			  opacity: "0",
			  transform: "translateY(50px)",
			},
		  },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
		slideUpLeave: "slideUpLeave .3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
  