import React, { useState, useEffect, useContext } from "react";
import { useCount } from "../hooks/useCount.jsx";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { MethodContext } from "../context/MethodContext.jsx";

const ResultPage = () => {
  const [advice, setAdvice] = useState("");
  const {
    countCorrectAnswer,
    countIncorrectAnswer,
    setCountCorrectAnswer,
    setCountIncorrectAnswer,
    setCorrectAnswer,
  } = useCount();
  const {setMethod} = useContext(MethodContext);

  useEffect(() => {
    function adviceForUser() {
      let totalAnswers = countCorrectAnswer + countIncorrectAnswer;
      if (totalAnswers === 0) return;
      let generalResult = (countCorrectAnswer / totalAnswers) * 100;

      if (generalResult >= 80) {
        setAdvice("Congratulations! You are very good at math!");
      } else if (generalResult > 50 && generalResult < 80) {
        setAdvice("You are on the right way! Just continue practicing!");
      } else {
        setAdvice("Your result is not so good... You need more practice!");
      }
    }

    adviceForUser();
  }, [countCorrectAnswer, countIncorrectAnswer]);

  const goToMainPage = () => {
    setCountCorrectAnswer(0);
    setCountIncorrectAnswer(0);
    setMethod("");
    setCorrectAnswer("Give an answer");
  };

  return (
    <div className="result-block">
      <h1>Your score</h1>
      <p className="result">Correct answers: {countCorrectAnswer}</p>
      <p className="result">Incorrect answers: {countIncorrectAnswer}</p>
      <h2>{advice}</h2>
      <Link to={"/"}>
        <Button
          className="go-to-main-page-button"
          title="Go to the Main Page"
          onClick={goToMainPage}
        />
      </Link>
    </div>
  );
};

export default ResultPage;
