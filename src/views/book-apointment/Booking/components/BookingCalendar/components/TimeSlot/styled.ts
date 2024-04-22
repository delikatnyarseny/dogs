import styled from "styled-components";

export const StyledTimeSlot = styled.div`
  .timeslot-title {
    font-size: 20px;
    line-height: 12px;
  }

  .timeslot-slots {
    margin-top: 24px;
    font-size: 15px;
    font-weight: 700;

    & > *:not(:first-child) {
      margin-top: 14px;
    }
  }

  .timeslot-slots__slot {
    cursor: pointer;
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;

      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors["charcoal"]};
      outline: none;
      cursor: pointer;

      &:checked {
        background: ${({ theme }) => theme.colors["pink-kisses"]};
        border: none;
      }
    }

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.colors["charcoal"]};
      border-radius: 4px;
    }
  }

  .timeslot-slots__slot-value {
    margin-left: 22px;
  }
`;
