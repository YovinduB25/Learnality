import React from "react"
import { Link } from "react-router-dom"
import "../home.css";
import { CgProfile } from "react-icons/cg"
import LearningStylePic from "../images/HomePage/LearningStylePic.png";
import { SideBar } from "../components/SideBar";

export class Home extends React.Component{
    render(){

        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 2) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloadCount');
        }
        
        return(
            <div className="home">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">Home</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>
                   <h2 className="choose-option-heading">Find your best study approach by attempting these following quiz</h2>
                   
                   <div className="learning-style-quiz-container">
                        <h3 className="learning-style-quiz-heading">Identify Your Learning Style and Personality Type</h3>
                        <img src={LearningStylePic} alt="LearningStylePic"/>
                        <div className="overlay">
                            <div className="overlay-text">Attempt Learning Style and Personality Style Identification Quiz</div>
                            <div className="overlay-link">
                            <button>
                                <Link to="/LearningStyleQuiz" className="learning-style-button">Start Quiz</Link>
                            </button>
                            </div>
                        </div>
                   </div>
                   


               </div>
            </div>
        )
    }
}