import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import { InputField, Props } from "@/ui/InputField";

const defaultProps: Props = {
  name: "example",
  value: "",
  placeholder: "Enter text",
  onChange: () => {},
};

const Template: StoryFn<Props> = (args: any) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export default {
  title: "InputField",
  component: InputField,
} as Meta;
