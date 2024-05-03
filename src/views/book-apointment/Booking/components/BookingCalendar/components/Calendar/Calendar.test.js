import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Calendar } from "./index.tsx";
import { StylesProvider } from "@/styles/StylesProvider";

describe("Calendar component", () => {
  test("renders correctly", () => {
    const selectedDate = new Date("2024-05-02");
    const handleDateSelect = jest.fn();
    const className = "test-calendar";

    const { getByText } = render(
      <StylesProvider>
        <Calendar selectedDate={selectedDate} handleDateSelect={handleDateSelect} className={className} />
      </StylesProvider>,
    );

    expect(getByText("Select dates")).toBeInTheDocument();
  });

  test("changes month correctly on button click", () => {
    const selectedDate = new Date("2024-05-02");
    const handleDateSelect = jest.fn();
    const className = "test-calendar";

    const { getByLabelText } = render(
      <StylesProvider>
        <Calendar selectedDate={selectedDate} handleDateSelect={handleDateSelect} className={className} />
      </StylesProvider>,
    );

    fireEvent.click(getByLabelText("Previous month"));
    expect(handleDateSelect).toHaveBeenCalledTimes(0);

    fireEvent.click(getByLabelText("Next month"));
    expect(handleDateSelect).toHaveBeenCalledTimes(0);
  });

  test("selects date correctly on date click", () => {
    const selectedDate = new Date("2024-05-02");
    const handleDateSelect = jest.fn();
    const className = "test-calendar";

    const { getByText } = render(
      <StylesProvider>
        <Calendar selectedDate={selectedDate} handleDateSelect={handleDateSelect} className={className} />
      </StylesProvider>,
    );

    const availableDate = document.querySelector(".data-cell");
    fireEvent.click(availableDate);

    expect(handleDateSelect).toHaveBeenCalledTimes(1);
  });
});
