import React, { ChangeEvent, FC } from "react";

import { StyledInputField } from "./styled";

interface InputFieldProps {
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  value,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <StyledInputField>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field__input"
      />

      {error && <p className="input-field__error">{error}</p>}
    </StyledInputField>
  );
};
