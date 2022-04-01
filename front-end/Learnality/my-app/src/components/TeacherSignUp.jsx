import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../TeacherSignUp.css";
import Logo from "../images/logo.png"

export default function TeacherSignUp (){
    const Fullname = useRef(null);
    const username = useRef(null);
    const password = useRef(null);

    let selectedCourses = [];

    const handleChange = (event) => {  
        var isChecked = event.target.checked;  
        var item = event.target.value;  
           
        if(isChecked){
            selectedCourses.push(item);
        } else {
            selectedCourses = arrayRemove(selectedCourses, item)
        }
 
    }  

    const arrayRemove = (arr, value) => { 
    
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }

    const handleTeacherRegistration = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
        "fname": Fullname?.current?.value,
        "username": username?.current?.value,
        "password": password?.current?.value,
        "course":  selectedCourses,
        "is_teacher": true
        });

        var config = {
        method: 'post',
        url: 'http://localhost:8080/api/user/create',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
    });
};
        return(
           <div className="teacher-main-sign-up">
           <div className="sign-up-pic"></div>
           <div className="teacher-sign-up-container">
               <div className="container-heading-section">
                     <img src={Logo} alt="logo"></img>
                     <h1 className="container-heading">Learnality</h1> 
               </div>
               <form method="POST" onSubmit = {handleTeacherRegistration}>

            <div className="FullName">
                <input type="text" name="Fullname" ref={Fullname} placeholder="Full Name" required/> 
            </div>

         
            <div className="Username">
                <input type="text" name="username" ref={username} placeholder="Username" required/> 
            </div>

 
            <div className="Password">
                <input type="password" name="password" ref={password} placeholder="Password" required/>
            </div>

            <div className="course-selection">
                <p className="select-teaching-course">Select Existing Teaching Course :</p>                                 

                <input type="checkbox" id="SE" name="Software-engineering" onChange={handleChange} value="Software Engineering"/>
                <label for="SE">BEng (Hons) Software Engineering</label><br/>

                <input type="checkbox" id="CS" name="Computer-science"onChange={handleChange}  value="Computer Science"/>
                <label for="CS">BSc (Hons) Computer Science</label><br/>

                <input type="checkbox" id="AI/DS" name="AI/DS" onChange={handleChange} value="Artificial Intelligence and Data Science"/>
                <label for="AI/DS">BEng (Hons) Artificial Intelligence and Data Science </label><br/>

                <input type="checkbox" id="BIS" name="Business-Infomation-Systems" onChange={handleChange} value="Business Information System"/>
                <label for="BIS">BSc (Hons) Business Infomation Systems</label><br/>

                <input type="checkbox" id="BM" name="Business-Management" onChange={handleChange} value="Business Management"/>
                <label for="BM">BA (Hons) Business Management</label><br/>

                <input type="checkbox" id="BDA" name="Business-data-analytics" onChange={handleChange} value="Business Data Analytics"/>
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