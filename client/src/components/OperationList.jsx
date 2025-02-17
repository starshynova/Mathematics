import React from 'react';
import {useEffect, useState} from 'react';
import './component.css';
import {Link} from 'react-router-dom';
import Button from './Button.jsx';


const OperationList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:5000/api/math-operation");
            const data = await result.json();
            setData(data);
        };

        fetchData();
    }, []);

    return (
        <div className="operation-list">
            {data.map((question) => (
                <Link to={`/${question.operation}`}>
                <Button className="operation-button" title={question.operation.charAt(0).toUpperCase() + question.operation.slice(1)} />
                </Link>
            ))}
        </div>
    );
};

export default OperationList;