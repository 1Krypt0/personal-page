const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#ff6464",
				dark: "#21243d",
				light: "#8695A4",

			}
			,
			fontFamily: {
				'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
				'heading': ['Playfair Display', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
