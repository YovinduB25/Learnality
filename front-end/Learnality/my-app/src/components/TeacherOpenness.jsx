import React from "react";
import { Link } from "react-router-dom"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import article1 from "../images/LearnerPages/openness-1.png"
import article2 from "../images/LearnerPages/article-2.jpg"
import "../PersonalityTraits.css";

export class TeacherOpenness extends React.Component{
    render(){
        return(
            <div className="openness">
               <div className="sidebar">
                   <TeacherSideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You have an Openness Personality!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is Openness Personality?</h4>
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

                            <div className="personality-list">
                                <h6 className="personality-detail-two-heading">Characteristics</h6>
                                <ul>
                                    <li>Creative</li>
                                    <li>Intelligent and knowledgeable</li>
                                    <li>Give great attention to mental imagery</li>
                                    <li>Interested in new things</li>
                                    <li>Enjoys hearing new ideas</li>
                                    <li>Likes thinking about abstract concepts</li>
                                    <li>Usually more liberal and open to diversity</li>
                                    <li>Interested in artistic endeavors</li>
                                    <li>Adventurous</li>
                                </ul>
                            </div>
                            
                            
                       </div>

                       <div className="personality-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=EPtrewISmXY"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                            </div>
                           

                       </div>

                       <div className="personality-game-reccomendation-container">
                            <h4 className="personality-game-heading">Related Articles</h4>

                            <a href="https://www.verywellmind.com/how-openness-influences-your-behavior-4796351#:~:text=People%20who%20tend%20to%20be,%2C%20experiences%2C%20and%20creative%20endeavors.">
                                <div className="game-one-container">
                                    <img src={article1} alt="" className="game1-pic"/>
                                    <h5 className="game-1-heading">How Does Openness Affect Your Behavior?</h5>
                                    <p className="game-1-paragraph">Openness is one of the Big Five personality traits and involves being creative, curious, and interested in new experiences.</p>
                                </div>
                            </a>

                            <a href="https://www.mentalup.co/samples/game-v2/game122?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-two-container">
                                    <img src={article2} alt="" className="game2-pic"/>
                                    <h5 className="game-2-heading">What is Openness?</h5>
                                    <p className="game-2-paragraph">The Big Five personality trait Openness is about being open-minded. </p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

