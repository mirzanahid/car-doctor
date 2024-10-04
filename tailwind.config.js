/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  
      },
      fontSize: {
        // Heading styles
        h1: ['60px', { lineHeight: '75px', fontWeight: '700' }], // Heading 1
        h2: ['45px', { lineHeight: '45px', fontWeight: '700' }], // Heading 2
        // Subheading styles
        sub1: ['35px', { lineHeight: '35px', fontWeight: '700' }], //Subheading
        sub2: ['25px', { lineHeight: '25px', fontWeight: '700' }], // Subheading 2
        sub3: ['20px', { lineHeight: '20px', fontWeight: '700' }], // Subheading 3
        sub4: ['18px', { lineHeight: '18px', fontWeight: '600' }], // Subheading 4

        // Paragraph styles
        p1: ['16px', { lineHeight: '26px', fontWeight: '400' }],  // Paragraph 1
   
      },
      colors: {
        primary: '#FF3811',    
        dark1: '#151515',
        dark2: '#444444',
        dark3: '#737373',
        dark4: '#A2A2A2',
        dark5: '#D0D0D0',
        dark6: '#E8E8E8',
        dark7: '#F3F3F3',
        white: '#FFFFFF',
      },
      spacing: {
        130: '130px',   
        50: '50px',   
        40: '40px',   
        30: '30px',   
        20: '20px',
        15: '15px',

      },
      borderRadius: {
        sm: '5px',   // Custom border radius of 5px
        md: '10px',   // Custom border radius of 10px
      },
      container: {
        center: true,      // Center the container
        padding: '1rem',   // Add some padding
        screens: {
          lg: '1140px',   // Custom container width at large screen sizes
        },
      },
    },
  },
  screens: {
    sm: '640px',  // Small screen
    md: '768px',  // Medium screen
    lg: '1024px', // Large screen
    xl: '1280px', // Extra large screen
  },
  plugins: [require('daisyui'),],
}