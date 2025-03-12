import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../components/component.css';
import Header from '../components/Header.jsx';
import useGenerateAnswer from '../hooks/useGenerateAnswer.jsx';


import Dnd from '../components/Dnd.jsx';

const QuestionPageQuiz = () => {
  const { operation } = useParams();
  const { example, formula } = useGenerateAnswer(operation);
    return (
        <>
            <Header />
            <div className="example-page">
                <div className="example-block">
                    <h2>{operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
                    <p className="formula">{formula}</p>
                    <div className="example-answer">
                        <div className="example-box">
                            <p className="example-text">{example}</p>
                        </div> 
                    </div>
                    <Dnd />
                </div>
            </div>
        </>
    );
};

export default QuestionPageQuiz;
