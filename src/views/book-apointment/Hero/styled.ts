import styled from "styled-components";

export const StyledHero = styled.section`
  position: relative;

  .hero-image__wrapper {
    position: relative;
    height: 834px;
  }

  .hero-image {
    object-fit: cover;
  }

  .hero-title {
    position: absolute;
    top: 97px;
    left: 110px;
    max-width: 478px;
    line-height: 89px;
    color: #fff;
    font-size: 70px;
  }
`;
