import React from "react"
import { Link } from "react-router-dom";
import "../resetPassword.css";
import resetPassword from "../images/ResetPasswordPage/ResetPasswordPic.png";


export class ResetPassword extends React.Component{
    render(){
        return(
            <div className="ResetPassword">
                <div className="reset-password-container">
                    <div className="reset-password-image">
                        <img src={resetPassword} alt="resetPasswordPic"/>
                    </div>
                    <h4 className="reset-password-heading">Trouble with logging in?</h4>
                    <h4 className="reset-password-sub-heading">Enter your email address and we'll send you a link back to your account</h4>
                    <div className="text-input">
                         <input type="text" name="userName_email"  placeholder="Username or Email Address" />
                    </div>

                    <div className="reset-password-button">
                        <button>Send login link</button>
                    </div>

                    <div className="reset-password-line1"></div>
                    <div className="or-word">
                         <p>OR</p>
                    </div>
                    <div className="reset-password-line2"></div>

                    <div className="go-to-sign-up-page">
                        <Link to="/SignUp" className="go-to-sign-up">Create New Account</Link>
                    </div>

                    <div className="go-to-sign-in-page">
                        <Link to="/SignIn" className="go-to-sign-in">Back to log in</Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}