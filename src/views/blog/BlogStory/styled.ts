import styled from "styled-components";

export const StyledBlogStory = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 80px auto 0px;

  .about-story__image-wrapper {
    width: 100%;
    max-width: 644px;
    height: 500px;
    padding: 5px;
    background: ${({ theme }) => theme.colors["rosey-cheek"]};
    flex-shrink: 0;
  }

  .about-story__image {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .about-story__content {
    width: 100%;
    max-width: 720px;
    text-align: center;
    margin-top: 20px;
  }

  .about-story__subTitle {
    font-size: 24px;
  }

  .about-story__description {
    font-size: 18px;
    line-height: 1.5;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: ${(props) => (props.imageLeft ? "row" : "row-reverse")};

    .about-story__image-wrapper {
      max-width: 50%;
      margin-right: ${(props) => (props.imageLeft ? "30px" : "0")};
      margin-left: ${(props) => (props.imageLeft ? "0" : "30px")};
    }

    .about-story__content {
      max-width: 50%;
    }
  }
`;
