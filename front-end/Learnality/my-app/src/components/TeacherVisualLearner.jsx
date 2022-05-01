import React from "react";
import { Link } from "react-router-dom"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import heart from "../images/LearnerPages/lets-draw.png"
import bird from "../images/LearnerPages/tangram.png"
import "../LearningStyle.css";

export class TeacherVisualLearner extends React.Component{
    render(){
        return(
            <div className="visual-learner">
               <div className="sidebar">
                   <TeacherSideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You are a Visual Learner!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="learner-detail-container">
                            <h4 className="learner-detail-heading">What is a Visual Learner?</h4>
                            <p>Visual learners understand best when they see information. They may not understand spoken instructions. Visual students like diagrams, flowcharts and graphs, and they find handouts helpful, where they can write down what they hear or see as it is being described. Visual learners notice small details, so will remember faces instead of names, and they tend to like balance. They are often quiet students who like to read, draw and do craft. They will watch a situation before getting involved. Visual learners express themselves through creativity.</p>

                            <h6 className="learner-detail-two-heading">Learning strategies</h6>
                            <ul>
                                <li>Look at headings and pictures before reading whole sentences</li>
                                <li>Highlight important words in colour</li>
                                <li>Write your own notes and use charts, maps and graphs where possible</li>
                                <li>Connect new information with concepts you already know so you understand topics as a whole</li>
                                <li>Use hands-on and practical tasks such as building models or doing case-studies - this way you can show that you know how to do something rather than write down steps</li>
                                <li>Connect new information with concepts you already know so you understand topics as a whole</li>
                                <li>Brainstorm and use diagrams and mind maps to show how everything you are learning fits together.</li>
                            </ul>
                            
                       </div>

                       <div className="learner-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=IN-_S_jj3gE"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=K327aAlJkHg"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=VAJ-e4s-cNc"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=A4NqhPU-vh8"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                            </div>
                           

                       </div>

                       <div className="learner-game-reccomendation-container">
                            <h4 className="learner-game-heading">Learning Style Improving Excercises</h4>

                            <a href="https://www.mentalup.co/samples/game-v2/game128?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-one-container">
                                    <img src={heart} className="game1-pic"/>
                                    <h5 className="game-1-heading">Let’s Draw</h5>
                                    <p className="game-1-paragraph">There are different ways of learning and drawing is one of them. It improves visual attention, visualization, and spatial perception.</p>
                                </div>
                            </a>

                            <a href="https://www.mentalup.co/samples/game-v2/game122?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-two-container">
                                    <img src={bird} className="game2-pic"/>
                                    <h5 className="game-2-heading">Tangram</h5>
                                    <p className="game-2-paragraph">Tangram is one of the most chosen learning techniques for children of all ages. It improves visualization,planning.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

