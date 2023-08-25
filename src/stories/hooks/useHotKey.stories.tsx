import { useState } from "react";
import { useHotKey } from "../../hooks";

export default {
  title: "Hook/useHotKey",
};

export const Default = () => {
  const hotkeys = [
    {
      global: true,
      combo: "meta+shift+k",
      onKeyDown: () => {
        alert("meta+shitf+k");
      },
    },
    {
      global: true,
      combo: "esc",
      onKeyDown: () => {
        alert("esc");
      },
    },
    {
      global: false,
      combo: "esc",
      onKeyDown: () => {
        alert("esc");
      },
    },
  ];

  useHotKey(hotkeys);

  return <div>useHotKey 테스트</div>;
};

export const LocalKey = () => {
  const [value, setValue] = useState("");
  const hotkeys = [
    {
      global: false,
      combo: "esc",
      onKeyDown: () => {
        setValue("");
      },
    },
  ];

  const { handleKeyDown } = useHotKey(hotkeys);

  return (
    <div>
      <div>useHotKey 테스트</div>
      <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
