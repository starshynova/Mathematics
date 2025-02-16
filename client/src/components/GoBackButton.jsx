import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate();

  return <button className="go-back-button" onClick={() => navigate(-1)}>Back</button>;
}

export default GoBackButton;
