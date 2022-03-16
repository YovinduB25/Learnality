import React from "react"
import { Link } from "react-router-dom"
import "../home.css";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import LearningStylePic from "../images/HomePage/LearningStylePic.png";
import PersonalityStylePic from "../images/HomePage/PersonalityStylePic.png";
import { SideBar } from "../components/SideBar";




export class Home extends React.Component{
    render(){
        return(
            <div className="home">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">Home</h1>
                   <div className="icon-container">
                       <div className="notifications">
                           <IoMdNotificationsOutline/>
                       </div>

                       <div className="profile">
                            <CgProfile/>
                       </div>
                   </div>
                   <h2 className="choose-option-heading">Find your best study approach by attempting these following quizzes</h2>
                   
                   <div className="learning-style-quiz-container">
                        <h3 className="learning-style-quiz-heading">Identify Your Learning Style</h3>
                        <img src={LearningStylePic} alt="LearningStylePic"/>
                        <div className="overlay">
                            <div className="overlay-text">Attempt Learning Style Identification Quiz</div>
                            <div className="overlay-link">
                                <button>Start Quiz</button>
                            </div>
                        </div>
                   </div>
                   <div className="personality-style-quiz-container">
                        <h3 className="personality-style-quiz-heading">Identify Your Personality Trait</h3>
                        <img src={PersonalityStylePic} alt="PersonalityStylePic"/>
                        <div className="overlay">
                            <div className="overlay-text">Attempt Personality Trait Identification Quiz</div>
                            <div className="overlay-link">
                                <button>Start Quiz</button>
                            </div>
                        </div>
                   </div>


               </div>
            </div>
        )
    }
}