import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

import heroImage from "@/assets/home-hero.png";
import { Button } from "@/ui/Button";

import { StyledHero } from "./styled";

interface Props {}

const Hero: FC<Props> = () => {
  // Animation variants for the image and content
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <StyledHero>
      <motion.div className="hero-image__wrapper" initial="hidden" animate="visible" variants={imageVariants}>
        <Image src={heroImage} fill alt="hero-image" className="hero-image" />
      </motion.div>

      <motion.div className="hero-content" initial="hidden" animate="visible" variants={contentVariants}>
        <h1 className="hero-title">Book your doggy spa day!</h1>
        <Button size="xl" className="hero-button" href="/book-appointment">
          Book Appointment
        </Button>
      </motion.div>
    </StyledHero>
  );
};

export { Hero };
