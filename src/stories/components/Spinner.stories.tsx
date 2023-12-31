import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../components";

const meta = {
  title: "Component/Spinner",
  component: Spinner,
  args: {
    size: 24,
    color: "red",
    loading: true,
  },
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args) => <Spinner {...args} />,
};
