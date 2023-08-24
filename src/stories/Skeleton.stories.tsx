import Skeleton from "../components/Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "component/Skeleton",
} satisfies Meta<typeof Skeleton>;

export default meta;
type BoxStory = StoryObj<typeof Skeleton.Box>;
type CircleStory = StoryObj<typeof Skeleton.Circle>;
type ParagraphStory = StoryObj<typeof Skeleton.Paragraph>;

export const Box: BoxStory = {
  args: {
    width: 200,
    height: 100,
  },
  render: (args) => <Skeleton.Box {...args} />,
};

export const Circle: CircleStory = {
  args: {
    size: 200,
  },
  render: (args) => <Skeleton.Circle {...args} />,
};

export const Paragraph: ParagraphStory = {
  args: {
    line: 4,
  },
  render: () => (
    <>
      <div style={{ float: "left", marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: "left", width: "80%" }}>
        <Skeleton.Paragraph line={4} />
      </div>
      <div style={{ clear: "both" }} />
    </>
  ),
};
