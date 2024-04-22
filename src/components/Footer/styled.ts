import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  padding: 56px 26px 76px;
  height: 500px;
  background: ${({ theme }) => theme.colors["beige"]};
  color: ${({ theme }) => theme.colors["charcoal"]};

  .footer-links {
    font-size: 26px;
    margin-top: 30px;

    & > li:not(:first-child) {
      margin-top: 14px;
    }
  }

  .footer-heading {
    font-size: 32px;
    font-weight: 700;
  }

  .footer-input__container-input {
    width: 498px;
  }

  .footer-input__container {
    display: flex;
    margin-top: 34px;
    align-items: center;
  }

  .footer-button {
    height: 44px;
    margin-left: 52px;
  }

  .footer-media__container {
    margin-top: 73px;
  }

  .footer-button {
    width: 145px;
  }
`;
