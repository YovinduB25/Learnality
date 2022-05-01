import React, { useState } from "react"
import { TeacherSideBar } from "./TeacherSideBar";
import ViewProfile  from "../images/ViewProfile.jpg"
import "../ViewProfile.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';

export default function TeacherViewProfile() {
   
    const [data, setData] = useState({name: '', username: '', loaded: false});

    const[degree, setDegree] = useState({degree0: '', degree1: '', degree2: '', degree3: '', degree4: '', degree5: '', load: false});

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
                loaded: true
            });
            setDegree({
                degree0: response.data.course[0],
                degree1: response.data.course[1],
                degree2: response.data.course[2],
                degree3: response.data.course[3],
                degree4: response.data.course[4],
                degree5: response.data.course[5],
                load: true
            });

            console.log(JSON.stringify(response.data.course)); 
        })
        .catch(function (error) {
            // console.log(error);
            setData({loaded: true});
            setDegree({load: true});
        });

    };

    if(!data.loaded){
        makeRequest();
    }
        return(
            <div className="Profile">
                <div className="sidebar">
                   <TeacherSideBar/>
               </div>

               <div class="center-container">
                    <h1 className="center-container-main-heading">View Profile</h1>
                        
                    <div className="ViewProfilePic">
                        <img src={ViewProfile} alt="ViewProfilePic"/>
                    </div>

                    <div className="view-info-container">
                        <br/><br/>
                        <p><b>Name  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;</b> {data.name}</p>
                        <p><b>Username &nbsp; : &nbsp; &nbsp;</b> {data.username}</p>
                        <p><b>Degree &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;</b>  <ul>{degree.degree0}</ul>
                                                                                      <ul>{degree.degree1}</ul>
                                                                                      <ul>{degree.degree2}</ul>
                                                                                      <ul>{degree.degree3}</ul>
                                                                                      <ul>{degree.degree4}</ul>
                                                                                      <ul>{degree.degree5}</ul></p>
                    </div>
                </div>
            </div>
        )
}