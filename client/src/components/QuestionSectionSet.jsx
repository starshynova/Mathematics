import React from 'react';
import {useEffect, useState} from 'react';
import QuestionSection from './QuestionSection.jsx';
import {getData, getOperationName} from '../getData.js';
import './component.css';
import {Link} from 'react-router-dom';
import Button from './Button.jsx';


const QuestionSectionSet = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getOperationName();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className="question-section-set">
            {data.map((question) => (
                <Link to={`/${question.operation}`}>
                <Button className="operation-button" title={question.operation.charAt(0).toUpperCase() + question.operation.slice(1)} />
                </Link>
            ))}
        </div>
    );
};

export default QuestionSectionSet;