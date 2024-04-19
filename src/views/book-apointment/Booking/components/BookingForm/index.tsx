import { FC, FormEvent } from "react";

import { Button } from "@/components/Button";

import { BookingCalendar } from "../BookingCalendar";
import { BookingPaymentForm } from "../BookingPaymentForm";
import { StyledBookingForm } from "./styled";

interface Props {}

const BookingForm: FC<Props> = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledBookingForm onSubmit={handleSubmit}>
      <BookingCalendar />

      <div>input field</div>

      <BookingPaymentForm className="booking-form__payment-form" />

      <Button type="submit" className="booking-form__button">
        Book Appointment
      </Button>
    </StyledBookingForm>
  );
};

export { BookingForm };
