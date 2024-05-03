import styled from "styled-components";

export const StyledHomeModal = styled.section`
  color: ${({ theme }) => theme.colors["charcoal"]};
  .home-modal__content {
    padding: 82px 47px 105px 83px;
    display: flex;
  }

  .home-modal__title {
    font-size: 30px;
  }

  .home-modal__offer {
    font-size: 22px;
    margin-top: 18px;
  }

  .home-modal__button {
    width: 138px;
    margin-top: 33px;
  }

  .home-modal__note {
    font-size: 14px;
    margin-top: 33px;
  }
`;
