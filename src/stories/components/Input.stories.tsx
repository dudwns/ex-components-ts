import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components";

const meta = {
  title: "component/Input",
  component: Input,
  args: {
    label: "Label",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
    readonly: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
};
