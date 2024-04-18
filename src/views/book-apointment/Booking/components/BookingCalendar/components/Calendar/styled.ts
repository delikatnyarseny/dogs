import styled from "styled-components";

export const StyledCalendar = styled.div`
  width: 352px;
  text-align: center;

  .calendar-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .calendar-head__controls {
    & > *:not(:first-child) {
      margin-left: 16px;
    }

    & > button:last-child {
      transform: rotate(180deg);
    }
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: bold;
    color: ${({ theme }) => theme.colors["pink-kisses"]};
    margin-bottom: 10px;
  }

  table {
    width: 100%;
  }

  td {
    cursor: pointer;
    padding: 5px;
  }

  .calendar-day__inactive {
    color: #b0b0b0;
  }
`;
