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
                    <h4 className="reset-password-sub-heading">Enter your username and new password.</h4>
                    <div className="text-inputUser">
                         <input type="text" name="userName"  placeholder="Username" />
                    </div>
                    <div className="text-input">
                         <input type="text" name="newPassword"  placeholder="New Password" />
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
                        <Link to="/StudentSignUp" className="go-to-sign-up">Create New Account</Link>
                    </div>

                    <div className="go-to-sign-in-page">
                        <Link to="/StudentSignIn" className="go-to-sign-in">Back to log in</Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}