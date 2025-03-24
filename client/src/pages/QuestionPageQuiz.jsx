import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  const { example, formula } = useGenerateAnswer(operation);
  const [imageSrc, setImageSrc] = useState(defaultImage);

  const nextExample = () => {
    generateNewExample();
    setUserAnswer("");
    setCorrectAnswer("");
    setImageSrc(defaultImage);
    console.log("some text");
  };

  return (
    <>
      <Header />
      <div className="example-page">
        <div className="image-block">
          <img src={imageSrc} className="img-example-page" />
        </div>
        <div className="example-block">
          <h2>{operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
          <p className="formula">{formula}</p>
          <div className="example-answer">
            <div className="example-box">
              <p className="example-text">{example}</p>
            </div>
          </div>
          <Dnd />
          <div className="answer-block">
          <Button className="answer-button" onClick={nextExample} title="Next example"/>
          <Link to={'/result'}>
            <Button className="answer-button" title="Show result" />
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPageQuiz;
