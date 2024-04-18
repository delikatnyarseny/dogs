import { FC } from "react";

import { BookingCalendar } from "./components/BookingCalendar";
import { StyledBooking } from "./styled";

interface Props {}

export const Booking: FC<Props> = () => {
  return (
    <StyledBooking>
      <h2 className="booking-title">Enter your information here</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <BookingCalendar />

        {/* <BookingPaymentForm /> */}

        <button>Book Appointment</button>
      </form>
    </StyledBooking>
  );
};
