import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [rol, setRol] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        rol,
        setRol,
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
