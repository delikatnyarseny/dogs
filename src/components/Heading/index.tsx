import { FC } from "react";

import { StyledAboutHeading } from "./styled";

interface Props {
  title: string;
  note?: string;
}

const Heading: FC<Props> = ({ title, note }) => {
  return (
    <StyledAboutHeading>
      <h1 className="about-heading__title">{title}</h1>

      {note && <p className="about-heading__note">{note}</p>}
    </StyledAboutHeading>
  );
};

export { Heading };
