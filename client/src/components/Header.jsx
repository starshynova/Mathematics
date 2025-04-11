import React from "react";
import GoBackButton from "./GoBackButton.jsx";
import ShowResultButton from "./ShowResultButton.jsx";

const Header = () => {
  return (
    <div className="header">
      <GoBackButton />
      <ShowResultButton />
    </div>
  );
};

export default Header;
