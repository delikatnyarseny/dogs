import styled from "styled-components";

export const StyledDogInfo = styled.div`
  margin-top: 185px;
  font-weight: 700;

  .dog-image__wrapper {
    width: 100%;
    padding: 70px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors["beige"]};
  }

  .dog-name {
    margin-top: 46px;
    font-size: 64px;
  }

  .dog-properties {
    margin-top: 110px;
    font-size: 36px;
    color: ${({ theme }) => theme.colors["charcoal"]};
  }
`;
