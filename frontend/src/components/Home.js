import React, {useEffect} from 'react';
import './Home.css';
import Surveycard from "./Surveycard";
import Homeheader from "./Homeheader";

const Home = () => {
    return (
        <div>
            <Homeheader/>
            <div className="main-content">
                <div className="survey-cards">
                    <Surveycard/>
                </div>
            </div>
        </div>
    )
}

export default Home;