import Text from "../../components/Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Text",
  component: Text,
  args: {
    size: 20,
    strong: false,
    underline: false,
    delete: false,
    color: "red",
    block: false,
    paragraph: false,
    mark: false,
    code: false,
    children: <div>Custom</div>,
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <Text {...args} size="large">
        large
      </Text>
      <Text {...args} size="normal">
        normal
      </Text>
      <Text {...args} size="small">
        small
      </Text>
      <Text {...args} size={24} />
    </>
  ),
};
