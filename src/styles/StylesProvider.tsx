import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { Globals } from "./Globals";
import { Reset } from "./Reset";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Reset />
      {children}
    </ThemeProvider>
  );
};

export { StylesProvider };
