import styled from "@emotion/styled";
import useHover from "../../hooks/useHover";
import type { Meta } from "@storybook/react";

const meta = {
  title: "Hook/useHover",
} satisfies Meta<typeof useHover>;

export default meta;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Default = () => {
  const [ref, hover] = useHover();

  return (
    <>
      <Box ref={ref} />
      {hover ? <div>ToolTip!</div> : null}
    </>
  );
};
