import { motion } from "framer-motion";
import { FC } from "react";

import { StyledSpaServices } from "./styled";

interface Props {
  data: {
    title: string;
    price: string;
    description: string;
  }[];
}

const SpaServices: FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return null;
  }

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <StyledSpaServices>
      <motion.ul className="spa-list" data-testid="spa-list" initial="hidden" animate="visible">
        {data.map(({ title, price, description }, index) => (
          <motion.li key={title} className="spa-list__item" custom={index} variants={listItemVariants}>
            <div className="spa-list__item-title">
              <p>{title}</p>
              <p>{price}</p>
            </div>

            <p className="spa-list__item-description">{description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </StyledSpaServices>
  );
};

export { SpaServices };
