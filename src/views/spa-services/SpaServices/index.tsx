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

  return (
    <StyledSpaServices>
      <ul className="spa-list" data-testid="spa-list">
        {data.map(({ title, price, description }) => (
          <li key={title} className="spa-list__item">
            <div className="spa-list__item-title">
              <p>{title}</p>
              <p>{price}</p>
            </div>

            <p className="spa-list__item-description">{description}</p>
          </li>
        ))}
      </ul>
    </StyledSpaServices>
  );
};

export { SpaServices };
