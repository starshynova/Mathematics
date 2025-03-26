import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { randomNumber } from "./useRandomNumber.jsx";
import useGenerateExample from "./useGenerateExample.jsx";

const useGenerateAnswer = () => {
  const { operation } = useParams();
  const { correctResult, example, formula, generateNewExample } =
    useGenerateExample(operation);
  const [answers, setAnswers] = useState([]);
  const isGenerated = useRef(false);

  useEffect(() => {
    if (correctResult === null || correctResult === undefined) return;

    isGenerated.current = false;

    if (isGenerated.current) return;

    const generateAnswers = () => {
      const min = correctResult - 20;
      const max = correctResult + 20;

      const generatedAnswers = [];
      while (generatedAnswers.length < 3) {
        const randomAnswer = randomNumber(min, max);

        if (
          !generatedAnswers.some((a) => a.value === randomAnswer) &&
          randomAnswer !== correctResult &&
          randomAnswer > 0
        ) {
          generatedAnswers.push({ value: randomAnswer, isCorrect: false });
        }
      }

      generatedAnswers.push({ value: correctResult, isCorrect: true });

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

  return { answers, example, formula, generateNewExample };
};

export default useGenerateAnswer;
