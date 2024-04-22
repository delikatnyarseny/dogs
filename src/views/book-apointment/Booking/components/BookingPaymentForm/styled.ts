import styled from "styled-components";

export const StyledBookingPaymentForm = styled.div`
  padding: 0px 120px;

  .payment-title,
  .payment-note {
    text-align: center;
  }
  .payment-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 24px;
    margin-top: 16px;
  }

  .payment-input__full-width {
    grid-column: span 2;
  }

  .payment-note {
    margin-top: 20px;
  }
`;
