import { FC } from "react";
import { StyledHero } from "./styled";
import heroImage from "@/assets/home-hero.png";
import Image from "next/image";
import { Button } from "@/components/Button";

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
