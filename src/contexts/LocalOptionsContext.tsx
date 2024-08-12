import React, { createContext, useContext, useState, ReactNode } from "react";

export type LocationContextType = {
  location: "start" | "end" | null;
  setLocation: (location: "start" | "end" | null) => void;
  startLocation: string | null; // Alteração aqui
  endLocation: string | null; // Alteração aqui
  setStartLocation: (startLocation: string | null) => void; // Alteração aqui
  setEndLocation: (endLocation: string | null) => void; // Alteração aqui
  sameReturn: boolean;
  setSameReturn: (value: boolean) => void;
};

export const LocationContext = createContext<LocationContextType>(
  {} as LocationContextType
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<"start" | "end" | null>(null);
  const [startLocation, setStartLocation] = useState<string | null>(null); // Alteração aqui
  const [endLocation, setEndLocation] = useState<string | null>(null);
  const [sameReturn, setSameReturn] = useState(true);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        endLocation,
        setEndLocation,
        setStartLocation,
        startLocation,
        sameReturn,
        setSameReturn,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
