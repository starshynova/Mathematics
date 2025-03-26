import { useState, useEffect, useContext } from "react";
import { API_ROUTES } from "../config/apiRoutes";
import { CountContext } from "../context/CountContext.jsx";

const useGenerateExample = (operation) => {
  const [formula, setFormula] = useState("");
  const [example, setExample] = useState("");
  const { correctResult, setCorrectResult } = useContext(CountContext);

  const generateNewExample = async () => {
    try {
      const response = await fetch(API_ROUTES.GENERATE_EXAMPLE(operation));
      const data = await response.json();

      setExample(data.example);
      setCorrectResult(data.result);
      setFormula(data.formula);
    } catch (error) {
      console.error("Error fetching example:", error);
    }
  };

  useEffect(() => {
    generateNewExample();
  }, [operation]);

  return { example, formula, correctResult, generateNewExample };
};

export default useGenerateExample;
