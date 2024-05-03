import { render } from "@testing-library/react";
import React from "react";

import { StylesProvider } from "@/styles/StylesProvider";

import { TimeSlot } from "./index.tsx";
import { getAvailableTimeSlots } from "./utils/getAvailableTimeSlots";
import { getFormattedDay } from "./utils/getFormattedDay";

describe("TimeSlot component", () => {
  test("renders correctly with selected date", () => {
    const selectedDate = new Date("2024-05-02");
    const handleFormDateChange = jest.fn();
    const { getByText } = render(
      <StylesProvider>
        <TimeSlot selectedDate={selectedDate} handleFormDateChange={handleFormDateChange} />
      </StylesProvider>,
    );
    expect(getByText("Choose a timeslot on May. 2nd, 2024")).toBeInTheDocument();
  });
});

describe("getAvailableTimeSlots utility function", () => {
  test("returns correct time slots for weekday", () => {
    const availableTimeSlots = getAvailableTimeSlots(11, 17);
    expect(availableTimeSlots).toEqual([
      "11 am - 12 pm",
      "12 pm - 1 pm",
      "1 pm - 2 pm",
      "2 pm - 3 pm",
      "3 pm - 4 pm",
      "4 pm - 5 pm",
    ]);
  });

  test("returns correct time slots for weekend", () => {
    const availableTimeSlots = getAvailableTimeSlots(11, 15);
    expect(availableTimeSlots).toEqual(["11 am - 12 pm", "12 pm - 1 pm", "1 pm - 2 pm", "2 pm - 3 pm"]);
  });
});

describe("getFormattedDay utility function", () => {
  test("formats date correctly", () => {
    const date = new Date("2024-05-02");
    const formattedDay = getFormattedDay(date);
    expect(formattedDay).toBe("May. 2nd, 2024");
  });
});
