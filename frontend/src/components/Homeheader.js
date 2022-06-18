import React, {useEffect, useState} from 'react';
import './Homeheader.css';
import survey from './images/survey.png';

const Homeheader = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <img src={survey}/>
                <span>Survey</span>
            </div>
        </div>
    )
}

export default Homeheader;