import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../TeacherSignIn.css";
import Logo from "../images/logo.png"

export default function TeacherSignIn (){

    const username = useRef(null);
    const password = useRef(null);

    const handleTeacherLogin = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
            "username": username?.current?.value,
            "password": password?.current?.value
        });

        var config = {
        method: 'post',
        url: 'https://learnality-api.herokuapp.com/api/user/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    };
        return(
           <div className="teacher-main-sign-in">
           <div className="sign-in-pic"></div>
           <div className="teacher-sign-in-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               <form method="POST" onSubmit={handleTeacherLogin}> 
                   <div className="username">
                       <input type="text" name="userName" ref={username} placeholder="Username" required/>
                   </div>

                   <div className="password">
                       <input type="password" name="password" ref={password} placeholder="Password" required/>
                   </div>

                
                   <div className="log-in-button">
                       <button>Log in</button>
                   </div>
               </form>


               <div className="forgot-password">
                   <Link to="/TeacherResetPassword" className="forgot-password">Forgotten your password?</Link>
               </div>

           </div>
           <div className="teacher-sign-in-sub-container">
               <p>Don't have an account? <Link to="/TeacherSignUp" className="sign-in-sign-up-link">Sign Up</Link></p>
           </div>
        </div>
        );
        
    
}