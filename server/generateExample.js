import { parse } from "mathjs";
import { randomNumber } from "./randomNumbers.js";
import { getData } from "./getData.js";

export const generateExample = async (operation) => {
    const data = await getData();
    const question = data.find((q) => q.operation === operation);
    if (!question) {
        throw new Error ("Operation not found")
    }

    let a, b;
    
    a = randomNumber(question.values.a.min, question.values.a.max);
    b = randomNumber(question.values.b.min, question.values.b.max);
    
    if (question.checkFunction) {
        try {
            // Convert the string into a function
            const checkFunc = eval(question.checkFunction);
            if (typeof checkFunc === "function") {
                ({ a, b } = checkFunc(a, b, randomNumber));
            }
        } catch (error) {
            console.error("Error in checkFunction:", error);
        }
    }


    // Form an expression
    const example = question.formula.replace(/a/g, a).replace(/b/g, b);
    
    // Calculate result
    const f = parse(question.formula);
    const result = f.evaluate({ a, b });

    return { example, result, formula: question.formula };
};