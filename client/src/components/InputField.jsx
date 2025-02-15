import React from 'react';
import {useState} from 'react';
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




// const InputField = () => {
//     const [userAnswer, setUserAnswer] = useState("");
    
//     const handleInputChange = (event) => {
//         setUserAnswer(event.target.value);
//     };
    
//     const checkAnswer = () => {
//         if (Number(userAnswer) === result) {
//             alert("Your answer is correct!");
//         } else {
//             alert("Try again!");
//         }
//     };

//     return (
//         <input className="input-field"
//             type="text"
//             onChange={(e) => onInputChange(e.target.value)}
//         />
//     );
   
// }
