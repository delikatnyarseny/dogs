import { gql, useQuery } from "@apollo/client";
import React, { ChangeEvent, FC, useState } from "react";

import { Dog } from "@/interfaces/IDogInfo";
import { SearchInput } from "@/ui/SearchInput";

import { DogInfo } from "./components/DogInfo";
import { DropdownItem, DropdownList, StyledInfoSearch } from "./styled";
import useDebounce from "./useDebounce";

const GET_DOGS_BY_NAME = gql`
  query GetDogsByName($name: String!) {
    dogsByName(name: $name) @rest(type: "Dog", path: "dogs?name={args.name}") {
      name
      image_link
      energy
      min_life_expectancy
      good_with_strangers
      good_with_other_dogs
    }
  }
`;

const InfoSearch: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const debouncedValue = useDebounce(inputValue, 300);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowDropdown(true);
  };
  const { data, loading, error } = useQuery<{ dogsByName: Dog[] }>(GET_DOGS_BY_NAME, {
    variables: { name: debouncedValue },
    skip: !debouncedValue,
  });

  const handleDogSelect = (dog: Dog) => {
    setSelectedDog(dog);
    setInputValue("");
    setShowDropdown(false);
  };

  return (
    <StyledInfoSearch>
      <h1 className="info-title">INFO DOG</h1>

      <div className="info-search__container">
        <p className="info-search__selection">
          Current Selection: <span>{selectedDog?.name}</span>
        </p>

        <div className="info-search__wrapper">
          <SearchInput value={inputValue} placeholder="Search" onChange={handleChange} />

          {data && showDropdown && (
            <DropdownList>
              {data.dogsByName.map((dog) => (
                <DropdownItem key={dog.name} onClick={() => handleDogSelect(dog)}>
                  <img src={dog.image_link} alt={dog.name} />
                  <p>{dog.name}</p>
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </div>
      </div>

      {error && <p>Error!</p>}

      {selectedDog && <DogInfo data={selectedDog} />}
    </StyledInfoSearch>
  );
};

export { InfoSearch };
