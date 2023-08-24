import Header from "../../components/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Header",
  component: Header,
  args: {
    level: 1,
    strong: false,
    underline: false,
    color: "red",
  },
  argTypes: {
    level: { control: { type: "range", min: 1, max: 6 } },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => <Header {...args}>Header</Header>,
};
