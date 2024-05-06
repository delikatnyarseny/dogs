import styled from "styled-components";

export const StyledHomeModal = styled.section`
  color: ${({ theme }) => theme.colors["charcoal"]};

  .home-modal__close-button {
    padding: 4px;
    align-self: end;
  }

  .home-modal__background {
    background: ${({ theme }) => theme.colors["rosey-cheek"]};
    padding: 8px;
  }

  .home-modal {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .home-modal__content-container {
    padding: 82px 47px 105px 83px;
    display: flex;
  }
  .home-modal__content {
    max-width: 284px;
  }

  .home-modal__input-form {
    margin-top: 24px;
  }

  .home-modal__input {
    width: 100%;
    height: 40px;
    outline: none;
    padding: 13px 7px 13px 12px;
    font-size: 14px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .home-modal__title {
    font-size: 30px;
    font-family: CinzelDecorative;
    max-width: 202px;
  }

  .home-modal__offer {
    font-size: 22px;
    margin-top: 18px;
  }

  .home-modal__button {
    width: 138px;
    margin: 33px auto 0px;
  }

  .home-modal__note {
    font-size: 14px;
    max-width: 231px;
    text-align: center;
    margin: 33px auto 0px;
  }

  .home-modal__image-background {
    width: 480px;
    height: 447px;
    padding: 8px;
    background: ${({ theme }) => theme.colors["rosey-cheek"]};
    margin-left: 70px;
  }

  .home-modal__image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
