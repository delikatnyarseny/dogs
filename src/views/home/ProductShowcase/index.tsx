import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/ui/Button";

import { StyledProductShowcase } from "./styled";

interface Props {
  title: string;
  products: {
    image: {
      src: StaticImageData;
      alt: string;
    };
    name: string;
    producer: string;
    price: string;
  }[];
  buttonLabel: string;
  buttonLink: string;
}

const ProductShowcase: FC<Props> = ({ title, products, buttonLabel, buttonLink }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Запуск анимации, когда элемент на 20% виден
  });

  const listItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  // Запуск анимации, когда элемент виден
  if (inView) {
    controls.start("visible");
  }

  return (
    <StyledProductShowcase ref={ref}>
      <h2 className="showcase-title">{title}</h2>

      <motion.ul className="showcase-list" initial="hidden" animate={controls}>
        {products.map(({ image: { alt, src }, name, price, producer }, index) => (
          <motion.li key={name} className="showcase-list__item" custom={index} variants={listItemVariants}>
            <div className="showcase-item__image-container">
              <div className="showcase-item__image">
                <Image src={src} alt={alt} fill />
              </div>
            </div>

            <div className="showcase-item__content">
              <p>{name}</p>
              <p>{producer}</p>
              <p className="showcase-item__price">{price}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={buttonVariants} initial="hidden" animate={controls}>
        <Button href={buttonLink} size="xxl" className="showcase-button">
          {buttonLabel}
        </Button>
      </motion.div>
    </StyledProductShowcase>
  );
};

export { ProductShowcase };
