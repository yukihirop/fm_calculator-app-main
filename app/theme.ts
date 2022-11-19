import { Theme } from "@emotion/react";

export const theme1: Theme = {
  colors: {
    bg: {
      primary: "hsl(222, 26%, 31%)",
      toggle: "hsl(223, 31%, 20%)",
      result: "hsl(223, 31%, 20%)",
      keys: "hsl(223, 31%, 20%)",
    },
    button: {
      toggle: "hsl(6, 63%, 50%)",
      func: "hsl(225, 21%, 49%)",
      funcShadow: "hsl(224, 28%, 35%)",
      equal: "hsl(6, 63%, 50%)",
      equalShadow: "hsl(6, 70%, 34%)",
      number: "hsl(30, 25%, 89%)",
      numberShadow: "hsl(28, 16%, 65%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(221, 14%, 31%)",
    },
  },
};

const theme2: Theme = {
  colors: {
    bg: {
      primary: "hsl(0, 0%, 90%)",
      toggle: "hsl(0, 5%, 81%)",
      result: "hsl(0, 0%, 93%)",
      keys: "hsl(185, 42%, 37%)",
    },
    button: {
      toggle: " hsl(25, 98%, 40%)",
      func: "hsl(45, 7%, 89%)",
      funcShadow: "hsl(35, 11%, 61%)",
      equal: "hsl(25, 98%, 40%)",
      equalShadow: "hsl(25, 99%, 27%)",
      number: "hsl(30, 25%, 89%)",
      numberShadow: "hsl(28, 16%, 65%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(60, 10%, 19%)",
    },
  },
};

export const themes: Record<string, Theme> = { theme1, theme2 };
