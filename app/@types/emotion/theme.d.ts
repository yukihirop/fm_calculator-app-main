import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: {
      bg: {
        primary: string;
        toggle: string;
      },
      button: {
        toggle: string;
      },
      text: {
        primary: string;
      };
    };
  }
}
