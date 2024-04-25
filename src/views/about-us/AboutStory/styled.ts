import styled from "styled-components";

export const StyledAboutStory = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  margin-top: 128px;
  flex-direction: ${(props) => (props.imageLeft ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;

  .about-story__image-wrapper__background {
    width: 480px;
    height: 480px;
    padding: 10px;
    background: ${({ theme }) => theme.colors["rosey-cheek"]};
    flex-shrink: 0;
  }

  .about-story__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .about-story__description {
    width: 586px;
    font-size: 30px;
    margin-left: 150px;
    margin-left: ${(props) => (props.imageLeft ? "150px" : "0px")};
    margin-right: ${(props) => (props.imageLeft ? "0px" : "150px")};
    text-align: center;
    white-space: pre-line;
    line-height: 36px;
  }
`;
