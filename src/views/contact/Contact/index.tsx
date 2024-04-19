import { FC } from "react";

import { ContactForm } from "./components/ContactForm";
import { StyledContact } from "./styled";

interface Props {}

const Contact: FC<Props> = () => {
  return (
    <StyledContact>
      <h1 className="contact-title">Contact</h1>

      <div className="contact-divider" />

      <p className="contact-description">
        For customer service inquiries, please email us at{" "}
        <a href="mailto:customerservice@luxeanimalspa.ca">customerservice@luxeanimalspa.ca.</a> For spa inquiries,
        please include your animal’s name for faster service. For your protection, please do not include your credit
        card or banking information details in your email.
      </p>

      <ContactForm />
    </StyledContact>
  );
};

export { Contact };
