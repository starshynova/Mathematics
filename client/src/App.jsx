import React, {useState, useCallback} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import QuestionPage from './components/QuestionPage.jsx';
import { CountProvider } from './components/CountContext.jsx'
import ResultPage from './components/ResultPage.jsx'
import MainPage from './components/MainPage.jsx';



function App() {
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
  const [countIncorrectAnswer, setCountIncorrectAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");


  // const resetCounts = useCallback(() => {
  //   setCountCorrectAnswer(0);
  //   setCountIncorrectAnswer(0);
  // }, []);

  return (
    <CountProvider value={{ countCorrectAnswer, setCountCorrectAnswer, countIncorrectAnswer, setCountIncorrectAnswer, correctAnswer, setCorrectAnswer }}>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<MainPage />} />
          <Route path="/:operation" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </CountProvider>
  )
}

export default App;
