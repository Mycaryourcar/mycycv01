import { useContext } from "react";

import { LocationContext } from "@contexts/LocalOptionsContext";

export function useLocalOption() {
  const context = useContext(LocationContext);

  return context;
}
