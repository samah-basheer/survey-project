import React, {useEffect} from 'react';
import './Home.css';
import Homeheader from "./Homeheader";
import Surveyloop from "./Surveyloop";

const Home = () => {
    return (
        <div>
            <Homeheader/>
            <div className="main-content">
                <div className="survey-cards">
                    <Surveyloop/>
                </div>
            </div>
        </div>
    )
}

export default Home;