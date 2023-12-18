"use client"
import { createContext, useContext, useState } from "react"

export const AverageDataContext = createContext();

export const AverageDataProvider = ({ children }) => {
  const [averageData, setAverageData] = useState(null);

  return (
    <AverageDataContext.Provider value={{ setAverageData, averageData }}>
      {children}
    </AverageDataContext.Provider>
  );
};