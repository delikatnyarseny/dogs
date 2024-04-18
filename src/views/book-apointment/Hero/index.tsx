import { FC } from "react";
import { StyledHero } from "./styled";
import Image from "next/image";
import heroImage from "@/assets/book-appt-hero.png";

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <StyledHero>
      <div className="hero-image__wrapper">
        <Image src={heroImage} fill alt="happy dog" className="hero-image" />
      </div>

      <h1 className="hero-title">
        Book An Appointment With Our Groom Specialist Today!
      </h1>
    </StyledHero>
  );
};
