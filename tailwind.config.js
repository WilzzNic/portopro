/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                128: "32rem",
            },
            colors: {
                primary: "#3459e6",
                secondary: "#fff",
                success: "#2fb380",
                warning: "#f4bd61",
                danger: "#da292e",
                light: "#f8f9fa",
                dark: "#212529",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
