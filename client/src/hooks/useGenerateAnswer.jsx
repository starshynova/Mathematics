// import { useState, useEffect, useRef, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { randomNumber } from "./useRandomNumber.jsx";
// import useGenerateExample from "./useGenerateExample.jsx";
// import { CountContext } from '../context/CountContext.jsx';

// const useGenerateAnswer = () => {
//     const { operation } = useParams();
//     const { correctResult, example, formula } = useGenerateExample(operation);
//     const [answers, setAnswers] = useState([]);
//     const isGenerated = useRef(false);  // Флаг, предотвращающий повторную генерацию

//       useEffect(() => {
//         console.log("useEffect triggered. correctResult:", correctResult);
//         if (correctResult === null || correctResult === undefined || isGenerated.current) return;

//         console.log("useGenerateAnswer called. correctResult:", correctResult);
//         const generateAnswers = () => {
//             const min = correctResult - 20;
//             const max = correctResult + 20;

//             const generatedAnswers = [];
//             while (generatedAnswers.length < 3) {
//                 const randomAnswer = randomNumber(min, max);
//                 console.log(`Generated randomAnswer: ${randomAnswer}, correctResult: ${correctResult}`);
//                 if (!generatedAnswers.some(a => a.value === randomAnswer) && randomAnswer !== correctResult && randomAnswer > 0) {
//                     generatedAnswers.push({ value: randomAnswer, isCorrect: false });
//                 }
//             }

//             console.log("Final generated answers before shuffle:", generatedAnswers);
//             console.log("Generated wrong answers:", [...generatedAnswers]);
//             generatedAnswers.push({ value: correctResult, isCorrect: true });
//             setAnswers(shuffleArray(generatedAnswers));

//             isGenerated.current = true;
//         };

//         generateAnswers();
//     }, [correctResult]); // Следим за изменением correctResult

//     const shuffleArray = (array) => {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     };

//     console.log(answers); // Теперь `answers` корректен с первого рендера
//     return { answers, example, formula };
// };

// export default useGenerateAnswer;

import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { randomNumber } from "./useRandomNumber.jsx";
import useGenerateExample from "./useGenerateExample.jsx";
import { CountContext } from "../context/CountContext.jsx";

const useGenerateAnswer = () => {
  const { operation } = useParams();
  const { correctResult, example, formula } = useGenerateExample(operation);
  const [answers, setAnswers] = useState([]);
  const isGenerated = useRef(false);

  useEffect(() => {
    console.log("useEffect triggered. correctResult:", correctResult);

    if (correctResult === null || correctResult === undefined) return;

    // Сбрасываем isGenerated при новом значении correctResult
    isGenerated.current = false;

    if (isGenerated.current) return;

    console.log("useGenerateAnswer called. correctResult:", correctResult);

    const generateAnswers = () => {
      const min = correctResult - 20;
      const max = correctResult + 20;

      const generatedAnswers = [];
      while (generatedAnswers.length < 3) {
        const randomAnswer = randomNumber(min, max);
        console.log(
          `Generated randomAnswer: ${randomAnswer}, correctResult: ${correctResult}`
        );

        if (
          !generatedAnswers.some((a) => a.value === randomAnswer) &&
          randomAnswer !== correctResult &&
          randomAnswer > 0
        ) {
          generatedAnswers.push({ value: randomAnswer, isCorrect: false });
        }
      }

      console.log("Final generated answers before shuffle:", generatedAnswers);

      generatedAnswers.push({ value: correctResult, isCorrect: true });

      // Клонируем массив перед перемешиванием
      const shuffledAnswers = [...generatedAnswers];
      shuffleArray(shuffledAnswers);

      setAnswers(shuffledAnswers);
      isGenerated.current = true;
    };

    generateAnswers();
  }, [correctResult]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    console.log("Updated answers:", answers);
  }, [answers]); // Логируем `answers` после обновления

  return { answers, example, formula };
};

export default useGenerateAnswer;
