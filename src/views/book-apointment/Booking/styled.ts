import styled from "styled-components";

export const StyledBooking = styled.section`
  margin-top: 71px;
  padding: 0 69px;

  .booking-title {
    font-size: 40px;
  }

  .booking-content {
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
  }

  .booking-map__container {
    width: 504px;
  }

  .booking-map__wrapper {
    padding: 9px;
    background: ${({ theme }) => theme.colors["pink-kisses"]};
  }

  .booking-map__additional-info {
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
    font-size: 20px;
  }

  .booking-map__address {
    width: 141px;
  }

  .booking-map__hours {
    width: 242px;
  }
`;
