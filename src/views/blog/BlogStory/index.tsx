import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import { StyledBlogStory } from "./styled";

interface Props {
  data: {
    image: StaticImageData;
    alt: string;
    description: string;
    subTitle?: string;
  };
  imageLeft?: boolean;
}

const BlogStory: FC<Props> = ({ data: { image, alt, description, subTitle }, imageLeft = true }) => {
  return (
    <StyledBlogStory imageLeft={imageLeft}>
      <motion.div
        initial={{ x: imageLeft ? -1000 : 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="about-story__image-wrapper__background"
      >
        <div className="about-story__image-wrapper">
          <Image src={image} alt={alt} fill className="about-story__image" />
        </div>
      </motion.div>

      <p className="about-story__description">{description}</p>
    </StyledBlogStory>
  );
};

export { BlogStory };
