import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Banner } from "./Banner";

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
