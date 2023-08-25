import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../components";

const meta = {
  title: "Component/Toggle",
  component: Toggle,
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => <Toggle {...args} />,
};
