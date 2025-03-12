import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { randomNumber } from "./useRandomNumber.jsx";  
import useGenerateExample from "./useGenerateExample.jsx";
import { CountContext } from '../context/CountContext.jsx';

const useGenerateAnswer = () => {
    const { operation } = useParams();
    const { result, example, formula } = useGenerateExample(operation);
    const { correctResult, setCorrectResult } = useContext(CountContext);
    const [answers, setAnswers] = useState([]);
    const isGenerated = useRef(false);  // Флаг, предотвращающий повторную генерацию


    useEffect(() => {
        if (result !== undefined && result !== null && !isGenerated.current) {
            setCorrectResult(result); // Устанавливаем правильный результат в контекст
            isGenerated.current = true;
        }
    }, [result, setCorrectResult]);

      useEffect(() => {
        if (correctResult === null || correctResult === undefined || isGenerated.current) return;

        const generateAnswers = () => {
            const min = correctResult - 20;
            const max = correctResult + 20;

            const generatedAnswers = [];
            while (generatedAnswers.length < 3) {
                const randomAnswer = randomNumber(min, max);
                if (!generatedAnswers.some(a => a.value === randomAnswer) && randomAnswer !== correctResult && randomAnswer > 0) {
                    generatedAnswers.push({ value: randomAnswer, isCorrect: false });
                }
            }

            generatedAnswers.push({ value: correctResult, isCorrect: true });
            setAnswers(shuffleArray(generatedAnswers));
        };

        generateAnswers();
    }, [correctResult]); // Следим за изменением correctResult

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    console.log(answers); // Теперь `answers` корректен с первого рендера
    return { answers, example, formula };
};

export default useGenerateAnswer;

    

