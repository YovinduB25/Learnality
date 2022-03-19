import React from 'react'
import { Link } from "react-router-dom";
import "../TeacherSignUp.css";
import Logo from "../images/logo.png"

export class TeacherSignUp extends React.Component{
    render(){
        return(
           <div className="teacher-main-sign-up">
           <div className="sign-up-pic"></div>
           <div className="teacher-sign-up-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               
               <form method="POST">

                   <div className="FullName">
                       <input type="Fullrname" name="Fullname" placeholder="Full Name" required/> 
                   </div>

                
                   <div className="Username">
                       <input type="username" name="username" placeholder="Username" required/> 
                   </div>

        
                   <div className="Password">
                       <input type="password" name="password" placeholder="Password" required/>
                   </div>

                   <div className="course-selection">
                       <p className="select-teaching-course">Select Existing Teaching Course :</p>
                       <input type="checkbox" id="SE" name="Software-engineering" value="SE"/>
                       <label for="SE">BEng (Hons) Software Engineering</label><br/>

                       <input type="checkbox" id="CS" name="Computer-science" value="CS"/>
                       <label for="CS">BSc (Hons) Computer Science</label><br/>

                       <input type="checkbox" id="AI/DS" name="AI/DS" value="AI/DS"/>
                       <label for="AI/DS">BEng (Hons) Artificial Intelligence and Data Science </label><br/>

                       <input type="checkbox" id="BIS" name="Business-Infomation-Systems" value="BIS"/>
                       <label for="BIS">BSc (Hons) Business Infomation Systems</label><br/>

                       <input type="checkbox" id="BM" name="Business-Management" value="BM"/>
                       <label for="BM">BA (Hons) Business Management</label><br/>

                       <input type="checkbox" id="BDA" name="Business-data-analytics" value="BDA"/>
                       <label for="BDA">BSc (Hons) Business Data Analytics</label><br/>
                   </div>


                   <div className="log-in-button">
                       <button>Sign Up</button>
                   </div>
               </form>

               <div className="teacher-policy-text">
                   <p>By signing up, you agree to our Terms, Data Policy and Cookie Policy.</p>
               </div>

           </div>
           <div className="teacher-sign-up-sub-container">
               <p>Have an account? <Link to="/TeacherSignIn" className="sign-up-sign-up-link">Log in</Link></p>
           </div>
        </div>
        );
    }
        
    
}