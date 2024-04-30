import "@/styles/Fonts.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import ErrorBoundary from "@/components/ErrorBoundary";
import store from "@/store";
import { StylesProvider } from "@/styles/StylesProvider";
import client from "@/utils/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      </ApolloProvider>
    </StylesProvider>
  );
}
