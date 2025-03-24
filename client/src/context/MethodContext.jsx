import React, { createContext, useState } from "react";

export const MethodContext = createContext();

export const MethodProvider = ({ children }) => {
  const [method, setMethod] = useState("");

  return (
    <MethodContext.Provider value={{ method, setMethod }}>
      {children}
    </MethodContext.Provider>
  );
};
