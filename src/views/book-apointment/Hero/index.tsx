import Image from "next/image";
import { FC } from "react";

import heroImage from "@/assets/book-appt-hero.png";

import { StyledHero } from "./styled";

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <StyledHero>
      <div className="hero-image__wrapper">
        <Image src={heroImage} fill alt="happy dog" className="hero-image" />
      </div>

      <h1 className="hero-title">Book An Appointment With Our Groom Specialist Today!</h1>
    </StyledHero>
  );
};

export { Hero };
