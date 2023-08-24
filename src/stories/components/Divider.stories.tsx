import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../../components/Divider";
import Text from "../../components/Text";

const meta = {
  title: "component/Divider",
  component: Divider,
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <>
      <Text>위</Text>
      <Divider type="horizontal" />
      <Text>아래</Text>
    </>
  ),
};

export const Vertical: Story = {
  render: () => (
    <>
      <Text>왼쪽</Text>
      <Divider type="vertical" />
      <Text>오른쪽</Text>
    </>
  ),
};
