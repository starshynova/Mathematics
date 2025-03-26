import React from "react";

const Button = ({ onClick, title, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
