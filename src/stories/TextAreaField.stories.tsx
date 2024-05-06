import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import { Props, TextAreaField } from "@/ui/TextAreaField";

const defaultProps: Props = {
  name: "example",
  value: "",
  placeholder: "Enter text",
  onChange: () => {},
};

const Template: StoryFn<Props> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <TextAreaField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export default {
  title: "TextAreaField",
  component: TextAreaField,
} as Meta;
