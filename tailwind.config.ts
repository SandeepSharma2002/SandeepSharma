import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          primary_color: '#026467',
          secondary_color: '#e5f5ea',
          body_text_color: '#596392',
          navbar_footer_color: '#f9f9f9',
          oxford_blue: '#0f172a',
          prussion_blue: '#1e293b',
          prussion_blue_40: 'rgba(30, 41, 59, 0.4)',
          white: '#fff',
             },
    },
  },
  plugins: [],
}
export default config
