import { FC } from "react";

import { Button } from "@/components/Button";

import { BookingCalendar } from "../BookingCalendar";
import { BookingPaymentForm } from "../BookingPaymentForm";

interface Props {}

const BookingForm: FC<Props> = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>input field</div>
      <div>input field</div>
      <div>input field</div>
      <div>input field</div>

      <BookingCalendar />

      <div>input field</div>

      <BookingPaymentForm className="booking-form__payment-form" />

      <Button className="booking-form__button">Book Appointment</Button>
    </form>
  );
};

export { BookingForm };
