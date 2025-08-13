import { useEffect, useState } from "react";
import { apiGet, IResponse } from "../../service/api";
import { handleError } from "../../service/error.Handler";

export function useHome() {
  const [data, setData] = useState<IResponse[]>([]);

  async function handleData() {
    try {
      const data = await apiGet();
      setData(data);
    } catch (err) {
      handleError(err);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return {
    data,
  };
}
