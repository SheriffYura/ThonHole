import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalWrapper, ModalContent, ModalBackdrop } from "./index.styles.js";

export const Modal = ({ children, isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen || false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const defaultClose = () => {
    setIsModalOpen(false);
    onClose?.();
  };

  return (
    isModalOpen &&
    createPortal(
      <ModalWrapper>
        <ModalContent>
          <div onClick={defaultClose}>X</div>
          {children}
        </ModalContent>
        <ModalBackdrop onClick={defaultClose} />
      </ModalWrapper>,
      document.body
    )
  );
};
