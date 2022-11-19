import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "store";
import { Provider } from "react-redux";
import ThemeProvider from "context/theme.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
