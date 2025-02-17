import React from 'react';
import OperationList from '../components/OperationList.jsx';
import image from '../assets/default.png';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

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
                <Link to={'/quiz'}>
                    <Button title="Go to quiz" className="operation-button" />
                </Link>
            </div>
    )
}

export default MainPage;