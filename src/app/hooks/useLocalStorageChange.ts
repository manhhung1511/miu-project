import { useCallback, useEffect, useState } from "react";

import { jsonParse } from "core/localstorages/json";

declare global {
  interface WindowEventMap {
    localStorageChange: StorageEvent;
  }
}

function useLocalStorageChange<T>(key: string): T {
  const readValue = useCallback((): T => {
    const item = localStorage.getItem(key) as string;
    return jsonParse(item);
  }, [key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    const handleStorageChange = (e: any) => {
      const detail = e?.details;
      if (detail?.key === key) setStoredValue(readValue());
    };

    window.addEventListener("localStorageChange", handleStorageChange);

    return () => {
      window.removeEventListener("localStorageChange", handleStorageChange);
    };
  }, []);

  return storedValue;
}

export default useLocalStorageChange;
