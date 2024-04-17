import React, { FC, ReactNode } from "react";
import { Fonts } from "./Fonts";
import { Reset } from "./Reset";

interface Props {
  children: ReactNode;
}

const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Fonts />
      <Reset />
      {children}
    </>
  );
};

export { StylesProvider };
