import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "მონაცემების ჩატვირთვა ვერ მოხერხდა");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;