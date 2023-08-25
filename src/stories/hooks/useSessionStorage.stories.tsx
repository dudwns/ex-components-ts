import { useSessionStorage } from "../../hooks";

export default {
  title: "Hook/useSessionStorage",
};

export const Default = () => {
  const [status, setStatue] = useSessionStorage("status", "404 NOT FOUND");

  return (
    <div>
      <button onClick={() => setStatue("200 OK")}>Resend</button>
      {status}
    </div>
  );
};
