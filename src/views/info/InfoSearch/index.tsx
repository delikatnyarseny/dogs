import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";

import { StyledInfoSearch } from "./styled";
import useDebounce from "./useDebounce";

interface Dog {
  name: string;
  image_link: string;
}

const InfoSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchResults = async (query: string) => {
    try {
      setLoading(true);
      const response = await axios.get<Dog[]>(`https://api.api-ninjas.com/v1/dogs?name=${query}`, {
        headers: {
          "x-api-key": "noZB2jRaDwoaCOtPRefMqA==HXf2dolu6fqd8Cle",
        },
      });
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      fetchResults(debouncedValue);
    } else {
      setSearchResults([]);
    }
  }, [debouncedValue]);

  return (
    <StyledInfoSearch>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Search for dogs by name..." />
      {loading && <p>Loading...</p>}
      <ul>
        {searchResults.map((dog) => (
          <li key={dog.name}>
            <img src={dog.image_link} alt={dog.name} />
            <p>Name: {dog.name}</p>
          </li>
        ))}
      </ul>
    </StyledInfoSearch>
  );
};

export { InfoSearch };
