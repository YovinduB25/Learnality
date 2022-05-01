import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import  instruments from "../images/LearnerPages/instruments.png";
import bird  from "../images/LearnerPages/birdy.png";
import "../LearningStyle.css";

export class AuditoryLearner extends React.Component{
    render(){
        return(
            <div className="auditory-learner">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You are a Auditory Learner!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="learner-detail-container">
                            <h4 className="learner-detail-heading">What is a Auditory Learner?</h4>
                            <p>Auditory learners understand information best when they are given verbal instructions. Only 30% of school students are auditory learners. They often memorise best by hearing and speaking out loud. They may talk a lot and interrupt others. They remember names better than faces. Noise and music is very distracting and they don’t benefit as much as other learners from pictures or practical activities. When listening, they often look distracted, and like they are listening to their thoughts, with their eyes looking down to the right. They often play musical instruments and sing or hum to themselves when busy. </p>
                            
                            
                            <h6 className="learner-detail-two-heading" >Learning strategies</h6>
                            <ul>
                                <li>Read out loud</li>
                                <li>Make and listen to CDs and audio tapes</li>
                                <li>Watch videos</li>
                                <li>Use word association and mnemonics</li>
                                <li>Repeat information with your eyes closed</li>
                                <li>Make up songs or jingles</li>
                                <li>Record lectures and discussions</li>
                                <li>Explain information to other people</li>

                            </ul>
                            
                       </div>

                       <div className="learner-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                
                                        url="https://www.youtube.com/watch?v=q-xFvLRludE"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=O6BXxGqDSxQ"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url=" https://www.youtube.com/watch?v=yfsTLvxSF90"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=bgIXy2dVXdc"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                            </div>
                           

                       </div>

                       <div className="learner-game-reccomendation-container">
                            <h4 className="learner-game-heading">Learning Style Improving Excercises</h4>

                            <a href="https://www.mentalup.co/samples/game-v2/game65?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-three-container">
                                    <img src={instruments} className="game3-pic"/>
                                    <h5 className="game-1-heading">My Instruments</h5>
                                    <p className="game-1-paragraph">Instruments are great ways of learning. This fun game will examine your auditory skills besides aural memory and decision-making skills.</p>
                                </div>
                            </a>

                            <a href="https://www.mentalup.co/samples/game/game8?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-four-container">
                                    <img src={bird} className="game4-pic"/>
                                    <h5 className="game-2-heading">Birdy</h5>
                                    <p className="game-2-paragraph">Can you keep in mind the bird names, sounds, and images? This game will tell you much about your visual and aural memory skills.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

