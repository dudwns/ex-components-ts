import Upload from "../components/Upload";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "component/Upload",
  component: Upload,
  args: {},
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: () => (
    <Upload>
      <button>Click me</button>
    </Upload>
  ),
};

export const AccessFile: Story = {
  render: () => <Upload>{(file) => <button>{file ? file.name : "Click me"}</button>}</Upload>,
};

export const Droppable: Story = {
  render: () => (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: "4px dashed #aaa",
            borderColor: dragging ? "black" : "#aaa",
          }}
        >
          {file ? file.name : "Click or drag file to this area to upload."}
        </div>
      )}
    </Upload>
  ),
};
