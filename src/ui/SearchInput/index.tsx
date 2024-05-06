import { ChangeEvent, FC } from "react";

import { SearchIcon } from "@/icons/SearchIcon";

import { StyledSearchInput } from "./styled";

export interface Props {
  className?: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<Props> = ({ className, value, placeholder, onChange }) => {
  return (
    <StyledSearchInput className={className}>
      <input value={value} onChange={onChange} placeholder={placeholder} className="search-input__input" />
      <SearchIcon className="search-input__icon" />
    </StyledSearchInput>
  );
};

export { SearchInput };
