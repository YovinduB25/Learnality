import React, { useState } from 'react';
import { SideBar } from "./SideBar";
import { CgProfile } from "react-icons/cg"
import ViewProfile  from "../images/ViewProfile.jpg"
import "../ViewProfile.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';

export default function StudentViewProfile() {
    
    const [data, setData] = useState({name: '', username: '', degree: '', loaded: false});

    const makeRequest = () => {

        var data = '';
        var config = {
            method: 'get',
            url: 'https://learnality-api.herokuapp.com/api/user/find?id=' + userId,
            headers: { },
            data : data
        };

        axios(config)
        .then(function (response) {
            setData({
                name: response.data.fname,
                username: response.data.username,
                degree: response.data.course,
                loaded: true
            });
            console.log(JSON.stringify(response.data)); 
        })
        .catch(function (error) {
            console.log(error);
            setData({loaded: true});
        });

    };

    if(!data.loaded){
        makeRequest();
    }

        return(
            <div className="Profile">
                <div className="sidebar">
                   <SideBar/>
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
                       <br/><br/>
                      <p><b>Name  :</b>  {data.name}</p>
                      <p><b>Username  : </b> {data.username}</p>
                      <p><b>Degree  :</b>  {data.degree}</p>
                   </div>
               </div>
            </div>
        )
}