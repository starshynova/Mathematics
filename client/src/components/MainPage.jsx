import React from 'react';
import QuestionSectionSet from './QuestionSectionSet.jsx';
import image from '../assets/main.png';

const MainPage = () => {

    return (
        <div className="main-page">
                <div className="main-img">
                    <img src={image} className="img-size"/>
                </div>
                <div className="main-content">
                    <div className="main-title">
                        <h1>Mathematics</h1>
                        <h2>Are you ready?</h2>
                    </div>
                    <QuestionSectionSet />
                </div>
            </div>
    )
}

export default MainPage;