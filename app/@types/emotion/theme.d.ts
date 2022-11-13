import "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: {
      bg: {
        primary: string;
        toggle: string;
        result: string;
        keys: string;
      };
      button: {
        toggle: string;
        func: string;
        funcShadow: string;
        equal: string;
        equalShadow: string;
        number: string;
        numberShadow: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
