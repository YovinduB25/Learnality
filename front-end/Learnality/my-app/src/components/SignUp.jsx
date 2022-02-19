import React from 'react'
import { Link } from "react-router-dom";
import "../SignUp.css";

export class SignUp extends React.Component{
    render(){
        return(
           <div className="main-sign-up">
           <div className="sign-up-pic"></div>
           <div className="sign-up-container">
               <h1 className="container-heading">Learnality</h1>

           </div>
           <div className="sign-up-sub-container">
               <p>Have an account? <Link to="/SignIn" className="sign-up-sign-up-link">Log in</Link></p>
           </div>
        </div>
        );
    }
        
    
}