import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../components/Avatar";

const meta = {
  title: "component/Avatar",
  args: {
    src: "https://picsum.photos/200",
    shape: "circle",
    size: 70,
    mode: "cover",
  },
  argTypes: {
    size: {
      control: { type: "range", min: 40, max: 200 },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
};

export const Group: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.Group>
  ),
};
