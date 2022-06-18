import React, {useEffect} from 'react';
import './Singlesurvey.css';

const Singlesurvey = ({survey}) => {
    return (
        <div className="question-card">
            <div>
                {survey.questionText}
            </div>
            <div className="content">
                <input type={survey.questionType}/>
            </div>
        </div>
    )
}

export default Singlesurvey;