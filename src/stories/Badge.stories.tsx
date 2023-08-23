import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/Badge";
import Image from "../components/Image";

const meta = {
  title: "component/Badge",
  component: Badge,
  args: {
    count: 10,
    maxCount: 100,
    showZero: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => (
    <Badge {...args}>
      <Image src="https://picsum.photos/60" width={60} style={{ borderRadius: 8 }} />
    </Badge>
  ),
};

export const Dot: Story = {
  render: (args) => (
    <Badge {...args} dot>
      <Image src="https://picsum.photos/40" width={40} />
    </Badge>
  ),
};
