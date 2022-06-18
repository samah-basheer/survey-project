import React, {useEffect} from 'react';
import './Singlesurvey.css';

const Singlesurvey = ({survey}) => {
    return (
        <div className="question-card">
            <div>
                {survey.questionText}
            </div>
            <div className="content">
                {(() => {
                    switch (survey.questionType) {
                        case 'text':
                            return <div className="input-text"><input type='text' placeholder="Write your answer here"/></div>
                        case 'radio':
                            return <div>radio</div>
                        case 'select':
                            return <div>select</div>
                        default:
                            return null
                    }
                })()}
            </div>
        </div>
    )
}

export default Singlesurvey;