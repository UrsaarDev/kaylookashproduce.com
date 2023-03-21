module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      },
      screens: {
        "verytiny": { 'min': '347px' },
        "mtiny": { 'min': '400px' },
        "tiny": { 'min': '500px' },
        "1lg": { 'min': '1050px' },
        "2lg": { 'min': '1100px' },
        "3lg": { 'min': '1200px' },
        "mobile": { 'min': '1340px' },
        "1xl": { 'min': '1440px' },
      },
      colors: {
        "blue1": "#01C9FF",
        "orange1": "#FF8742",
        "grey1": "#555555"
      },
      backgroundImage: {
        "fire": "linear-gradient(90deg, #F95B50 0%, #FF8742 100%)",
        "water": "linear-gradient(90deg, #0193FE 0%, #00D1FF 100%)"
      },
      borderRadius: {
        "tiny": "6px",
        "sm": "10px",
      }
    },
    fontSize: {
    },
    fontFamily: {
      "Prata": "Prata, serif"
    }
  },
  plugins: [],
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  }
}