/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                "--player-height": "var(--player-height)",
            },
            colors: {
                "primary-color": "var(--primary-color)",
                "main-100": "#eedada",
                "main-200": "#fbe6e6",
                "main-300": "#f9dbdb",
                "main-400": "#f9c6c5",
                "main-500": "#b72479",
            },
            backgroundColor: {
                "main-100": "#eedada",
                "main-200": "#fbe6e6",
                "main-300": "#f9dbdb",
                "main-400": "#f9c6c5",
                "main-500": "#b72479",
                "bg-color": "var(--bg-color)",
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": "translateX(-500px)",
                        transform: "translateX(-500px)"
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);"
                    }
                },
                "slide-left1": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)"
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);"
                    }
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": "translateX(500px)",
                        transform: "translateX(500px)"
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);"
                    }
                },
            },
            animation: {
                "slide-right": "slide-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "slide-left1": "slide-left1 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "slide-left2": "slide-left2 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
            },
        },
    },
    plugins: [],
};
