import React, { useState, useEffect } from "react";
import "./Question_form.css";

function Question_form() {
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
                </div>
            </div>
        </div>
    )
}

export default Question_form;