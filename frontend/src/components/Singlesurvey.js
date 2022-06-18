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
                            return <div>
                                {
                                    Object.keys(survey.questionOption).map((item) => (
                                        <div className="radio-option"><input type="radio" value={survey.questionOption[item]} name="test"/> { survey.questionOption[item] }</div>
                                    ))
                                }
                            </div>
                        case 'select':
                            return <div>
                                <select>
                                {
                                    Object.keys(survey.questionOption).map((item) => (
                                        <option value={survey.questionOption[item]}>{survey.questionOption[item]}</option>
                                    ))
                                }
                                </select>
                            </div>
                        default:
                            return null
                    }
                })()}
            </div>
        </div>
    )
}

export default Singlesurvey;