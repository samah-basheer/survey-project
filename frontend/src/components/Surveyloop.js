import React, {useEffect, useState} from 'react';
import './Surveyloop.css';
import Surveycard from "./Surveycard";

const Surveyloop = () => {
    const arr = [
        {
            title: "Survey 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            responses: "2500 per question",
            frequency: "One-time"
        },
        {
            title: "Survey 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            responses: "2500 per question",
            frequency: "One-time"
        },
        {
            title: "Survey 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            responses: "2500 per question",
            frequency: "One-time"
        },
    ];

    return (
        <div className="survey-grid">
            {arr.map((survey) => (
                <Surveycard title={survey.title} description={survey.description} frequency={survey.frequency} responses={survey.responses}/>
            ))}
        </div>
    )
}

export default Surveyloop;