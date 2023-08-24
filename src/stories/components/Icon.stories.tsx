import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../../components/Icon";

const meta = {
  title: "component/Icon",
  component: Icon,
  args: {
    name: "box",
    size: 16,
    strokeWidth: 2,
    rotate: 0,
    color: "#222",
  },
  argTypes: {
    size: { control: { type: "range", min: 16, max: 80 } },
    strokeWidth: { control: { type: "range", min: 2, max: 6 } },
    rotate: { control: { type: "range", min: 0, max: 360 } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};
