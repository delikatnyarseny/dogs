import { StaticImageData } from "next/image";
import { FC } from "react";
import { StyledProductShowcase } from "./styled";
import Image from "next/image";
import { Button } from "@/components/Button";

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

const ProductShowcase: FC<Props> = ({
  title,
  products,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <StyledProductShowcase>
      <h2 className="showcase-title">{title}</h2>

      <ul className="showcase-list">
        {products.map(({ image: { alt, src }, name, price, producer }) => (
          <li key={name} className="showcase-list__item">
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
          </li>
        ))}
      </ul>

      <Button href={buttonLink} size="xxl" className="showcase-button">
        {buttonLabel}
      </Button>
    </StyledProductShowcase>
  );
};

export { ProductShowcase };
