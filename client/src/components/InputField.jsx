import React from 'react';
import './component.css';


const InputField = ({ onInputChange, userAnswer }) => {
    return (
        <input
            className="input-field"
            type="text"
            value={userAnswer}
            onChange={(e) => onInputChange(e.target.value)}
        />
    );
};


export default InputField;

