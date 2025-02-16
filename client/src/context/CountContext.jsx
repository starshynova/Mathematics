import React, { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
    const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <CountContext.Provider value={{ countCorrectAnswer, setCountCorrectAnswer, countIncorrectAnswer, setCountIncorrectAnswer, correctAnswer, setCorrectAnswer }}>
      {children}
    </CountContext.Provider>
  );
};
