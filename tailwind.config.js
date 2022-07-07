/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "maven": ["Maven Pro", "sans-serif"]
            },
            colors: {
                textColor: "#5b5b5b",
                grey: "#EEEEEE",
                secondryColor: '#47465A'

            }
        },
    },
    plugins: [],
}