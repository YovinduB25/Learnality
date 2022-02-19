import React from 'react'
import { Link } from "react-router-dom";
import "../Login.css";


export class Login extends React.Component{
    render(){
        return(
            <div className="main-login">
            <div className="main-login-container">
                <div className="container">
                    <h1 className="container-heading">Learnality</h1>
                    <h4 className="container-sub-heading">Log in as</h4>
                    <div className="image-student"></div>
                    <div className="image-instructor"></div>
                    <Link to="/SignIn" className="student-button" >Student</Link>
                    <Link to="/SignIn" className="instructor-button">Instructor</Link>
                </div>
                <div className="sub-container">
                    <p>Don't have an account?<Link to ="/SignUp" className="sign-up-link"> Sign up</Link></p>
                </div>
            </div>
        </div>
        );
    }
}





