import FocusTrap from "focus-trap-react";
import React, { FC, ReactNode } from "react";

import { StyledModal } from "./styled";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  hasOverlay?: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, onClose, children, hasOverlay = true }) => {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <StyledModal className="modal-overlay" onClick={onClose} hasOverlay={hasOverlay}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </StyledModal>
    </FocusTrap>
  );
};

export { Modal };
