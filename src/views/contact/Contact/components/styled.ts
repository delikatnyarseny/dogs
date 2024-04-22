import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Используем значение 1fr для растяжения на всю доступную ширину
  gap: 79px 77px;
  margin-top: 63px;
  padding: 0px 94px;

  .contact-textarea {
    grid-column: 1 / -1;
    margin-top: 16px;

    .textarea-input {
      width: 100%;
      padding: 31px 33px;
    }
  }

  .contact-input__button {
    grid-column: 1 / -1;
    width: 219px;
    margin: 0px auto;
  }
`;
