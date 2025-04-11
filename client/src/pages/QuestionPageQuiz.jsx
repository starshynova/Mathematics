import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/component.css";
import Header from "../components/Header.jsx";
import useGenerateAnswer from "../hooks/useGenerateAnswer.jsx";
import defaultImage from "../assets/default.png";
import correctImage from "../assets/happy.png";
import incorrectImage from "../assets/sad.png";
import Button from "../components/Button.jsx";
import { useCount } from "../hooks/useCount.jsx";
import Dnd from "../components/Dnd.jsx";

const QuestionPageQuiz = () => {
  const { operation } = useParams();
  const { example, formula, generateNewExample } = useGenerateAnswer(operation);
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [resetDropZone, setResetDropZone] = useState(0);
  const { correctAnswer, setCorrectAnswer } = useCount();
  const [disableNextExample, setDisableNextExample] = useState(true);

  const nextExample = () => {
    generateNewExample();
    setImageSrc(defaultImage);
    setCorrectAnswer("Give an answer");
    setResetDropZone((prev) => prev + 1);
    setDisableNextExample(true);
  };

  useEffect(() => {
    if (correctAnswer === "Correct!") {
      setImageSrc(correctImage);
      setDisableNextExample(false);
    } else if (correctAnswer === "Try again!") {
      setImageSrc(incorrectImage);
      setDisableNextExample(false);
    }
  }, [correctAnswer]);

  return (
    <>
      <Header />
      <div className="example-page">
        <div className="image-block">
          <img src={imageSrc} className="img-example-page" />
          <p className="correct-incorrect-answer">{correctAnswer}</p>
          <Button
            disabled={disableNextExample}
            className="answer-button"
            onClick={nextExample}
            title="Next example"
          />
        </div>
        <div className="example-block">
          <h2>{operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
          <p className="formula">{formula}</p>
          <div className="example-answer">
            <div className="example-box">
              <p className="example-text">{example}</p>
            </div>
          </div>
          <Dnd resetDropZone={resetDropZone} />
        </div>
      </div>
    </>
  );
};

export default QuestionPageQuiz;
