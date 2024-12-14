import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [id, setId] = useState(localStorage.getItem("id") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
  }, [token, id]);

  return (
    <GlobalStateContext.Provider value={{ token, setToken, id, setId }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
