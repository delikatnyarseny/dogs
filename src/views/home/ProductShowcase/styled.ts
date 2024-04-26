import styled from "styled-components";

export const StyledProductShowcase = styled.section`
  padding: 0px 49px 0px 54px;
  margin-top: 70px;
  color: ${({ theme }) => theme.colors["charcoal"]};
  font-weight: 700;

  .showcase-title {
    font-size: 66px;
    text-align: center;
  }

  .showcase-list {
    display: flex;
    margin-top: 87px;

    & > li {
      flex: 1;
    }

    & > li:not(:first-child) {
      margin-left: 98px;
    }
  }

  .showcase-list__item {
    font-size: 20px;
  }

  .showcase-item__image {
    position: relative;
    height: 100%;
  }

  .showcase-item__image-container {
    position: relative;
    width: 100%;
    height: 460px;
    padding: 7px;
    background-color: ${({ theme }) => theme.colors["pink-kisses"]};
  }

  .showcase-item__content {
    margin-top: 57px;
  }

  .showcase-item__price {
    margin-top: 15px;
    font-size: 30px;
  }

  .showcase-button {
    width: 323px;
    margin: 60px auto 0px;
  }
`;
