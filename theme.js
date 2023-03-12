import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    fanta: "#FA5D29",
    deep: "#EDF5E1",
    baby: "#fef2f2",
    sagegreen: "#5CDB95",
    deepblush: "#FFC5B1",
    purple: { 3: "#502bd8", 2: "#6749d1", 1: "#917eda" },
    blush: "#FFAE94",
    dark: "#222",
    black: "#000",
    white: "#fff",
  },

  breakpoints: {
    b: "0",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "*": {
        // boxSizing: "border-box",
        margin: "none",
        padding: "none",
        fontFamily: "Open Sans, sans-serif",
      },
      ".shadow": {
        boxShadow: "10 8px 30px rgba(14,21,47,0.6)",
      },
      body: {
        position: "relative",
        maxWidth: "1600px",
        color: "white",
        margin: "auto",
        bg: "url(/polybg.jpg)",
        bgSize: "stretch",
      },
      ".main": {
        padding: "0px 5%",
        // backgroundColor: "whitesmoke",
      },

      ".bannerlogo": {
        maxWidth: "150px",
        height: "3rem",
        padding: "0 15px",
        objectFit: "contain",
      },

      "img:last-of-type ": {
        paddingLeft: "0",
      },

      ".inner": {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "5rem",
      },

      ".wrapper": {
        position: "absolute",
        display: "flex",
        columnGap: "40px",
      },

      section: {
        display: "flex",
        columnGap: "40px",

        animation: "swipe var(--speed) linear infinite backwards",
      },

      "@keyframes swipe": {
        "0%": {
          transform: "translate(0)",
        },
        "100%": {
          transform: "translate(-100%)",
        },
      },
    },
  },
});

export default theme;
