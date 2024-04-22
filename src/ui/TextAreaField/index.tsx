import React, { FC } from "react";

import { StyledTextArea } from "./styled";

interface Props {
  className?: string;
  error?: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: FC<Props> = ({ className, error, name, value, placeholder, onChange }) => {
  return (
    <StyledTextArea className={className}>
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} className="textarea-input" />

      {error && <p className="textarea-error">{error}</p>}
    </StyledTextArea>
  );
};

export { TextAreaField };
