import styled from "styled-components";

export const StyledBookingForm = styled.form`
  max-width: 760px;

  .booking-form__payment-form {
    margin-top: 66px;
  }
  .booking-form__base-info-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 40px;
  }

  .booking-form__calendar {
    margin-top: 50px;
  }

  .booking-form__textarea {
    margin-top: 70px;
    width: 100%;

    .textarea-input {
      height: 80px;
      padding: 22px 15px;
    }
  }

  .booking-form__button {
    width: 318px;
    margin: 36px auto 0px;
  }
`;
