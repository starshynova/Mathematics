import React from "react";

const Button = ({ onClick, title, className, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
export default Button;
