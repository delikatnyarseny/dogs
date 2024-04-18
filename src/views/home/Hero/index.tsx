import Image from "next/image";
import { FC } from "react";

import heroImage from "@/assets/home-hero.png";
import { Button } from "@/components/Button";

import { StyledHero } from "./styled";

interface Props {}

const Hero: FC<Props> = () => {
  return (
    <StyledHero>
      <div className="hero-image__wrapper">
        <Image src={heroImage} fill alt="hero-image" className="hero-image" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Book your doggy spa day!</h1>

        <Button size="xl" className="hero-button" href="/book-appointment">
          Book Appointment
        </Button>
      </div>
    </StyledHero>
  );
};

export { Hero };
