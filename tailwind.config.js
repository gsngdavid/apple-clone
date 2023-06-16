/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#06c",
        "light-dark": "rgba(0, 0, 0, .8)",
        "lighter-dark": "#333336",
        "primary-bg": "rgba(251, 251, 253, .8)",
      },
      fontFamily: {
        "sf-pro-text_regular": "sf-pro-text_regular",
        "sf-pro-text_semibold": "sf-pro-text_semibold",
        "sf-pro-text_bold": "sf-pro-text_bold",
      },
      backgroundImage: {
        "logo": "url('../images/hero_logo_apple_vision_pro__ea9qv4w4cngy_large_2x.png')",
        "watch-series": "url('../images/promo_logo_apple_watch_series_8__ee6riplsucuq_large.png')",
        "trad-in": "url('../images/logo_tradein__d1fpktgipvki_large.png')",
        "card": "url('../images/logo__dcojfwkzna2q_large.png')",
      }
    },
  },
  plugins: [],
}

