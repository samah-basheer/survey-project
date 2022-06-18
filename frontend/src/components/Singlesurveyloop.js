import React, {useEffect, useState} from 'react';
import './Singlesurveyloop.css';
import Singlesurvey from "./Singlesurvey";

const Surveyloop = () => {
    const arr = [
        {
            questionText: "What is the capital of Lebanon?",
            questionType: "radio",
            questionOption: {
                option1: "Saida",
                option2: "Beirut",
                option3: "Tripoli",
            }
        },
        {
            questionText: "Write one word that best describes you",
            questionType: "text",
        },
        {
            questionText: "Write one word that best describes you",
            questionType: "text",
        },
        {
            questionText: "Write one word that best describes you",
            questionType: "text",
        },
    ];

    return (
        <div className="main-content">
            {arr.map((survey) => (
                <Singlesurvey survey={survey}/>
            ))}
            <div className="submit-survey">
                <div>Submit Survey</div>
            </div>
        </div>
    )
}

export default Surveyloop;