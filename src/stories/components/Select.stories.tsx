import Select from "../../components/Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "component/Select",
  component: Select,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    block: false,
    invalid: false,
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args} data={["Item1", "Item2", { label: "Item3", value: "value" }]} />
  ),
};
