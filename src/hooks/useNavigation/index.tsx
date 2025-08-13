import { useCallback, useEffect, useState } from "react";

export function useNavigation({ limit }: { limit: number }) {
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleNavigation = useCallback(
    (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "ArrowDown") {
        setIndex((current) => (current < limit ? current + 1 : current));
        return;
      }
      if (e.key === "ArrowUp") {
        setIndex((current) => (current > 0 ? current - 1 : current));
        return;
      }

      if (e.key === "Enter") {
        setSelectedItem(index);
      }
    },
    [limit, index]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleNavigation);

    return () => document.removeEventListener("keydown", handleNavigation);
  }, [handleNavigation]);

  return {
    indexCurrent: index,
    selectedItem,
  };
}
