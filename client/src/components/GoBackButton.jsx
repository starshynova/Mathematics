import { useNavigate } from "react-router-dom";
import { useCount } from "../hooks/useCount";

function GoBackButton() {
  const navigate = useNavigate();
  const { setCorrectAnswer } = useCount();

  return (
    <button className="go-back-button" onClick={() => {
      navigate(-1);
      setCorrectAnswer("Give an answer");
      }}>
      Back
    </button>
  );
}

export default GoBackButton;
