import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import { setFieldValue } from "@/store/slices/book-appointment-form-slice";
import { InputField } from "@/ui/InputField";

import { StyledBookingPaymentForm } from "./styled";

interface Props {
  className: string;
}

const BookingPaymentForm: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { creditNumber, creditCvv, creditExpire, creditName } = useSelector(
    (state: RootState) => state.bookAppointmentForm,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch(setFieldValue({ field: name as any, value }));
  };

  return (
    <StyledBookingPaymentForm className={className}>
      <h3>Enter your payment information</h3>

      <InputField
        name="creditNumber"
        value={creditNumber}
        onChange={handleChange}
        placeholder="First Name"
        // error={errors.firstName}
      />
      <InputField
        name="creditExpire"
        value={creditExpire}
        onChange={handleChange}
        placeholder="Expiry Date"
        // error={errors.firstName}
      />
      <InputField
        name="creditCvv"
        value={creditCvv}
        onChange={handleChange}
        placeholder="CVV"
        // error={errors.firstName}
      />
      <InputField
        name="creditName"
        value={creditName}
        onChange={handleChange}
        placeholder="Name on Card"
        // error={errors.firstName}
      />

      <p>
        Please be advised cancelling within 24 hours of your scheduled appointment will result in a cancellation fee of
        $300.00.
      </p>
    </StyledBookingPaymentForm>
  );
};

export { BookingPaymentForm };
