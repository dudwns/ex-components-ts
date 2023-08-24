import Slider from "../components/Slider";
import type { Meta, StoryObj } from "@storybook/react";
import Spacer from "../components/Spacer";
import Icon from "../components/Icon";

const meta = {
  title: "Component/Slider",
  component: Slider,
  args: {
    defaultValue: 1,
    min: 1,
    max: 100,
    step: 0.1,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => <Slider {...args} />,
};

export const VolumeControl: Story = {
  render: (args) => (
    <Spacer>
      <Icon name="volume" />
      <Slider {...args} style={{ width: 300, display: "inline-block" }} />
      <Icon name="volume-2" />
    </Spacer>
  ),
};
