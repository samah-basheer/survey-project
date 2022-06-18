import React, {useEffect, useState} from 'react';
import './Surveycard.css';

const Surveycard = ({ title, description, onFill, responses, frequency }) => {
    return (
        <div className="single-survey-card">
                <div className="survey-title">
                    <p>{title}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="survey-btn">
                    <div onClick={onFill}>Fill Survey</div>
                </div>
                <div className="spacer"></div>
                <div className="survey-footer">
                    <div className="left">
                        <p className="title">Responses</p>
                        <p>{responses}</p>
                    </div>
                    <div className="right">
                        <p className="title">Frequency</p>
                        <p>{frequency}</p>
                    </div>
                </div>
            </div>
    )
}

export default Surveycard;