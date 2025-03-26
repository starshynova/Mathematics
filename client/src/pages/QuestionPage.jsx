import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import useGenerateExample from "../hooks/useGenerateExample.jsx";
import { useCount } from "../hooks/useCount.jsx";
import "../components/component.css";
import defaultImage from "../assets/default.png";
import correctImage from "../assets/happy.png";
import incorrectImage from "../assets/sad.png";
import Header from "../components/Header.jsx";

const QuestionPage = () => {
  const { operation } = useParams();
  const { example, correctResult, formula, generateNewExample } =
    useGenerateExample(operation);
  const [userAnswer, setUserAnswer] = useState("");
  const { correctAnswer, setCorrectAnswer, answerCalculation } = useCount();
  const [imageSrc, setImageSrc] = useState(defaultImage);

  const handleInputChange = (value) => {
    setUserAnswer(value);
  };

  const checkAnswer = () => {
    answerCalculation(userAnswer, correctResult);
    if (Number(userAnswer) === correctResult) {
      setImageSrc(correctImage);
    } else {
      setImageSrc(incorrectImage);
    }
  };

  const nextExample = () => {
    generateNewExample();
    setUserAnswer("");
    setCorrectAnswer("");
    setImageSrc(defaultImage);
  };

  return (
    <>
      <Header />
      <div className="example-page">
        <div className="image-block">
          <img src={imageSrc} className="img-example-page" />
          <p className="correct-incorrect-answer">{correctAnswer}</p>
        </div>
        <div className="example-block">
          <h2>{operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
          <p className="formula">{formula}</p>
          <div className="example-box">
            <p className="example-text">{example}</p>
          </div>
          <InputField
            onInputChange={handleInputChange}
            userAnswer={userAnswer}
          />
          <div className="answer-block">
            <Button
              className="answer-button"
              onClick={checkAnswer}
              title="Check answer"
            />
            <Button
              className="answer-button"
              onClick={nextExample}
              title="Next example"
            />
            <Link to={"/result"}>
              <Button className="answer-button" title="Show result" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
