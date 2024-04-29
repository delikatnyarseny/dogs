import styled from "styled-components";

export const StyledDataCell = styled.td`
  border-radius: 4px;
  cursor: pointer;

  &.data-cell__inactive {
    color: #b0b0b0;
  }

  &.data-cell__active {
    background-color: ${({ theme }) => theme.colors["pink-kisses"]};
  }
`;
