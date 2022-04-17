import React, { useRef } from 'react';
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import EditProfile  from "../images/EditProfile.jpg"
import "../editProfile.css";

export default function TeacherEditProfile (){
    const userId = localStorage.getItem('userId') || '';

    const fullname = useRef(null);
    const username = useRef(null);
    const courses = useRef(null);

    const updateProfile = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
        "fname": fullname?.current?.value,
        "username": username?.current?.value,
        "course": courses?.current?.value
        });

        var config = {
        method: 'put',
        url: 'https://learnality-api.herokuapp.com/api/user/update?id=' + userId,
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
    }
        return(
            <div className="Profile">
                <div className="sidebar">
                   <TeacherSideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Edit Profile</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>


                    <div className="EditProfilePic">
                        <img src={EditProfile} alt="EditProfilePic"/>
                    </div>
                   
                      <form>
                        <div className="edit-info-container">
                            <label for="fname">Full Name</label>
                            <input type="text" id="fname"/>

                            <label for="UName">Username</label>
                            <input type="text" id="UName"/>

                            <label for="Degree">Degree</label>
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
                        
                        <div className="form-buttons">
                                <input type="submit" value="Save Changes"/>
                                <input type="reset" value="Discard All Changes"/>
                        </div>

                      </form> 
                      

                   
               </div>
            </div>
        )
}