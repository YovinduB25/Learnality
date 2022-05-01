import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "./SideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import article1 from "../images/LearnerPages/image4.jpg"
import article2 from "../images/LearnerPages/article-2.jpg"
import "../PersonalityTraits.css";

export class Extraversion extends React.Component{
    render(){
        return(
            <div className="extraversion">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You have an Extraversion Personality!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is Extraversion Personality?</h4>
                             <p>Extroversion is a personality trait typically characterized by outgoingness, high energy, and/or
                                talkativeness. In general, the term refers to a state of being where someone “recharges,” or draws
                                energy, from being with other people; the opposite—drawing energy from being alone—is
                                known as introversion.<br/><br/><br/>
                                Extroverts are often unfairly stereotyped as overly talkative or attention-seeking. In reality, they
                                simply gain energy from engaging in social interaction. People who are high in extroversion
                                need social stimulation to feel energized. They gain inspiration and excitement from talking and
                                discussing ideas with other people.<br/><br/>
                                It is important to remember that extroversion and introversion represent a continuum. While some people might tend to be at either of the two extremes, most people are somewhere in the middle.
                             </p>

                            <div className="personality-list">
                                <h6 className="personality-detail-two-heading">Characteristics</h6>
                                <ul>
                                    <li>Action-oriented.</li>
                                    <li>Assertive.</li>
                                    <li>Cheerful.</li>
                                    <li>Engaging. </li>
                                    <li>Many artistic hobbies. </li>
                                    <li>Happy being the center of attention</li>
                                    <li>Friendly</li>
                                    <li>Gregarious </li>
                                    <li>Novelty- and excitement-seeking.</li>
                                    <li>Talkative</li>
                                </ul>
                            </div>
                            
                            
                       </div>

                       <div className="personality-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=tjMkkNSX08s"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                            </div>
                           

                       </div>

                       <div className="personality-game-reccomendation-container">
                            <h4 className="personality-game-heading">Related Articles</h4>

                            <a href="https://www.verywellmind.com/what-is-extroversion-2795994">
                                <div className="game-one-container">
                                    <img src={article1} alt="" className="game1-pic"/>
                                    <h5 className="game-1-heading">How Extroversion in Personality Influences Behavior</h5>
                                    <p className="game-1-paragraph">Discover some of the key characteristics of extroversion, and learn how this trait commonly influences behavior.</p>
                                </div>
                            </a>

                            <a href="https://www.123test.com/personality-extraversion/">
                                <div className="game-two-container">
                                    <img src={article2} alt="" className="game2-pic"/>
                                    <h5 className="game-2-heading">What is Extraversion?</h5>
                                    <p className="game-2-paragraph">The Big Five personality trait Extraversion is about being outgoing and social. </p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

