/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	theme: {
		fontFamily: {
			sans: ['Kanit', 'sans-serif'],
			heading: ['Montserrat', 'sans-serif']
		}
	},
	daisyui: {
		themes: [
			{
				cubyx: {
					primary: '#23AA08',
					secondary: '#1D3432',
					neutral: '#969696',
					'neutral-focus': '#797979',
					'base-100': '#284744',
					'base-content': '#ffffff'
				}
			}
		],
		base: false
	}
};
