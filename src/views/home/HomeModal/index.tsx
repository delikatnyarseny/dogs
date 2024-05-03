import Image from "next/image";
import { FC, useEffect, useState } from "react";

import homeModalImage from "@/assets/home-modal.png";
import { Button } from "@/ui/Button";
import { InputField } from "@/ui/InputField";
import { Modal } from "@/ui/Modal";

import { StyledHomeModal } from "./styled";

interface Props {}

const HomeModal: FC<Props> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // Wait 1 hour before showing modal window again
  useEffect(() => {
    const lastClosedTime = localStorage.getItem("lastClosedTime");
    const currentTime = new Date().getTime();

    if (!lastClosedTime || currentTime - parseInt(lastClosedTime) > 3600000) {
      setIsModalOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("lastClosedTime", String(new Date().getTime()));
    setIsModalOpen(false);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <StyledHomeModal>
      <Modal isOpen={isModalOpen} onClose={handleClose} hasOverlay={false}>
        <button onClick={handleClose}>X</button>
        <div className="home-modal__content">
          <div>
            <p className="home-modal__title">Sign Up to Bark Newsletter</p>
            <p className="home-modal__offer">Get 10% Off Your First Spa Treatment </p>

            <InputField name="Email" value={inputValue} placeholder="Email" onChange={handleInputChange} />
            <Button size="sm" className="home-modal__button">
              Sign Up
            </Button>

            <p className="home-modal__note">
              *By completing this form you are signing up to receive our emails and can unsubscribe at any time.
            </p>
          </div>
          <div>
            <Image src={homeModalImage} width={500} height={500} alt="home-modal" />
          </div>
        </div>
      </Modal>
    </StyledHomeModal>
  );
};

export { HomeModal };
