import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "../components/Breadcrumb";

const meta = {
  title: "component/Breadcrumb",
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="level1">Level 1</Breadcrumb.Item>
      <Breadcrumb.Item href="level2">Level 2</Breadcrumb.Item>
    </Breadcrumb>
  ),
};
