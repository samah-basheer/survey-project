import React, {useEffect} from 'react';
import './Success.css';
import check from './images/check.png';

const Success = () => {
    return (
        <div className="main-content">
            <div className="wrapper">
                <img src={check}/>
                <p>Thank you! You've successfully filled survey.</p>
            </div>
        </div>
    )
}

export default Success;