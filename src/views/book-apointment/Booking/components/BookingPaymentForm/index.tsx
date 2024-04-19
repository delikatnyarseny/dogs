import { FC } from "react";
import { StyledBookingPaymentForm } from "./styled";

interface Props {
  className: string;
}

const BookingPaymentForm: FC<Props> = ({ className }) => {
  return (
    <StyledBookingPaymentForm className={className}>
      <h3>Enter your payment information</h3>

      <p>
        Please be advised cancelling within 24 hours of your scheduled
        appointment will result in a cancellation fee of $300.00.
      </p>
    </StyledBookingPaymentForm>
  );
};

export { BookingPaymentForm };
