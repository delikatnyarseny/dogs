import React, { FC, memo } from "react";

import { InputField } from "@/ui/InputField";

import { StyledBookingPaymentForm } from "./styled";

interface Props {
  className: string;
  creditNumber: string;
  creditExpire: string;
  creditCvv: string;
  creditName: string;
  errors: {
    creditNumber?: string;
    creditExpire?: string;
    creditCvv?: string;
    creditName?: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const areEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.creditNumber === nextProps.creditNumber &&
    prevProps.creditExpire === nextProps.creditExpire &&
    prevProps.creditCvv === nextProps.creditCvv &&
    prevProps.creditName === nextProps.creditName &&
    prevProps.errors.creditNumber === nextProps.errors.creditNumber &&
    prevProps.errors.creditExpire === nextProps.errors.creditExpire &&
    prevProps.errors.creditCvv === nextProps.errors.creditCvv &&
    prevProps.errors.creditName === nextProps.errors.creditName
  );
};

const BookingPaymentForm: FC<Props> = memo(
  ({ className, creditNumber, creditExpire, creditCvv, creditName, errors, handleInputChange }) => {
    return (
      <StyledBookingPaymentForm className={className}>
        <h3 className="payment-title">Enter your payment information</h3>

        <div className="payment-inputs">
          <InputField
            name="creditNumber"
            value={creditNumber}
            onChange={handleInputChange}
            placeholder="Credit Card Number"
            error={errors.creditNumber}
            className="payment-input__full-width"
          />
          <InputField
            name="creditExpire"
            value={creditExpire}
            onChange={handleInputChange}
            placeholder="Expiry Date"
            error={errors.creditExpire}
          />
          <InputField
            name="creditCvv"
            value={creditCvv}
            onChange={handleInputChange}
            placeholder="CVV"
            error={errors.creditCvv}
          />
          <InputField
            name="creditName"
            value={creditName}
            onChange={handleInputChange}
            placeholder="Name on Card"
            error={errors.creditName}
            className="payment-input__full-width"
          />
        </div>

        <p className="payment-note">
          Please be advised cancelling within 24 hours of your scheduled appointment will result in a cancellation fee
          of $300.00.
        </p>
      </StyledBookingPaymentForm>
    );
  },
  areEqual,
);

export { BookingPaymentForm };
