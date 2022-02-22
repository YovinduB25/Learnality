import React from 'react'
import { Link } from "react-router-dom";
import "../SignIn.css";

export class SignIn extends React.Component{
    render(){
        return(
           <div className="main-sign-in">
           <div className="sign-in-pic"></div>
           <div className="sign-in-container">
               <h1 className="container-heading">Learnality</h1>
               <form> 
                   <div className="username-email">
                       <input type="text" name="userName_email"  placeholder="Username or Email Address"/>
                   </div>

                   <div className="password">
                       <input type="password" name="password" placeholder="Password"/>
                   </div>

                   <div className="log-in-button">
                       <button>Log in</button>
                   </div>
               </form>

               <div className="line1"></div>
               <div className="word">
                   <p>OR</p>
                </div>
               <div className="line2"></div>


               <div className="forgot-password">
                   <Link to="/resetPassword" className="forgot-password">Forgotten your password?</Link>
               </div>

           </div>
           <div className="sign-in-sub-container">
               <p>Don't have an account? <Link to="/SignUp" className="sign-in-sign-up-link">Sign Up</Link></p>
           </div>
        </div>
        );
    }
        
    
}

