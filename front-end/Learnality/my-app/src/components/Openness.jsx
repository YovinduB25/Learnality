import React from "react";
import { Link } from "react-router-dom"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import heart from "../images/LearnerPages/lets-draw.png"
import bird from "../images/LearnerPages/tangram.png"
import "../LearningStyle.css";

export class Openness extends React.Component{
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

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is an Openness?</h4>
                             <p>People who tend to be high in the trait of openness are more willing to embrace new things, fresh
                                ideas, and novel experiences. They are open-minded and approach new things with curiosity and
                                tend to seek out novelty. They tend to pursue new adventures, experiences, and creative
                                endeavors. They are also very good at thinking about and making connections between different
                                concepts and ideas.
                                People who are low on openness, on the other hand, tend to prefer routines, traditions, and
                                familiarity. They approach new things with great caution and prefer consistency. Individuals who
                                are very low on the trait of openness are often seen as being rigid and close-minded. They may
                                find it difficult to cope with changes.
                                Individuals who are low in this trait may pass up opportunities to try new things, including
                                changes that could lead to academic or career advancement. Rather than move to a new place to
                                go to a different school or make a career change to find a more rewarding job, they may stick
                                with what is routine and familiar.
                             </p>

                            <h6 className="personality-detail-two-heading">Learning strategies</h6>
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

                       <div className="personality-recommendation-video-container">
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

