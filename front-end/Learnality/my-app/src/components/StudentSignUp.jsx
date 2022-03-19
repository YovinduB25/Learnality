import React from 'react'
import { Link } from "react-router-dom";
import "../SignUp.css";
import Logo from "../images/logo.png"

export class StudentSignUp extends React.Component{
    render(){
        return(
           <div className="main-sign-up">
           <div className="sign-up-pic"></div>
           <div className="sign-up-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               
               <form method="POST">

                   <div className="FullName">
                       <input type="Fullrname" name="Fullname" placeholder="Full Name" required/> 
                   </div>

                   <div className="select-gender">
                       <select name="gender" id="gender-dropdown-list">
                           <option value="display-gender" selected disabled >Select Gender</option>
                           <option value="Female">Female</option>
                           <option value="Male">Male</option>
                           
                       </select>
                   </div> 


                   <div className="Username">
                       <input type="username" name="username" placeholder="Username" required/> 
                   </div>

        
                   <div className="Password">
                       <input type="password" name="password" placeholder="Password" required/>
                   </div>

                   <div className="course-dropdown">
                       <select name="select-course" id="course-dropdown-list">
                           <option value="display-course" selected disabled >Select Your Course</option>
                           <option value="SE">BEng (Hons) Software Engineering</option>
                           <option value="CS">BSc (Hons) Computer Science</option>
                           <option value="AL/DS">BEng (Hons) Artificial Intelligence and Data Science</option>
                           <option value="BIS">BSc (Hons) Business Infomation Systems</option>
                           <option value="BM">BA (Hons) Business Managemnet</option>
                           <option value="BDA">BSc (Hons) Business Data Analytics</option>
                       </select>
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
               <p>Have an account? <Link to="/StudentSignIn" className="sign-up-sign-up-link">Log in</Link></p>
           </div>
        </div>
        );
    }
        
    
}