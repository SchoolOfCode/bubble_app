"use client"
import { createContext, useContext, useState } from "react";

export const MoodDataContext = createContext();

export const MoodDataProvider = ({ children }) => {
  // Initialize states for each mood using the useState hook
  const [happyData, setHappyData] = useState(null);
  const [sadData, setSadData] = useState(null);
  const [tiredData, setTiredData] = useState(null);
  const [cheekyData, setCheekyData] = useState(null);
  const [worriedData, setWorriedData] = useState(null);
  const [angryData, setAngryData] = useState(null);
  const [logs, setLogs] = useState([]);

  // Provide mood states through the context provider
  return (
    <MoodDataContext.Provider
      value={{
        happyData,
        setHappyData,
        sadData,
        setSadData,
        tiredData,
        setTiredData,
        cheekyData,
        setCheekyData,
        worriedData,
        setWorriedData,
        angryData,
        setAngryData,
        logs,
        setLogs,
      }}
    >
      {children}
    </MoodDataContext.Provider>
  );
};