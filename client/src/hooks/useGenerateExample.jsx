import React from 'react';
import { useState, useEffect } from "react";

const useGenerateExample = (operation) => {
    const [formula, setFormula] = useState("");
    const [example, setExample] = useState("");
    const [result, setResult] = useState("");

    const generateNewExample = async () => {
        try {
            const response = await fetch(`https://localhost:5000/generate/${operation}`);
            // const response = await fetch(`https://react-project-t4ti.onrender.com/generate/${operation}`);
            const data = await response.json();

            setExample(data.example);
            setResult(data.result);
            setFormula(data.formula);
        } catch (error) {
            console.error("Error fetching example:", error);
        }
    };

    useEffect(() => {
        generateNewExample();
    }, [operation]);

    return { example, result, formula, generateNewExample };
};

export default useGenerateExample;
