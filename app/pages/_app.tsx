import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme1 } from 'theme'
import store from 'store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme1}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
