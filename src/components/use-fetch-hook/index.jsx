import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);

    try {
      const resp = await fetch(url, { ...options });
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      const respData = await resp.json();
      setData(respData);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`${error}. Error Occured`);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
}
