import React, {useEffect} from 'react';
import './Singlesurvey.css';

const Singlesurvey = () => {
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
    ];
    return (
        <div className="main-content">
            <div className="question-card">
                <div>
                    What is the capital of Lebanon?
                </div>
                <div className="content">
                    test
                </div>
            </div>
        </div>
    )
}

export default Singlesurvey;