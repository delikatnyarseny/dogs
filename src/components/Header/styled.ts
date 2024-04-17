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
  }
`;
