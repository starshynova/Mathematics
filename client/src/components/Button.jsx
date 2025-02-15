import React from "react";

const Button = ({ onButtonClick, title }) => {
    return (
        <button className="answer-button" onClick={onButtonClick}>
            {title}
        </button>
    );
};
export default Button;