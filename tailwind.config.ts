import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#ffe8ed",
					100: "#ffc6cf",
					200: "#fb8c92",
					300: "#f45a67",
					400: "#ff1a40",
					500: "#ff001f",
					600: "#f60021",
					700: "#e4001b",
					800: "#d80013",
					900: "#c70004",
				},
				secondary: {
					50: "#fbe2e7",
					100: "#f6b7c4",
					200: "#ef899d",
					300: "#e65b78",
					400: "#de3b5d",
					500: "#d71d44",
					600: "#c71843",
					700: "#b31240",
					800: "#9f0a3d",
					900: "#7d0038",
				},
				neutral: {
					50: "#FAFAFA",
					100: "#F5F5F5",
					200: "#EEEEEE",
					300: "#E0E0E0",
					400: "#BDBDBD",
					500: "#9E9E9E",
					600: "#757575",
					700: "#616161",
					800: "#424242",
					900: "#212121",
				},
			},
		},
	},
	plugins: [],
};
export default config;
