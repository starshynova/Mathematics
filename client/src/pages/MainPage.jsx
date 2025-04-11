import React, { useContext } from "react";
import OperationList from "../components/OperationList.jsx";
import image from "../assets/default.png";
import Button from "../components/Button.jsx";
import { MethodContext } from "../context/MethodContext.jsx";

const MainPage = () => {
  const context = useContext(MethodContext);

  if (!context) {
    return <div>Error: Method context not available</div>;
  }

  const { method, setMethod } = context;

  const handleQuiz = () => {
    setMethod("quiz");
  };

  const handleAnswer = () => {
    setMethod("answer");
  };

  return (
    <>
      <h1>Mathematics</h1>
      <div className="main-page">
        <div className="main-img">
          <img src={image} className="img-size" alt="Math" />
        </div>
        <div className="main-content">
          {!method ? (
            <div
              style={{ width: "80%", display: "flex", flexDirection: "column" }}
            >
              <h2>Are you ready?</h2>
              <h2>If yes, just choose the method</h2>
              <div className="method-list">
                <Button
                  title="Quiz"
                  className="method-button"
                  onClick={handleQuiz}
                />
                <h3>Choose 1 of 4 answers</h3>
              </div>
              <div className="method-list">
                <Button
                  title="Your answer"
                  className="method-button"
                  onClick={handleAnswer}
                />
                <h3>Write the correct answer yourself</h3>
              </div>
            </div>
          ) : (
            <OperationList key={method} />
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
