"use client"
import { createContext, useContext, useState } from "react"

export const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [uuid, setUuid] = useState(null);

  return (
    <UserIdContext.Provider value={{ setUuid, uuid }}>
      {children}
    </UserIdContext.Provider>
  );
};