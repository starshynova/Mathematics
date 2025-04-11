import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCount } from "../hooks/useCount";
import { MethodContext } from "../context/MethodContext";

function GoBackButton() {
  const navigate = useNavigate();
  const { setCorrectAnswer } = useCount();
  const { setMethod } = useContext(MethodContext);

  return (
    <button
      className="go-back-button"
      onClick={() => {
        navigate(-1);
        setCorrectAnswer("Give an answer");
        setMethod("");
      }}
    >
      Back
    </button>
  );
}

export default GoBackButton;
