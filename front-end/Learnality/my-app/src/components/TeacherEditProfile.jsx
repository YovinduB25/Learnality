import React, { useRef } from 'react';
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import EditProfile  from "../images/EditProfile.jpg"
import "../editProfile.css";
import { useNavigate } from "react-router-dom";

export default function TeacherEditProfile (){
    const userId = localStorage.getItem('userId') || '';

    const fullname = useRef(null);
    const username = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const deleteProfile = (event) => {

        event.preventDefault();
        const deleteprofile = window.confirm("Are you sure you want to delete your account?");
        if (deleteprofile){
            var axios = require('axios');
            var data = '';

            var config = {
            method: 'delete',
            url: 'https://learnality-api.herokuapp.com/api/user/delete?id=' + userId,
            headers: {  },
            data : data
            };

            axios(config)
            .then(function (response) {
            // console.log(JSON.stringify(response.data));
                navigate("/");
            })
            .catch(function (error) {
            // console.log(error.response.status);
            });
        }
        else{
            alert("Account not Deleted.");
        }
    }

    const updateProfile = (event) => {
        event.preventDefault();
        const editprofile = window.confirm("Are you sure you want to update your profile details?");
        if (editprofile){
            var axios = require('axios');
            var data = JSON.stringify({
            "fname": fullname?.current?.value,
            "username": username?.current?.value,
            "password": password?.current?.value
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
            // console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            // console.log(error.response.status);

            });
        }
        else{
            alert("Profile not updated.");
        }
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
                   
                      <form method = "POST" onSubmit = {updateProfile}>
                        <div className="teacher-edit-info-container">
                            <label for="fname">Full Name</label>
                            <input type="text" id="fname" ref = {fullname} required/>

                            <label for="UName">Username</label>
                            <input type="text" id="UName" ref = {username} required/>
                           
                            <label for="password">Password</label>
                            <input type="text" id="password" ref = {password} required/>

                        </div>
                        
                        <div className="teacher-form-buttons">
                                <input type="submit" value="Save Changes"/>
                                <input type="reset" value="Discard All Changes"/>
                        </div>

                        <div className="teacher-delete-account-button">
                            <button onClick={deleteProfile}>Delete Account</button>
                        </div>
                      </form> 
               </div>
            </div>
        )
}