/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#284744',
				background_darker: '#1D3432',
				text: '#ffffff',
				accent: '#23AA08',
				grayedOut_dark: '#797979',
				grayedOut_light: '#969696'
			}
		},
		fontFamily: {
			text: ['Kanit', 'sans-serif'],
			heading: ['Montserrat', 'sans-serif']
		}
	}
};
