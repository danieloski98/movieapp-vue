import type { Config } from 'tailwindcss'

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                // Add your custom colors here
                'primary': '#5A4AF4', // Replace with your color
                'secondary': '#00FF00', // Replace with your color
                // You can also add color variations
                'primary-dark': '#CC0000',
                'primary-light': '#FF3333',
            }
        }
    },
    plugins: [],
} satisfies Config 