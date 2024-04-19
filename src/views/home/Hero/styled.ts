import styled from "styled-components";

export const StyledHero = styled.section`
  position: relative;

  .hero-image__wrapper {
    position: relative;
    height: 786px;
  }

  .hero-image {
    object-fit: cover;
  }

  .hero-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 360px;
    left: 83px;
  }

  .hero-title {
    max-width: 499px;
    text-align: center;
    font-size: 63px;
    color: ${({ theme }) => theme.colors["charcoal"]};
  }

  .hero-button {
    width: 218px;
    margin-top: 67px;
  }
`;
