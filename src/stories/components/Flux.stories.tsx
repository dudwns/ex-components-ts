import Flux from "../../components/Flux";
import type { Meta, StoryObj } from "@storybook/react";

const { Row, Col } = Flux;

const meta = {
  title: "component/Flux",
} satisfies Meta<typeof Flux>;

export default meta;
type Story = StoryObj<typeof Flux>;

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: "#44b",
        width: "100%",
        height: 18,
        color: "white",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      Box
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <Row gutter={[8, 8]}>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col offset={4} span={8}>
        <Box />
      </Col>
      <Col span={12}>
        <Box />
      </Col>
    </Row>
  ),
};
