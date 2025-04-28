module.exports = {
    darkMode: 'class', // Enable dark mode using the 'class' strategy
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.3s ease-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      }

    },

    plugins: [],
  };