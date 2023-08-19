import React from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedSearch, setDebouncedSearch] = React.useState(value);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDebouncedSearch(value);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [value, delay]);
  return debouncedSearch;
};
