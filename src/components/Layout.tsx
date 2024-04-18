import { FC, ReactNode } from "react";

import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Banner />
      {children}
      <Footer />
    </>
  );
};
