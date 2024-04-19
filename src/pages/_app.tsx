import "@/styles/Fonts.css";

import type { AppProps } from "next/app";

import { StylesProvider } from "@/styles/StylesProvider";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StylesProvider>
  );
}
