import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme1 } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme1}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
