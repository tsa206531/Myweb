import type { Config } from 'tailwindcss'

export default <Config>{
    darkMode: 'class',
    content: [
        './app/**/*.{vue,js,ts,jsx,tsx}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                "primary": "rgb(var(--color-primary) / <alpha-value>)",
                "background-light": "#f8f8f5",
                "background-dark": "#23220f",
                "glass-border": "rgba(255, 255, 255, 0.4)",
                "glass-bg": "rgba(255, 255, 255, 0.25)",
                "glass-bg-dark": "rgba(30, 30, 30, 0.4)" ,
                // Additional from articles page for better compatibility if needed
                "glass-light": "rgba(255, 255, 255, 0.65)",
                "glass-dark": "rgba(30, 30, 25, 0.65)",
                "glass-border-light": "rgba(255, 255, 255, 0.8)",
                "glass-border-dark": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                "display": ["Spline Sans", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
                "body": ["Spline Sans", "sans-serif"], // Align body to display
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "1.5rem",
                "xl": "2rem",
                "2xl": "2.5rem",
                "3xl": "3rem",
                "full": "9999px"
            },
            boxShadow: {
                "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                "glass-hover": "0 14px 40px 0 rgba(31, 38, 135, 0.15)",
            },
            animation: {
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'enter-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', // Alias for compat
                'blob': 'blob 7s infinite',
                'fade-in': 'fadeIn 0.4s ease-out forwards',
                'dot-pulse': 'dotPulse 0.5s ease-in-out',
                'thought-enter': 'thoughtEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                dotPulse: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(0.9)' },
                    '50%': { opacity: '1', transform: 'scale(1.1)' },
                },
                thoughtEnter: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
