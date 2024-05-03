import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 66px 1px 66px;

  .header-logo {
    width: 153px;
    height: 79px;
    flex-shrink: 0;
  }

  .header-nav {
    width: 100%;
    margin-left: 129px;
  }

  .header-nav__list {
    display: flex;
    font-weight: 700;
    font-size: 26px;
  }

  .header-nav__list-item {
    &:hover {
      opacity: 0.5;
    }
    &:not(:first-child) {
      margin-left: 16px;
    }
  }

  .header-nav__list-item__active {
    text-decoration: underline;
  }

  /* Responsive Media Queries */

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 5px 50px 1px 50px;

    .header-logo {
      width: 120px;
      height: 62px;
    }

    .header-nav {
      margin-left: 80px;
    }

    .header-nav__list {
      font-size: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 5px 30px 1px 30px;

    .header-nav {
      margin-left: 50px;
    }

    .header-nav__list {
      flex-direction: column;
      align-items: center;
    }

    .header-nav__list-item {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    align-items: center;

    .header-logo {
      margin-bottom: 10px;
    }

    .header-nav {
      margin-left: 0;
    }

    .header-nav__list-item {
      font-size: 18px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding: 5px 20px 1px 20px;

    .header-nav__list {
      font-size: 16px;
    }
  }
`;
