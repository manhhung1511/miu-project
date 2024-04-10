import { useEffect, useState } from "react";

import { DELAY_TIME_DEBOUNCE } from "core/constants/common";

export const useDebounceMemo = (
  value: string,
  delay: number = DELAY_TIME_DEBOUNCE,
  func?: () => void,
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
      if (value) func?.();
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
