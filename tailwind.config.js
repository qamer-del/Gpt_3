/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {  
        primary: "#040C18;",
        secondary: "#031B34",
        btn:"#FF4820",
        font:"#81AFDD",
        font2:"#13DED2",
        gradiant:"rgb(174,103,250);"
      },
      
    },
   container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '5rem',
				},
			},
  },
  plugins: [],
};