import React, {useEffect, useState} from 'react';
import './Surveycard.css';

const Surveycard = () => {
    return (
        <div className="survey-grid">
            <div className="single-survey-card">
                <div className="survey-title">
                    <p>Survey 1</p>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="survey-btn">
                    <div>Fill Survey</div>
                </div>
                <div className="spacer"></div>
                <div className="survey-footer">
                    <div className="left">
                        <p className="title">Responses</p>
                        <p>2500 per question</p>
                    </div>
                    <div className="right">
                        <p className="title">Frequency</p>
                        <p>One-time</p>
                    </div>
                </div>
            </div>
            <div className="single-survey-card">
                <div className="survey-title">
                    <p>Survey 1</p>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="survey-btn">
                    <div>Fill Survey</div>
                </div>
                <div className="spacer"></div>
                <div className="survey-footer">
                    <div className="left">
                        <p className="title">Responses</p>
                        <p>2500 per question</p>
                    </div>
                    <div className="right">
                        <p className="title">Frequency</p>
                        <p>One-time</p>
                    </div>
                </div>
            </div>
            <div className="single-survey-card">
                <div className="survey-title">
                    <p>Survey 1</p>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className="survey-btn">
                    <div>Fill Survey</div>
                </div>
                <div className="spacer"></div>
                <div className="survey-footer">
                    <div className="left">
                        <p className="title">Responses</p>
                        <p>2500 per question</p>
                    </div>
                    <div className="right">
                        <p className="title">Frequency</p>
                        <p>One-time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surveycard;