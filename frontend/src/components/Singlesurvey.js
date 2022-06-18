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
                            const arr = survey.questionOption;
                            return <div>
                                {
                                    Object.keys(arr).map((item) => (
                                        <div className="radio-option"><input type="radio" value={arr[item]} name="test"/> { arr[item] }</div>
                                    ))
                                }
                            </div>
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