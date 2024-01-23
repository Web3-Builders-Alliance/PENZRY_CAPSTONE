/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#4C3290",
      "primary-sky": "#AA77FF",
      secondary: "#62CDFF",
      "secondary-blue": "#8B6EFF",
      "secondary-orange": "#F86F03",
      "grey-10": "#E8E8E8",
      "grey-20": "#DCDCDC",
      "grey-30": "#999999",
      "grey-40": "#666666",
      "grey-50": "#333333",
      "grey-90": "#111111",
      "grey-100": "#000000",
      "variant-10": "#F8F7FB",
      "variant-20": "#F9F9F9",
      "variant-30": "#F6F9FF",
      "variant-success": "#38BB5C",
      "variant-blue": "#599BEC",
      "variant-orange": "#FF9F00",
      "variant-pink": "#FC6161",
      "variant-grey": "#C4C4C4",
      "hover-color": "#146BFF",
      disabled: "#ccc",
      transparent: "transparent",
      white: "#fff",
      error: "#FC6161",
    },
    fontFamily: {
      outfit: "Outfit",
      mabry: "'Mabry Pro', sans-serif",
    },
    extend: {
      boxShadow: {
        "shadow-variant-1": "5px 5px 50px 0px rgba(26, 32, 44, 0.06)",
      },
      fontSize: {
        "body-3xl": [
          "28px",
          {
            lineHeight: "36px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "500",
          },
        ],
        "body-xxl": [
          "24px",
          {
            lineHeight: "32px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-xl": [
          "20px",
          {
            lineHeight: "32px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "15px",
          {
            lineHeight: "22px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],

        "body-sm": [
          "13px",
          {
            lineHeight: "20px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],

        "body-xs": [
          "11px",
          {
            lineHeight: "14px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "400",
          },
        ],

        "headline-3xl": [
          "72px",
          {
            lineHeight: "90px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "500",
          },
        ],
        "headline-xxl": [
          "60px",
          {
            lineHeight: "72px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "500",
          },
        ],
        "headline-xl": [
          "48px",
          {
            lineHeight: "60px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "600",
          },
        ],
        "headline-lg": [
          "36px",
          {
            lineHeight: "44px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "600",
          },
        ],
        "headline-md": [
          "30px",
          {
            lineHeight: "38px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "600",
          },
        ],
        "headline-sm": [
          "24px",
          {
            lineHeight: "32px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "600",
          },
        ],

        "headline-xs": [
          "20px",
          {
            lineHeight: "32px",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
