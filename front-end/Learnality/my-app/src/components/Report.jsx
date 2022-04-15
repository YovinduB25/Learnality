import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import { HiDownload } from "react-icons/hi"
import "../report.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';

export default function Report() {

    const [data, setData] = useState({name: '', gender: '', loaded: false});

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
                gender: response.data.gender,
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
            <div className="dashboard">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Report</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                       <div className="container-one" > 
                            <h3> Details</h3>
                            <p className="name-report"> Name : {data.name}</p> 
                            <p className="gender-report"> Gender : {data.gender}</p> 
                            <p className="learner-report"> Type Of Learner :  </p> 
                            <p className="personality-report"> Personality Type : </p>
                        </div>
                   </div>

                   <div className="container-two">
                        <h3> Description </h3>
                        <p className="visual-report"> Visual learner : You benefit mostly by watching videos and images.In other words, you prefer graphic representations to text.You rely on the instructor's body language to help to understand.</p> 
                        <p className="openness-report"> Openness Personality : They are imaginative, curious, and open-minded. Individuals who are low in openness to experience would rather not try new things. They are close-minded, literal and enjoy having a routine. </p> 
                    </div>
                        <button className="download-button"><HiDownload/> Download</button>
               </div>
            </div>
        )
}