/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#666",
        gray: {
          "100": "#888",
          "200": "#757575",
          "300": "#212121",
        },
        whitesmoke: {
          "100": "#f1f1f1",
          "200": "#eee",
        },
        crimson: "#f02d34",
        gainsboro: "#e4e5eb",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        sora: "Sora",
        arial: "Arial",
      },
      borderRadius: {
        "3xs": "10px",
        "4xl": "23px",
        "4xs": "9px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "lgi-2": "19.2px",
      xs: "12px",
      "sm-3": "13.3px",
      xl: "20px",
      mini: "15px",
      "base-8": "16.8px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
