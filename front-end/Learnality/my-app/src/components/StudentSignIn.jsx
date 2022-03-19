import React from 'react'
import { Link } from "react-router-dom";
import "../SignIn.css";
import Logo from "../images/logo.png"

export class StudentSignIn extends React.Component{
    render(){
        return(
           <div className="main-sign-in">
           <div className="sign-in-pic"></div>
           <div className="sign-in-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               <form method="POST"> 
                   <div className="username">
                       <input type="text" name="userName"  placeholder="Username"/>
                   </div>

                   <div className="password">
                       <input type="password" name="password" placeholder="Password"/>
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
        
    
}

