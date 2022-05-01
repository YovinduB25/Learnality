import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../SignUp.css";
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";

export default function StudentSignUp (){
    
    const navigate = useNavigate();

    const Fullname = useRef(null);
    const gender = useRef(null);
    const username = useRef(null);
    const password = useRef(null);
    const selectCourse = useRef(null);

    const handleRegistration = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
        "fname": Fullname?.current?.value,
        "gender": gender?.current?.value,
        "username": username?.current?.value,
        "password": password?.current?.value,
        "course": selectCourse?.current?.value,
        "is_teacher": false
        });

        var config = {
        method: 'post',
        url: 'https://learnality-api.herokuapp.com/api/user/create',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            navigate("/StudentSignIn");
        })
        .catch(function (error) {
            if(error.response.data.message === "Please select the course you are following"){
                alert("Please select the course you are following");
            }
            if(error.response.status === 500){
                alert("Username is already in use. Try Again");
            }
        // console.log(error);
        });
    };
        return(
           <div className="main-sign-up">
           <div className="sign-up-pic"></div>
           <div className="sign-up-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"/>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               
               <form method="POST" onSubmit = {handleRegistration}>

                   <div className="FullName">
                       <input type="text" name="Fullname" ref={Fullname} placeholder="Full Name" required/> 
                   </div>

                   <div className="select-gender">
                       <select name="gender" ref={gender} id="gender-dropdown-list">
                           <option value="display-gender" selected disabled >Select Gender</option>
                           <option value="Female">Female</option>
                           <option value="Male">Male</option>
                           
                       </select>
                   </div> 


                   <div className="Username">
                       <input type="text" name="username" ref={username} placeholder="Username" required/> 
                   </div>

        
                   <div className="Password">
                       <input type="password" name="password" ref={password} placeholder="Password" required/>
                   </div>

                   <div className="course-dropdown">
                       <select name="select-course" ref={selectCourse} id="course-dropdown-list">
                           <option value= "">Select Your Course</option>
                           <option value="Software Engineering">BEng (Hons) Software Engineering</option>
                           <option value="Computer Science">BSc (Hons) Computer Science</option>
                           <option value="Artificial Intelligence and Data Science">BEng (Hons) Artificial Intelligence and Data Science</option>
                           <option value="Business Infomation Systems">BSc (Hons) Business Infomation Systems</option>
                           <option value="Business Management">BA (Hons) Business Management</option>
                           <option value="Business Data Analytics">BSc (Hons) Business Data Analytics</option>
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