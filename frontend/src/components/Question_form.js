import React, { useState, useEffect } from "react";
import "./Question_form.css";

function Question_form() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        var newQuestion = {
            questionText: "Question",
            answer: false,
            answerKey: "",
            questionType: "radio",
            options: [
                { optionText: "Option 1" },
                { optionText: "Option 2" },
                { optionText: "Option 3" }
            ],
            open: true,
            required: false,
        };
        var newQuestion = {
            questionText: "Question",
            answer: false,
            answerKey: "",
            questionType: "radio",
            options: [
                { optionText: "Option 1" },
                { optionText: "Option 2" },
                { optionText: "Option 3" }
            ],
            open: true,
            required: false,
        };

        setQuestions([...questions, newQuestion]);
    }, []);

    function questionsUI() {
        const handleChange = event => {
            if(event.target.value == "text") {
                document.getElementById('options').innerHTML = '<div class="input-text"><input type="text" placeholder="Type your answer here"/></div>';
            }
            console.log(event.target.value);
        };
        return (
            <>
                {questions.map((ques, i) => (
                    <div className="questions">
                        <div className="title">
                            <label>Add question</label>
                            <input type="text" placeholder={ques.questionText}/>
                        </div>
                        <div>
                            <label>Choose question type</label>
                            <select onChange={handleChange}>
                                <option value=""></option>
                                <option value="text">Text</option>
                                <option value="radio">Radio</option>
                                <option value="select">Select</option>
                            </select>
                        </div>
                        <div id="options">
                            <label>Options</label>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div>
            <div className="question_form">
                <br></br>
                <div className="section">
                    <div className="question_title_section">
                        <div className="question_form_top">
                            <input type="text" className="question_form_top_name" style={{color: "black"}} placeholder="Form Title"/>
                            <input type="text" className="question_form_top_desc" style={{color: "black"}} placeholder="Form Description"/>
                        </div>
                    </div>
                    {questionsUI()}
                </div>
            </div>
        </div>
    )
}

export default Question_form;