import { FC } from "react";

import { BookingForm } from "./components/BookingForm";
import { StyledBooking } from "./styled";

interface Props {}

const Booking: FC<Props> = () => {
  return (
    <StyledBooking>
      <h2 className="booking-title">Enter your information here</h2>

      <div className="booking-content">
        <BookingForm />

        <div className="booking-map__wrapper">Map</div>
      </div>
    </StyledBooking>
  );
};

export { Booking };
