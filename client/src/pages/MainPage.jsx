import React from 'react';
import OperationList from '../components/OperationList.jsx';
import image from '../assets/default.png';

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
                    <OperationList />
                </div>
            </div>
    )
}

export default MainPage;