import styled from "styled-components";

export const StyledSpaServices = styled.div`
  padding: 0px 282px;
  color: ${({ theme }) => theme.colors["charcoal"]};
  font-size: 35px;
  margin-top: 70px;
  text-align: center;

  .spa-list__item:not(:first-child) {
    margin-top: 24px;
  }

  .spa-list__item-description {
    margin-top: 16px;
  }

  .spa-list__item-title {
    font-weight: 700;
  }
`;
