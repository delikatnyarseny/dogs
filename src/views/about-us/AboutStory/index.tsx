import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import { StyledAboutStory } from "./styled";

interface Props {
  data: {
    image: StaticImageData;
    alt: string;
    description: string;
  };
  imageLeft?: boolean;
}

const AboutStory: FC<Props> = ({ data: { image, alt, description }, imageLeft = true }) => {
  return (
    <StyledAboutStory imageLeft={imageLeft}>
      <div className="about-story__image-wrapper__background">
        <div className="about-story__image-wrapper">
          <Image src={image} alt={alt} fill className="about-story__image" />
        </div>
      </div>

      <p className="about-story__description">{description}</p>
    </StyledAboutStory>
  );
};

export { AboutStory };
