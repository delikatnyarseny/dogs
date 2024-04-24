import FocusTrap from "focus-trap-react";
import React, { FC, ReactNode } from "react";

import { StyledModal } from "./styled";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <StyledModal className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </StyledModal>
    </FocusTrap>
  );
};

export { Modal };
