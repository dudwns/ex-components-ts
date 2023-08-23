import Spacer from "../components/Spacer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Spacer",
  component: Spacer,
  args: {
    type: "horizontal",
    size: 8,
  },
  argTypes: {
    size: { control: { type: "range", min: 8, max: 64 } },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof Spacer>;

interface BoxProps {
  block?: string | boolean;
  style?: React.CSSProperties;
}

const Box = ({ block, style }: BoxProps) => {
  return (
    <div
      style={{
        display: block ? "block" : "inline-block",
        width: 100,
        height: 100,
        backgroundColor: "blue",
        ...style,
      }}
    />
  );
};

export const Horizontal: Story = {
  render: (args) => (
    <Spacer {...args} type="horizontal">
      <Box />
      <Box />
      <Box />
    </Spacer>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Spacer {...args} type="vertical">
      <Box block />
      <Box block />
      <Box block />
    </Spacer>
  ),
};
