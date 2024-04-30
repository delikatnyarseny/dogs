import React from "react";
import { render } from "@testing-library/react";
import { SpaServices } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import "@testing-library/jest-dom";

describe("SpaServices component", () => {
  it("renders no items if data is empty", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <SpaServices data={[]} />
      </ThemeProvider>,
    );
    expect(queryByTestId("spa-list")).not.toBeInTheDocument();
  });
});
