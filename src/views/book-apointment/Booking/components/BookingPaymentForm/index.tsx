import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js/types/components/buttons";
import { FUNDING, PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
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
    const createOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
      return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "200.00",
            },
          },
        ],
      });
    };

    const handleApprove = async (data: OnApproveData, actions: OnApproveActions) => {
      const order = await actions.order?.capture();
    };

    return (
      <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
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

          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={createOrder}
            fundingSource={FUNDING.CARD}
            onApprove={handleApprove}
          />

          <p className="payment-note">
            Please be advised cancelling within 24 hours of your scheduled appointment will result in a cancellation fee
            of $300.00.
          </p>
        </StyledBookingPaymentForm>
      </PayPalScriptProvider>
    );
  },
  areEqual,
);

export { BookingPaymentForm };
