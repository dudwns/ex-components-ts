import { useEffect } from "react";
import { useAsyncFn } from ".";

const useAsync = (fn: () => Promise<string>, deps: string[]) => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
