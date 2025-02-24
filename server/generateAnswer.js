import { parse } from "mathjs";
import { randomNumber } from "./randomNumbers.js";
import { getData } from "./getData.js";
import {result} from './generateExample.js'

export const generateAnswer = async () => {
    // const data = await getData();
    // const question = data.find((q) => q.operation === operation);
    // if (!question) {
    //     throw new Error ("Operation not found")
    // }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
        }
    };
    
    const generateUniqueNumbers = (min, max, count) => {
        const numbers = [];
        while (numbers.length < count) {
            const num = Math.floor(Math.random() * (max - min + 1) + min);
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers.map(num => ({ value: num, isCorrect: false }));
    };
    
    
    const randomObjects = generateUniqueNumbers(10, 50, 3);
    
    randomObjects.push({ value: result, isCorrect: true });
    
    shuffleArray(randomObjects);
    
    console.log(randomObjects);
    


    // let a, b;
    
    // a = randomNumber(question.values.a.min, question.values.a.max);
    // b = randomNumber(question.values.b.min, question.values.b.max);
    
    // if (question.checkFunction) {
    //     try {
    //         // Convert the string into a function
    //         const checkFunc = eval(question.checkFunction);
    //         if (typeof checkFunc === "function") {
    //             ({ a, b } = checkFunc(a, b, randomNumber));
    //         }
    //     } catch (error) {
    //         console.error("Error in checkFunction:", error);
    //     }
    // }


    // // Form an expression
    // const example = question.formula.replace(/a/g, a).replace(/b/g, b);
    
    // // Calculate result
    // const f = parse(question.formula);
    // const result = f.evaluate({ a, b });

    // return { example, result, formula: question.formula };
};