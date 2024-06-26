import styled from "styled-components";

export const StyledModal = styled.div<{ hasOverlay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ hasOverlay }) => (hasOverlay ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    border-radius: 5px;
    position: relative;
    width: auto;
  }
`;
