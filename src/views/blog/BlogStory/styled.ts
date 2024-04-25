import styled from "styled-components";

export const StyledBlogStory = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  margin-top: 80px;
  flex-direction: ${(props) => (props.imageLeft ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;

  .about-story__image-wrapper__background {
    width: 644px;
    height: 584px;
    padding: 5px;
    background: ${({ theme }) => theme.colors["rosey-cheek"]};
    flex-shrink: 0;
  }

  .about-story__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .about-story__image {
    position: relative;
    z-index: 100;
  }

  .about-story__subTitle {
    font-size: 36px;
  }

  .about-story__description {
    width: 720px;
    font-size: 30px;
    margin-left: 90px;
    margin-left: ${(props) => (props.imageLeft ? "150px" : "0px")};
    margin-right: ${(props) => (props.imageLeft ? "0px" : "150px")};
    text-align: center;
    white-space: pre-line;
    line-height: 24px;
  }
`;
