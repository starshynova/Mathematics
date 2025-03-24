import React, { useContext, useEffect } from 'react';
import OperationList from '../components/OperationList.jsx';
import image from '../assets/default.png';
import Button from '../components/Button.jsx';
import { MethodContext } from '../context/MethodContext.jsx';

const MainPage = () => {
  const context = useContext(MethodContext);
  
  if (!context) {
    return <div>Error: Method context not available</div>;
  }

  const { method, setMethod } = context;

  useEffect(() => {
    console.log("Current method:", method);
  }, [method]);

  const handleQuiz = () => {
    setMethod("quiz");
    console.log("Setting method to quiz");
  };

  const handleAnswer = () => {
    setMethod("answer");
    console.log("Setting method to answer");
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
        <div>
            {!method ? 
          (<h3>Choose the method</h3>) : (<h3>You selected {method}</h3>)}
          <Button 
            title="Quiz" 
            className="operation-button" 
            onClick={handleQuiz} 
          />
          <Button 
            title="Your answer" 
            className="operation-button" 
            onClick={handleAnswer} 
          />
        </div>
        <OperationList key={method}/>
      </div>
    </div>
  );
};

export default MainPage;