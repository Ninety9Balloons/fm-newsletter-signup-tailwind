/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                "tomato": "hsl(4, 100%, 67%)",
                "dark-slate-gray": "hsl(234, 29%, 20%)",
                "charcoal-gray": "hsl(235, 18%, 26%)",
                "gray": "hsl(231, 7%, 60%)",
            },
        },
     
    },
    plugins: [],
};
