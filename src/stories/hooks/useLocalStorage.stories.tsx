import { useLocalStorage } from "../../hooks";

export default {
  title: "Hook/useLocalStorage",
};

export const Default = () => {
  const [status, setStatue] = useLocalStorage("status", "404 NOT FOUND");

  return (
    <div>
      <button onClick={() => setStatue("200 OK")}>Resend</button>
      {status}
    </div>
  );
};
