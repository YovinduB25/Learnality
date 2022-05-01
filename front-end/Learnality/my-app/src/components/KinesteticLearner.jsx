import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import numbers from "../images/LearnerPages/make-ten.png"
import fox from "../images/LearnerPages/lets-find-it.png"
import "../LearningStyle.css";

export class KinesteticLearner extends React.Component{
    render(){
        return(
            <div className="kinestetic-learner">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You are a Kinestetic Learner!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="learner-detail-container">
                            <h4 className="learner-detail-heading">What is a Kinestetic Learner?</h4>
                            <p>Kinesthetic learners learn effectively through touch,
                                movement and space. They also learn skills by
                                imitation and practice. They appreciate instructors
                                who use real-life examples and prefer hands-on
                                approaches to learning. Predominantly kinesthetic
                                learners can appear slow, in that information is
                                normally not presented in a style that suits their
                                learning methods. </p>

                            <h6 className="learner-detail-two-heading">Learning strategies</h6>
                            <ul>
                                <li>Handle objects, tools or machinery that you are
                                    studying. For example, handle the rocks in a
                                    geology class, or repeat computer applications
                                    several times. 
                                </li>
                                <li>
                                    Cut charts or diagrams apart so that you can
                                    practice assembling them in their correct order. 
                                </li>
                                <li>
                                    Use exaggerated movements and hand gestures
                                    when you study. Drama, dance, pantomime and
                                    role-playing use large muscle movements. Moving or pointing fingers and expressing information
                                    and emotions through hand gestures involve small
                                    muscle movement.
                                </li>
                                <li>
                                    Use a computer to type information and access muscle memory through keyboard strokes. 
                                </li>
                                <li>Walk as you recite or practice information. Pacing
                                    or walking with study materials in hand helps
                                    some people learn without being distracted by the
                                    discomfort of sitting too long. 
                                </li>
                                <li>Work at a chalkboard, flip chart or large poster
                                    paper to create study tools. List, draw, practice
                                    or write while you stand up and work on a large
                                    surface.
                                </li>
                                <li>  Learn through creative movement and activities.
                                      For example, if you are studying perimeters in
                                      math, tape off an area of a room and walk the
                                      perimeter. 
                                </li>
                            </ul>
                            
                       </div>

                       <div className="learner-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=eBN_OO94uBQ"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=DeZ5REoPjAI"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=Om6pklgh3Ws"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                            </div>
                           

                       </div>

                       <div className="learner-game-reccomendation-container">
                            <h4 className="learner-game-heading">Learning Style Improving Excercises</h4>
                            <a href="https://www.mentalup.co/samples/game-v2/game73?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-seven-container">
                                    <img src={numbers} alt="" className="game7-pic"/>
                                    <h5 className="game-1-heading">Find 10</h5>
                                    <p className="game-1-paragraph">This fun learning game is an oldie but goldie. It’s fun to play and improves planning and visual attention skills</p>
                                </div>
                            </a>

                            <a href="https://www.mentalup.co/samples/game-v2/game39?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-eight-container">
                                    <img src={fox} alt="" className="game8-pic"/>
                                    <h5 className="game-2-heading">Let's Find It</h5>
                                    <p className="game-2-paragraph">This game encourages kids to teamworking and critically thinking. It also improves visual recognition, conceptualization, and visual attention skills.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

