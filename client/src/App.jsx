import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionPage from './pages/QuestionPage.jsx';
import { CountProvider } from './context/CountContext.jsx';
import ResultPage from './pages/ResultPage.jsx';
import MainPage from './pages/MainPage.jsx';
import QuestionPageQuiz from './pages/QuestionPageQuiz.jsx';
import { MethodProvider } from './context/MethodContext.jsx';

function App() {
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");

  return (
    <MethodProvider>
      <CountProvider value={{ 
        countCorrectAnswer, 
        setCountCorrectAnswer, 
        countIncorrectAnswer, 
        setCountIncorrectAnswer, 
        correctAnswer, 
        setCorrectAnswer 
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:operation" element={<QuestionPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/quiz/:operation" element={<QuestionPageQuiz />} />
          </Routes>
        </BrowserRouter>
      </CountProvider>
    </MethodProvider>
  )
}

export default App;