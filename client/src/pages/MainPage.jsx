import React, { useContext, useEffect } from "react";
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
    <div className="main-page">
      <div className="main-img">
        <img src={image} className="img-size" alt="Math" />
      </div>
      <div className="main-content">
        <div className="main-title">
          <h1>Mathematics</h1>
          <h2>Are you ready?</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!method ? <h3>Choose the method</h3> : <h3> </h3>}
          <div className="method-list">
            <Button
              title="Quiz"
              className={
                method === "quiz" ? "method-selected-button" : "method-button"
              }
              onClick={handleQuiz}
            />
            <Button
              title="Your answer"
              className={
                method === "answer" ? "method-selected-button" : "method-button"
              }
              onClick={handleAnswer}
            />
          </div>
        </div>
        <OperationList key={method} />
      </div>
    </div>
  );
};

export default MainPage;
