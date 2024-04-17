import { StylesProvider } from "@/styles/StylesProvider";
import type { AppProps } from "next/app";
import "@/styles/Fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
