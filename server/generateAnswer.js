import { parse } from "mathjs";
import { randomNumber } from "./randomNumbers.js";
import { getData } from "./getData.js";
import {result} from './generateExample.js'

export const generateAnswer = async (operation) => {
    const data = await getData();
    const question = data.find((q) => q.operation === operation);
    if (!question) {
        throw new Error ("Operation not found")
    };

    const min = parse(question.answerRange.min).evaluate({ result });
    const max = parse(question.answerRange.max).evaluate({ result });

    const answers = [];
    while (answers.length < 3) {
        const randomAnswer = randomNumber(min, max);
        if (!answers.includes(randomAnswer) && randomAnswer !== result) {
            answers.push({ value: randomAnswer, isCorrect: false });
        }
    }

    answers.push({ value: result, isCorrect: true });

    return answers;
}; 

    // let a, b;
    
    // a = question.answerRange.min;
    // b = question.answerRange.max;
    
    // if (question.answerRange) {
    //     try {
    //         // Convert the string into a function
    //         const answerRange = eval(question.answerRange);
    //         if (typeof answerRange === "function") {
    //             ({ a, b } = answerRange(a, b));
    //         }
    //     } catch (error) {
    //         console.error("Error in answerRange:", error);
    //     }
    // }


    // // Form an expression
    // const example = question.formula.replace(/a/g, a).replace(/b/g, b);
    
    // // Calculate result
    // const f = parse(question.formula);
    // const result = f.evaluate({ a, b });

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
        }
    };
    
    // const generateUniqueNumbers = (min, max, count) => {
    //     const numbers = [];
    //     while (numbers.length < count) {
    //         const num = Math.floor(Math.random() * (max - min + 1) + min);
    //         if (!numbers.includes(num)) {
    //             numbers.push(num);
    //         }
    //     }
    //     return numbers.map(num => ({ value: num, isCorrect: false }));
    // };
    
    
    // const randomObjects = generateUniqueNumbers(minAnswer, maxAnswer, 3);
    
    // randomObjects.push({ value: result, isCorrect: true });

    const answersArray = generateAnswer(operation);
    
    export const randomAnswers = shuffleArray(answersArray);
    
    console.log(randomAnswers);
    

