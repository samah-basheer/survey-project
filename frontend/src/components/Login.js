import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Login.css';

const Login = () => {
    const [isActive, setActive] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    const toggleEye = () => {
        setEyeIcon(!eyeIcon);
    }
    function login(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let data = new FormData();
        data.append('email', email);
        data.append('password', password);

        let url = 'http://127.0.0.1:8000/api/auth/login';

        axios({
            method: 'POST',
            url: url,
            data: data
        })
            .then(function (response) {
                let status = document.getElementById('status');
                if(response.data.status == "Success") {
                    localStorage.setItem('user_id', response.data['user_id']);
                    window.location.href = "/";
                } else {
                    status.innerHTML = 'Incorrect e-mail and/or password.';
                }
            });
    }
    return (
        <div className="main">
            <div className={isActive ? 'active container': 'container'}>
                <div className="forms">
                    <div className="form login">
                        <span className="title">Login</span>

                        <form action="#" method="post">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your email" id="email" name="email" required/>
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input
                                    type={eyeIcon ? 'text' : 'password'}
                                    className="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <i className="uil uil-lock icon"></i>
                                <i className={eyeIcon ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEye}></i>
                            </div>
                            <div className="response">
                                <p className="login-response" id="status"></p>
                            </div>
                            <div className="input-field button">
                                <input type="button" id="login-btn" value="Login Now" onClick={login}/>
                            </div>
                        </form>

                        <div className="login-signup">
              <span className="text">Not a member?
                <a href="#" className="text signup-link" onClick={toggleClass}>Signup now</a>
              </span>
                        </div>
                    </div>
                    <div className="form signup">
                        <span className="title">Registration</span>

                        <form action="#" method="post">
                            <div className="input-field">
                                <input type="text" placeholder="Enter your first name" id="first_name" required/>
                                <i className="uil uil-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your last name" id="last_name" required/>
                                <i className="uil uil-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your email" id="user_email" required/>
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    className="password"
                                    id="user_password"
                                    placeholder="Create a password"
                                    required
                                />
                                <i className="uil uil-lock icon"></i>
                                <i className="uil uil-eye-slash showHidePw"></i>
                            </div>
                            <div className="login-response" id="sign_status"></div>

                            <div className="input-field button">
                                <input type="button" value="Login Now" id="signup_button"/>
                            </div>
                        </form>

                        <div className="login-signup">
                      <span className="text">You're a member?
                        <a href="#" className="text login-link" onClick={toggleClass}>Login Now</a>
                      </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;