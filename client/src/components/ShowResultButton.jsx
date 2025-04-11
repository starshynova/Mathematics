import { Link } from "react-router-dom";

const ShowResultButton = () => {
  return (
    <Link to={"/result"}>
      <button className="show-result-button">Show result</button>
    </Link>
  );
};

export default ShowResultButton;
