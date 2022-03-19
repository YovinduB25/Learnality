import React from 'react'
import { Link } from "react-router-dom";
import "../TeacherSignIn.css";
import Logo from "../images/logo.png"

export class TeacherSignIn extends React.Component{
    render(){
        return(
           <div className="teacher-main-sign-in">
           <div className="sign-in-pic"></div>
           <div className="teacher-sign-in-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               <form method="POST"> 
                   <div className="username">
                       <input type="text" name="userName"  placeholder="Username" required/>
                   </div>

                   <div className="password">
                       <input type="password" name="password" placeholder="Password" required/>
                   </div>

                   <div className="course-dropdown">
                       <select name="select-course" id="course-dropdown-list"> 
                           <option value="display-course" selected disabled >Select Your Course</option>
                           <option value="SE">BEng (Hons) Software Engineering</option>
                           <option value="CS">BSc (Hons) Computer Science</option>
                           <option value="AL/DS">BEng (Hons) Artificial Intelligence and Data Science</option>
                           <option value="BIS">BSc (Hons) Business Infomation Systems</option>
                           <option value="BM">BA (Hons) Business Management</option>
                           <option value="BDA">BSc (Hons) Business Data Analytics</option>
                       </select>
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
        
    
}