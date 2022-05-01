import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "./SideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import article1 from "../images/LearnerPages/image2.jpg"
import article2 from "../images/LearnerPages/article-2.jpg"
import "../PersonalityTraits.css";

export class Agreeableness extends React.Component{
    render(){
        return(
            <div className="agreeableness">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You have an Agreeableness Personality!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is Agreeableness Personality?</h4>
                             <p>Agreeableness is one of the Big Five personality traits, which theorizes that there are five major dimensions to personality. Each dimension is viewed on a continuum, which means while you may be dominant in one area—like agreeableness—you still have some level of the other four traits represented in your personality as well.<br/><br/><br/>
                                Overall, agreeableness describes a person's ability to put other people's needs above their own. For instance, people who are high in agreeableness naturally experience empathy and tend to get tremendous pleasure from serving others and taking care of them.
                                Agreeable people also are trusting and forgiving and would rather collaborate than compete with others. Clearly, scoring high in agreeableness can be advantageous in many situations because it's a key trait in attaining and maintaining popularity. Agreeable people are generally well-liked and a joy to be around. Most people consider them good friends.
                             </p>

                            <div className="personality-list">
                                <h6 className="personality-detail-two-heading">Characteristics</h6>
                                <ul>
                                    <li>Get along well with others</li>
                                    <li>Are popular and well-liked</li>
                                    <li>Care for others in need</li>
                                    <li>Display sensitivity </li>
                                    <li>Are socially and emotionally intelligent</li>
                                    <li>De-escalate conflict</li>
                                    <li>Refrain from judging people</li>
                                    <li>Give others the benefit of the doubt </li>
                                    <li>Like to collaborate</li>
                                    <li>Form friendships easily</li>
                                    <li>Tend to be altruistic and perceptive</li>
                                    <li>Are emotionally supportive</li>
                                </ul>
                            </div>
                            
                            
                       </div>

                       <div className="personality-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=EbdKWMoGa-o"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                            </div>
                           

                       </div>

                       <div className="personality-game-reccomendation-container">
                            <h4 className="personality-game-heading">Related Articles</h4>

                            <a href="https://www.verywellmind.com/how-agreeableness-affects-your-behavior-4843762">
                                <div className="game-one-container">
                                    <img src={article1} alt="" className="game1-pic"/>
                                    <h5 className="game-1-heading">Understanding Agreeableness and Its Impact on Your Behavior</h5>
                                    <p className="game-1-paragraph">People who score high in agreeableness are kind, helpful, and well-liked. Learn more about this Big Five characteristic and how it impacts behavior.</p>
                                </div>
                            </a>

                            <a href="https://www.123test.com/personality-agreeableness/">
                                <div className="game-two-container">
                                    <img src={article2} alt="" className="game2-pic"/>
                                    <h5 className="game-2-heading">What is Agreeableness?</h5>
                                    <p className="game-2-paragraph">The Big Five personality trait Agreeableness is about friendliness and tact.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

