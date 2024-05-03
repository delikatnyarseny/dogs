import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 26px 76px;
  background: ${({ theme }) => theme.colors["beige"]};
  color: ${({ theme }) => theme.colors["charcoal"]};
  margin-top: 100px;

  .footer-heading {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .footer-links {
    font-size: 18px;

    & > li:not(:first-child) {
      margin-top: 10px;
    }
  }

  .footer-input__container-input {
    width: 100%;
    max-width: 400px;
  }

  .footer-input__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .footer-button {
    width: 100%;
    max-width: 200px;
    margin-top: 20px;
  }

  .footer-media__container {
    margin-top: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: row;
    align-items: flex-start;

    .footer-heading {
      font-size: 28px;
    }

    .footer-links {
      font-size: 22px;
    }

    .footer-input__container {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .footer-button {
      margin-top: 0;
      margin-left: 20px;
    }

    .footer-media__container {
      margin-top: 0;
      margin-left: auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .footer-heading {
      font-size: 32px;
    }

    .footer-links {
      font-size: 24px;
    }
  }
`;
