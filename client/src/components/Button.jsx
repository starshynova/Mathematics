import React from "react";

const Button = ({ onButtonClick, title, className }) => {
    return (
        <button className={className} onClick={onButtonClick}>
            {title}
        </button>
    );
};
export default Button;