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
               <form method="POST">

               <div className="full-name">
                       <input type="text" name="full_name" placeholder="Full name"/>
                   </div>



                   <div className="Username">
                       <input type="username" name="username" placeholder="Username"/>
                   </div>


                   <div className="email">
                       <input type="email" name="email"  placeholder="Email Address"/>
                   </div>

                   
                
                   <div className="Password">
                       <input type="password" name="password" placeholder="Password"/>
                   </div>


                   <div className="log-in-button">
                       <button>Sign Up</button>
                   </div>
               </form>

               <div className="policy-text">
                   <p>By signing up, you agree to our Terms, Data Policy and Cookie Policy.</p>
               </div>

           </div>
           <div className="sign-up-sub-container">
               <p>Have an account? <Link to="/SignIn" className="sign-up-sign-up-link">Log in</Link></p>
           </div>
        </div>
        );
    }
        
    
}