import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { Button, ButtonProps } from "@/ui/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
