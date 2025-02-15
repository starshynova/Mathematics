
import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import './component.css';


const QuestionSection = ({ operation }) => {
    // const { operation } = useParams();
    return (
        
        <Link to={`/${operation}`}>
        <button className="question-section">
            {operation}
        </button>
        </Link>
       
    )
};

export default QuestionSection;
