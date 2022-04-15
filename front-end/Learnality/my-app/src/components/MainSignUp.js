import React from 'react'
import { Link } from "react-router-dom";
import "../Login.css";


export class MainSignUp extends React.Component{
    render(){
        return(
            <div className="main-login">
            <div className="main-login-container">
                <div className="container">
                    <h1 className="container-heading">Learnality</h1>
                    <h4 className="container-sub-heading">Sign up as</h4>
                    <div className="image-student"></div>
                    <div className="image-instructor"></div>
                    <Link to="/StudentSignUp" className="student-button" >Student</Link>
                    <Link to="/TeacherSignUp" className="instructor-button">Instructor</Link>
                </div>
                <div className="sub-container">
                    <p>Have an account?<Link to ="/" className="sign-up-link"> Log In</Link></p>
                </div>
            </div>
        </div>
        );
    }
}