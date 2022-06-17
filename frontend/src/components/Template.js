import React, { useState, useEffect } from "react";
import "./Template.css";
import blank from "./images/blank.png";


function Template() {
    return (
        <div className="template_section">
            <div className="template_top">
                <div>
                    <p style={{ color: "#202124", fontSize: "16px" }}>Start a new form</p>
                </div>
            </div>
            <div className="template_body">
                <div className="card">
                    <img src={blank} className="card_image"/>
                    <span>Blank</span>
                </div>
            </div>
        </div>
    )
}

export default Template;