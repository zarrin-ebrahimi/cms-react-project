/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          default:"1rem",
          lg: "0.625rem"
        },
    },
    screen:{
      'xs': '480px',
      'sm': '640px' ,
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors:{
       gray: '#f8f9f9',
       softgreen : '#eafaf1',
       mediumgreen: '#27ae60',
       darkgreen:'#0e6251'
    }
  },

  plugins: [
    function({addVariant}){
      addVariant('child', '&> *');
      addVariant('child-hover', '& > *:hover'); 
    }
  ],
}

}