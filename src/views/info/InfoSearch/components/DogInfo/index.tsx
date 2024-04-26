import Image from "next/image";
import { FC } from "react";

import { Dog } from "@/interfaces/IDogInfo";

import { StyledDogInfo } from "./styled";
interface Props {
  data: Dog;
}

const DogInfo: FC<Props> = ({
  data: { name, image_link, energy, min_life_expectancy, good_with_strangers, good_with_other_dogs },
}) => {
  return (
    <StyledDogInfo>
      <div className="dog-image__wrapper">
        <Image src={image_link} width={729} height={486} alt="dog-image" />

        <p className="dog-name">{name}</p>
      </div>

      <div className="dog-properties">
        <p>Energy: {energy}</p>
        <p>Min life expectancy: {min_life_expectancy}</p>
        <p>Good with strangers: {good_with_strangers}</p>
        <p>Good with other dogs: {good_with_other_dogs}</p>
      </div>
    </StyledDogInfo>
  );
};

export { DogInfo };
