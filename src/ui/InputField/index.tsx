import React, { ChangeEvent, FC } from "react";

import { StyledInputField } from "./styled";

interface Props {
  className?: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: FC<Props> = ({ className, name, value, placeholder, error, onChange }) => {
  return (
    <StyledInputField className={className}>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} className="input-field__input" />

      {error && <p className="input-field__error">{error}</p>}
    </StyledInputField>
  );
};

export { InputField };
