import { FC } from "react";

import { BookingForm } from "./components/BookingForm";
import { BookingMap } from "./components/BookingMap";
import { StyledBooking } from "./styled";

interface Props {}

const Booking: FC<Props> = () => {
  return (
    <StyledBooking>
      <h2 className="booking-title">Enter your information here</h2>

      <div className="booking-content">
        <BookingForm />

        <div className="booking-map__container">
          <div className="booking-map__wrapper">
            <BookingMap />
          </div>

          <div className="booking-map__additional-info">
            <p className="booking-map__address">
              <b>Our Address: </b>
              <br />
              Luxe Animal Spa <br />
              80 Smithe St <br />
              Vancouver, BC <br />
              V6B 1M7
            </p>
            <p className="booking-map__hours">
              <b> Hours of Operation:</b> <br />
              Sunday - Closed <br />
              Monday 10 a.m.-5:30 p.m. <br />
              Tuesday 10 a.m.-5:30 p.m. <br />
              Wednesday 10 a.m.-5:30 p.m. <br />
              Thursday 10 a.m.-5:30 p.m. <br />
              Friday 10 a.m.-5:30 p.m. <br />
              Saturday 10 a.m.-5:30 p.m.
            </p>
          </div>
        </div>
      </div>
    </StyledBooking>
  );
};

export { Booking };
