import styled from "styled-components";

export const StyledTextArea = styled.div`
  width: 100%;
  font-size: 14px;

  .textarea-input {
    line-height: 20px;
    resize: none;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .textarea-error {
    color: red;
  }
`;
