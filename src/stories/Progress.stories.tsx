import Progress from "../components/Progress";
import type { Meta } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Component/Progress",
  component: Progress,
  args: { value: 20 },
} satisfies Meta<typeof Progress>;

export default meta;

export const Default = () => {
  const [value, setValue] = useState(20);

  return (
    <div>
      <button onClick={() => setValue(100)}>change value</button>
      <Progress value={value} />
    </div>
  );
};
