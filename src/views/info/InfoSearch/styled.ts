import styled from "styled-components";

export const StyledInfoSearch = styled.div`
  max-width: 1443px;
  margin: 70px auto 0px;

  .info-title {
    font-size: 70px;
    text-align: center;
    color: ${({ theme }) => theme.colors["charcoal"]};
  }

  .info-search__container {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }

  .info-search__selection {
    font-size: 30px;
    font-weight: 700;

    span {
      color: ${({ theme }) => theme.colors["pink-kisses"]};
    }
  }

  .info-search__wrapper {
    position: relative;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: scroll;
  width: 337px;
  border-radius: 8px;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;
