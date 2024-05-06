import { render } from "@testing-library/react";
import React from "react";

import { BookingMap } from "./index";

describe("BookingMap component", () => {
  it("renders without crashing", () => {
    render(<BookingMap />);
  });
});
