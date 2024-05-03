import Link from "next/link";
import { FC, FormEvent, useState } from "react";

import { CUSTOMER_SERVICE_LINKS, NAVIGATION_LINKS } from "@/constants/footer";
import { Button } from "@/ui/Button";
import { InputField } from "@/ui/InputField";

import { StyledFooter } from "./styled";

interface Props {}

export const Footer: FC<Props> = () => {
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledFooter>
      <div>
        <p className="footer-heading">Customer Service</p>

        <ul className="footer-links">
          {CUSTOMER_SERVICE_LINKS.map(({ label, link }) => (
            <li key={label}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="footer-heading">Subscribe to our Newsletter</p>

        <form className="footer-input__container" onSubmit={handleSubmit}>
          <InputField
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            className="footer-input__container-input"
          />

          <Button type="submit" size="lg" className="footer-button">
            Submit
          </Button>
        </form>

        <div className="footer-media__container">
          <p className="footer-heading">Connect With Us On Social Media</p>
        </div>
      </div>

      <div>
        <p className="footer-heading">Navigation</p>

        <ul className="footer-links">
          {NAVIGATION_LINKS.map(({ label, link }) => (
            <li key={label}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};
