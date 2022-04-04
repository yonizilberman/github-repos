import { useState } from "react";

interface ClickRequestArg<T> {
  httpRequest(url?: string): Promise<T[]>;
}

export function useClickRequest<T>({ httpRequest }: ClickRequestArg<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  const handleData = async (url?: string) => {
    try {
      setIsLoading(true);

      const data = await httpRequest(url);
      setError("");
      setData(data);
    } catch (e) {
      setData([]);
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleData,
    data,
    error,
    isLoading,
  };
}
