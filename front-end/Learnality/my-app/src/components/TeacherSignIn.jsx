import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../TeacherSignIn.css";
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";

export default function TeacherSignIn (){

    const navigate = useNavigate();

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
        url: 'https://learnality-api.herokuapp.com/api/user/teacherLogin',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
            .then(function (response) {
                const userId = response.data[0].id;
                localStorage.setItem("userId", userId)
                navigate("/TeacherDashBoard");
            })
            .catch(function (error) {
                if(error.response.data.message === "User not found"){
                    alert("Check your username and password again!");
                }
                else if(error.response.status === 500){
                    alert("Some Error Occurred. Try Again");
                }
                // else{
                //     alert("Incorrect password / username combination");
                // }
                // console.log(error.response.data)
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

           </div>
           <div className="teacher-sign-in-sub-container">
               <p>Don't have an account? <Link to="/TeacherSignUp" className="sign-in-sign-up-link">Sign Up</Link></p>
           </div>
        </div>
        );
        
    
}