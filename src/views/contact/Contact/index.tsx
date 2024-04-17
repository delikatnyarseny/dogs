import { FC } from "react";
import { ContactForm } from "./components/ContactForm";

interface Props {}

export const Contact: FC<Props> = () => {
  return (
    <>
      <h1>Contact</h1>

      <div>
        For customer service inquiries, please email us at
        customerservice@luxeanimalspa.ca. For spa inquiries, please include your
        animal’s name for faster service. For your protection, please do not
        include your credit card or banking information details in your email.{" "}
      </div>

      <ContactForm />
    </>
  );
};
