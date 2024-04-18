import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 79px 77px;
  margin-top: 63px;
  padding: 0px 94px;

  .contact-input__textarea-wrapper {
    grid-column: 1 / -1;
    margin-top: 16px;
  }

  .contact-input__textarea {
    height: 317px;
    width: 100%;
    resize: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 31px 33px;
  }

  .contact-input__button {
    grid-column: 1 / -1;
    width: 219px;
    margin: 0px auto;
  }

  .contact-input__textarea-error {
    color: red;
  }
`;
