import React from 'react';
import {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import InputField from './InputField.jsx';
import Button from './Button.jsx';
import useGenerateExample from './useGenerateExample.jsx';
import {useCount} from './useCount.jsx';


const QuestionPage = () => {
  
  const { operation } = useParams();
  const { example, result, formula, generateNewExample } = useGenerateExample(operation);
  const [userAnswer, setUserAnswer] = useState("");
  const { countCorrectAnswer, countIncorrectAnswer, correctAnswer, answerCalculation } = useCount();

  const handleInputChange = (value) => {
      setUserAnswer(value);
  };

  const checkAnswer = () => {
    answerCalculation(userAnswer, result);
    setUserAnswer('');
  };

  const nextExample = () => {
    generateNewExample();
    setUserAnswer('');
  }


  return (
    <div>
      <h1>{operation}</h1>
      <p>{formula}</p>
      <p>{example}</p>
      <div className="answer-block">
        <InputField onInputChange={handleInputChange} userAnswer={userAnswer} />
        <Button onButtonClick={checkAnswer} title="Check answer"/>
        <Button onButtonClick={nextExample} title="Next example"/>
        <Link to={'/result'}>
          <Button title="Show result" />
        </Link>
      </div>
      <p>{correctAnswer}</p>
      <p>Right answer is {result}</p>
      <p>Count of the correct answers: {countCorrectAnswer}</p>
      <p>Count of the incorrect answers: {countIncorrectAnswer}</p>
    </div>
  );
};

export default QuestionPage;