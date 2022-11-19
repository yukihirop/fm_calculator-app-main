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
      func: "hsl(0, 0%, 100%)",
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
      result: "hsl(0, 5%, 81%)",
      keys: "hsl(0, 5%, 81%)",
    },
    button: {
      toggle: " hsl(25, 98%, 40%)",
      func: "hsl(185, 42%, 37%)",
      funcShadow: "hsl(185, 58%, 25%)",
      equal: "hsl(25, 98%, 40%)",
      equalShadow: "hsl(25, 99%, 27%)",
      number: "hsl(30, 25%, 89%)",
      numberShadow: "hsl(28, 16%, 65%)",
    },
    text: {
      func: "hsl(0, 0%, 100%)",
      primary: "hsl(60, 10%, 19%)",
      secondary: "hsl(60, 10%, 19%)",
    },
  },
};

const theme3: Theme = {
  colors: {
    bg: {
      primary: "hsl(268, 75%, 9%)",
      toggle: "hsl(268, 71%, 12%)",
      result: "hsl(268, 71%, 12%)",
      keys: "hsl(268, 71%, 12%)",
    },
    button: {
      toggle: "hsl(176, 100%, 44%)",
      func: "hsl(285, 91%, 52%)",
      funcShadow: "hsl(290, 70%, 36%)",
      equal: "hsl(176, 100%, 44%)",
      equalShadow: "hsl(177, 92%, 70%)",
      number: "hsl(281, 89%, 26%)",
      numberShadow: "hsl(285, 91%, 52%)",
    },
    text: {
      func: "hsl(0, 0%, 100%)",
      primary: "hsl(52, 100%, 62%)",
      secondary: "hsl(52, 100%, 62%)",
    },
  },
};

export const themes: Record<string, Theme> = { theme1, theme2, theme3 };
