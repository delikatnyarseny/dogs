import emailjs from "emailjs-com";
import Image from "next/image";
import { FC, FormEvent, useEffect, useState } from "react";

import homeModalImage from "@/assets/home-modal.png";
import { Button } from "@/ui/Button";
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_HOME_MODAL_TEMPLATE_ID,
        {
          email: inputValue,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_PUBLIC_KEY,
      )
      .then(() => {
        setInputValue("");
        setIsModalOpen(false);
      });
  };
  return (
    <StyledHomeModal>
      <Modal isOpen={isModalOpen} onClose={handleClose} hasOverlay={false}>
        <div className="home-modal__background">
          <div className="home-modal">
            <button onClick={handleClose} className="home-modal__close-button">
              X
            </button>

            <div className="home-modal__content-container">
              <div className="home-modal__content">
                <p className="home-modal__title">Sign Up to Bark Newsletter</p>
                <p className="home-modal__offer">Get 10% Off Your First Spa Treatment </p>

                <form className="home-modal__input-form" onSubmit={handleSubmit}>
                  <input
                    name="Email"
                    value={inputValue}
                    placeholder="Email"
                    onChange={handleInputChange}
                    className="home-modal__input"
                  />

                  <Button size="sm" className="home-modal__button">
                    Sign Up
                  </Button>
                </form>

                <p className="home-modal__note">
                  *By completing this form you are signing up to receive our emails and can unsubscribe at any time.
                </p>
              </div>

              <div className="home-modal__image-background">
                <div className="home-modal__image-container">
                  <Image src={homeModalImage} alt="home-modal" className="home-modal__image" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </StyledHomeModal>
  );
};

export { HomeModal };
