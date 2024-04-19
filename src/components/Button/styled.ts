import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors["pink-kisses"]};
  cursor: pointer;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  line-height: 21px;
  font-weight: 700;
  color: #fff;

  &.Button_small {
    padding: 7px 0px;
  }

  &.Button_medium {
    padding: 8px 0px;
  }

  &.Button_large {
    padding: 12px 0px;
  }

  &.Button_xl {
    padding: 14px 0px;
  }

  &.Button_xxl {
    padding: 19px 0px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
