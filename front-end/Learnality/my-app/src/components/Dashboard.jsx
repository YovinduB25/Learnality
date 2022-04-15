import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import { FaBookReader } from "react-icons/fa"
import { FaBrain } from "react-icons/fa"
import { FiRepeat } from "react-icons/fi"
import "../dashboard.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';

export default function Dashboard(){

    const [data, setData] = useState({degree: '', loaded: false});

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

    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter (counter + 1)
    }
        return(
            <div className="dashboard">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Dashboard</h1>
                   <div className="icon-container">
                       
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>
                <div className="display-degree-container">
                    <p className="degree-heading">Degree : {data.degree}<span></span></p>
                </div>

                <div className="attempt-counter-container">
                    <span className="attempt-counter">{counter}</span>
                    <p className="attempt-heading">Attempts</p>
                </div>

                <div className="retry-quiz-button">
                <Link to="/LearningStyleQuiz">
                    <button onClick={handleClick}><FiRepeat/>Retry Quiz</button>
                </Link>
                    
                </div>

                <div className="display-learning-style-type-container">
                    <div className="learner-type-icon"><FaBookReader/></div>
                    <p className="learner-type-heading">Type Of Learner</p>
                    <span className="learner-type-result">Visual Learner</span>
                </div>

                <div className="display-personality-style-type-container">
                    <div className="personality-type-icon"><FaBrain/></div>
                    <p className="personality-type-heading">Type Of Personality</p>
                    <span className="personality-type-result">Openness Personality</span>
                </div>
               </div>
            </div>
        )
    
}