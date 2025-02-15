
import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import './component.css';
import Button from './Button.jsx';


const QuestionSection = ({ operation }) => {
    // const { operation } = useParams();
    return (
        
        <Link to={`/${operation}`}>
            <Button className="question-section" title={operation} />
        {/* <button className="question-section">
            {operation}
        </button> */}
        </Link>
       
    )
};

export default QuestionSection;
