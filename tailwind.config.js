/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx'], // Adjust based on your EJS file locations
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            },
            gridTemplateColumns: {
                '70/30': '70% 28%',
            }
        },
    },
    
    variants: {
        extend: {},
    },

    plugins: [],
};