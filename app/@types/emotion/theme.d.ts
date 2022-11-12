import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: {
      bg: {
        primary: string;
      }
      text: {
        primary: string;
      };
    };
  }
}
