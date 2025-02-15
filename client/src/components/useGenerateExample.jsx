import React from 'react';
import { useState, useEffect } from "react";
import { parse } from "mathjs";
import { randomNumber } from "../randomNumbers.js";
import { getData } from "../getData.js";

const useGenerateExample = (operation) => {
    const [dataOperation, setDataOperation] = useState("");
    const [formula, setFormula] = useState("");
    const [example, setExample] = useState("");
    const [result, setResult] = useState("");
    const [values, setValues] = useState({ a: 0, b: 0 });

    useEffect(() => {
        const fetchFormula = async () => {
            const data = await getData();
            const question = data.find((q) => q.operation === operation);
            if (question) {
                setFormula(question.formula);
                setDataOperation(question);
            } else {
                setFormula("Data not found");
            }
        };
        fetchFormula();
    }, [operation]);

    const generateNewExample = () => {
        const processValues = ({ values, checkFunction }) => {
            let a, b;
    
            a = randomNumber(values.a.min, values.a.max);
            b = randomNumber(values.b.min, values.b.max);
    
            if (checkFunction) {
                try {
                    // Convert the string into a function
                    const checkFunc = eval(checkFunction);
                    if (typeof checkFunc === "function") {
                        ({ a, b } = checkFunc(a, b, randomNumber));
                    }
                } catch (error) {
                    console.error("Error in checkFunction:", error);
                }
            }
    
            return { a, b };
        };
    
        // Generation of new values
        const newValues = processValues(dataOperation);
        setValues(newValues);
    
        // Generating an example
        const formulaNumbers = dataOperation.formula.replace(/a/g, newValues.a).replace(/b/g, newValues.b);
        setExample(formulaNumbers);
    
        // Calculate the result
        const f = parse(dataOperation.formula);
        const evaluatedResult = f.evaluate(newValues);
        setResult(evaluatedResult);
    };
    
    

    useEffect(() => {
        if (dataOperation) {
            generateNewExample();
        }
    }, [dataOperation]);

    return { example, result, generateNewExample }
}

export default useGenerateExample;
