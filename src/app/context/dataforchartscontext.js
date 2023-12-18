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
  const [weekhappyData, setWeekHappyData] = useState(null);
  const [weeksadData, setWeekSadData] = useState(null);
  const [weektiredData, setWeekTiredData] = useState(null);
  const [weekcheekyData, setWeekCheekyData] = useState(null);
  const [weekworriedData, setWeekWorriedData] = useState(null);
  const [weekangryData, setWeekAngryData] = useState(null);
  const [monthhappyData, setMonthHappyData] = useState(null);
  const [monthsadData, setMonthSadData] = useState(null);
  const [monthtiredData, setMonthTiredData] = useState(null);
  const [monthcheekyData, setMonthCheekyData] = useState(null);
  const [monthworriedData, setMonthWorriedData] = useState(null);
  const [monthangryData, setMonthAngryData] = useState(null);
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
        weekhappyData,
        setWeekHappyData,
        weeksadData,
        setWeekSadData,
        weektiredData,
        setWeekTiredData,
        weekcheekyData,
        setWeekCheekyData,
        weekworriedData,
        setWeekWorriedData,
        weekangryData,
        setWeekAngryData,
        monthhappyData,
        setMonthHappyData,
        monthsadData,
        setMonthSadData,
        monthtiredData,
        setMonthTiredData,
        monthcheekyData,
        setMonthCheekyData,
        monthworriedData,
        setMonthWorriedData,
        monthangryData,
        setMonthAngryData,
      }}
    >
      {children}
    </MoodDataContext.Provider>
  );
};