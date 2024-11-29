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
		'orange-a': "#FF9F0E",
		'cream-a': '#F3EAE2'
      },
    },
  },
  plugins: [],
} satisfies Config;
  