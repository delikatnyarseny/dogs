import styled from "styled-components";

export const StyledCalendar = styled.div`
  width: 247px;
  text-align: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .month {
    font-size: 18px;
    font-weight: bold;
  }

  .day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: bold;
    color: red;
    margin-bottom: 10px;
  }

  .day-cell {
    padding: 5px;
  }

  table {
    width: 100%;
  }

  td {
    cursor: pointer;
    padding: 5px;
  }

  .active {
    background-color: red;
    color: white;
    border-radius: 50%;
  }

  .inactive {
    color: gray;
  }
`;
