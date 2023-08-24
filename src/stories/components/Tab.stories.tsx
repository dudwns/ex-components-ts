import Tab from "../../components/Tab";
import Header from "../../components/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Tab",
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab>
      <Tab.Item title="Item 1" index="item1">
        Content 1
      </Tab.Item>
      <Tab.Item title="Item 1" index="item2">
        Content 2
      </Tab.Item>
      <Tab.Item title="Item 3" index="item3">
        <Header>Header</Header>
      </Tab.Item>
    </Tab>
  ),
};
