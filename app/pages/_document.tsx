import { Html, Head, Main, NextScript } from "next/document";
import { useTheme, css, ThemeProvider } from "@emotion/react";
import { theme1 } from 'theme'

const Document = () => {
  const theme = useTheme();
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        css={css`
          background-color: ${theme.colors.bg.primary};
        `}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default function WrappedDocument() {
  return (
    <ThemeProvider theme={theme1}>
      <Document />
    </ThemeProvider>
  );
}
