module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [require('tailwindcss-safe-area')],
	theme: {
		extend:{
			colors: {
				'nft': {
					100: '#8BACDA',
					200: '#2F415B',
					300: '#14253D',
					400: '#0D192B',
				},
				'cyan': '#00FFF7',
			},
			fontFamily: {
                outfit: ['outfit', 'sans-serif'],
            },
		}
	}
}
