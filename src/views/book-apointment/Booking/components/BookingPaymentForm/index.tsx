import { FC } from "react";

interface Props {
  className: string;
}

const BookingPaymentForm: FC<Props> = ({ className }) => {
  return <div className={className}>Payment Form</div>;
};

export { BookingPaymentForm };
