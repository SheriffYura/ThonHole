import React, { useState } from "react";
import { MenuWrapper } from "./index.styles.js";
import { Logo } from "../logo";
import { Button } from "../button";
import { Modal } from "../modal";

export const MainMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpenClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MenuWrapper>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        Modal
      </Modal>
      <Logo />
      <Button view="secondary" onClick={onModalOpenClick}>
        Add lost thing
      </Button>
      <Button view="primary">Login</Button>
    </MenuWrapper>
  );
};
