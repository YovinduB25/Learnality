import React from "react"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ViewProfile  from "../images/ViewProfile.jpg"
import "../ViewProfile.css";

export default function TeacherViewProfile() {

    const userId = localStorage.getItem('userId') || '';
    
    var axios = require('axios');
    var data = '';

    var config = {
    method: 'get',
    url: 'https://learnality-api.herokuapp.com/api/user/find?id=' + userId,
    headers: { },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
        return(
            <div className="Profile">
                <div className="sidebar">
                   <TeacherSideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">View Profile</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <CgProfile/>
                       </div>
                   </div>


                    <div className="ViewProfilePic">
                        <img src={ViewProfile} alt="ViewProfilePic"/>
                    </div>
                   <div className="view-info-container">
                      <p>Name :</p>
                      <p>Username :</p>
                      <p>Teaching Degree :</p>
                   </div>
               </div>
            </div>
        )
}