import React, { FC, ReactNode } from "react";
import { Fonts } from "./Fonts";
import { Reset } from "./Reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Globals } from "./Globals";

interface Props {
  children: ReactNode;
}

const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Fonts />
      <Reset />
      {children}
    </ThemeProvider>
  );
};

export { StylesProvider };
