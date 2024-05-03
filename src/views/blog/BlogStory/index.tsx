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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-story__image-wrapper"
      >
        <div className="about-story__image">
          <Image src={image} alt={alt} fill />
        </div>
      </motion.div>

      <div className="about-story__content">
        {subTitle && <p className="about-story__subTitle">{subTitle}</p>}
        <p className="about-story__description">{description}</p>
      </div>
    </StyledBlogStory>
  );
};

export { BlogStory };
