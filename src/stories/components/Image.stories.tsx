import Image from "../../components/Image";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Image",
  component: Image,
  args: {
    lazy: false,
    block: false,
    src: "https://picsum.photos/200",
    placeholder: "https://via.placeholder.com/200",
    threshold: 0.5,
    width: 200,
    height: 200,
    alt: "image",
    mode: "cover",
  },
  argTypes: {
    width: {
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      control: { type: "range", min: 200, max: 600 },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Image {...args} />,
};

export const Lazy: Story = {
  render: (args) => (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} lazy block src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  ),
};
