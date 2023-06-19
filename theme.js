//override theme

import { createTheme } from "@mui/material";
import { createContext, useState } from "react";

//change theme if mode change
const tokens = (mode) =>
  mode === "dark"
    ? {
        grey: "rgb(17, 17, 17)",
        primary: "rgb(33, 33, 33)",
        greenAccent: "rgb(85, 118, 141)",
        redAccent: "rgb(169, 40, 49)",
        blueAccent: "rgb(42, 115, 221)",
      }
    : {
        grey: "rgb(255,255,255)",
        primary: "rgb(224, 224, 224)",
        greenAccent: "rgb(68, 204, 118)",
        redAccent: "rgb(238, 44, 76)",
        blueAccent: "rgb(42, 115, 221)",
      };

const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            main: {
              primary: colors.primary,
            },
            secondary: {
              main: colors.greenAccent,
            },
            neutral: {
              dark: colors.grey,
              main: colors.grey,
              light: colors.grey,
            },
            background: {
              default: colors.grey,
            },
          }
        : {
            main: {
              primary: colors.primary,
            },
            secondary: {
              main: colors.greenAccent,
            },
            neutral: {
              dark: colors.grey,
              main: colors.grey,
              light: colors.grey,
            },
            background: {
              default: colors.grey,
            },
          }),
    },
    typography: {
      color: "bleu",
    },
  };
};

export const ColorThemContext = createContext();

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = {
    toggelColorMode: () =>
      setMode((previous) => (previous === "dark" ? "light" : "dark")),
  };
  const theme = createTheme(themeSettings(mode));
  return [theme, colorMode];
};
