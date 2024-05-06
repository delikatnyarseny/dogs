import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import { Props, SearchInput } from "@/ui/SearchInput";

const defaultProps: Props = {
  value: "",
  placeholder: "Search...",
  onChange: () => {},
};

const Template: StoryFn<Props> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <SearchInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export default {
  title: "SearchInput",
  component: SearchInput,
} as Meta;
