import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../SignIn.css";
import Logo from "../images/logo.png"

export default function StudentSignIn() {

    const username = useRef(null);
    const password = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
        "username": username?.current?.value,
        "password": password?.current?.value
        });

        var config = {
        method: 'post',
        url: `http://localhost:8080/api/user/login`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            let userId = response.data[0].id;
            localStorage.setItem('userId', userId);
        })
        .catch(function (error) {
            console.log("Login failed");
        });
    };
        return(
           <div className="main-sign-in">
           <div className="sign-in-pic"></div>
           <div className="sign-in-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               <form method="POST" onSubmit={handleLogin}> 
                <div className="username">
                    <input type="text" name="userName" ref={username} placeholder="Username"/>
                </div>

                <div className="password">
                    <input type="password" name="password" ref={password} placeholder="Password"/>
                </div>

                <div className="log-in-button">
                    <button>Log in</button>
                </div>
            </form>


               <div className="forgot-password">
                   <Link to="/ResetPassword" className="forgot-password">Forgotten your password?</Link>
               </div>

           </div>
           <div className="sign-in-sub-container">
               <p>Don't have an account? <Link to="/StudentSignUp" className="sign-in-sign-up-link">Sign Up</Link></p>
           </div>
        </div>
        );
        
    
}

