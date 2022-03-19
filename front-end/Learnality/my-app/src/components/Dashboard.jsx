import React from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { FaBookReader } from "react-icons/fa"
import { FaBrain } from "react-icons/fa"
import { FiRepeat } from "react-icons/fi"
import "../dashboard.css";

export class Dashboard extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Dashboard</h1>
                   <div className="icon-container">
                       <div className="notifications">
                           <IoMdNotificationsOutline/>
                       </div>

                       <div className="profile">
                            <CgProfile/>
                       </div>
                   </div>
                <div className="display-degree-container">
                    <p className="degree-heading">Degree :<span></span></p>
                </div>

                <div className="attempt-counter-container">
                    <span className="attempt-counter">02</span>
                    <p className="attempt-heading">Attempts</p>
                </div>

                <div className="retry-quiz-button">
                    <button><FiRepeat/> Retry Quiz</button>
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
}