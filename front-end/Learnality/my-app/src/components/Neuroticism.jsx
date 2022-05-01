import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "./SideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import article1 from "../images/LearnerPages/image5.gif"
import article2 from "../images/LearnerPages/article-2.jpg"
import "../PersonalityTraits.css";

export class Neuroticism extends React.Component{
    render(){
        return(
            <div className="neuroticism">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You have a Neuroticism Personality!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is Neuroticism Personality?</h4>
                             <p>
                                 Neuroticism is a trait that reflects a person's level of emotional stability. It is often defined as a negative personality trait involving negative emotions, poor self-regulation (an inability to manage urges), trouble dealing with stress, a strong reaction to perceived threats, and the tendency to complain.<br/><br/>
                                 People with neuroticism often become easily aroused when stimulated or have a reduced ability to calm themselves down when upset or worried. This concept has roots in Freudian times but was later expanded upon by Hans Eysenck and others.<br/><br/>
                                 Neuroticism is generally measured using self-report questionnaires as part of a personality assessment. It might also involve asking other people, such as friends and family, about the person and their personality characteristics. This process presents some challenges in identifying its true prevalence.
                             </p>

                            <div className="personality-list">
                                <h6 className="personality-detail-two-heading">Characteristics</h6>
                                <ul>
                                    <li>An overall tendency toward negative emotions</li>
                                    <li>Feels of anxiety or irritability</li>
                                    <li>Poor emotional stability</li>
                                    <li>Feelings of self-doubt </li>
                                    <li>Being self-conscious or shy</li>
                                    <li>Experiencing moodiness, sadness, or depression</li>
                                    <li>Easily stressed or upset; unable to handle stress well</li>
                                    <li>Dramatic changes in feelings</li>
                                    <li>Lack of resilience or difficulty bouncing back after adversity</li>
                                    <li>Chronic worrying about a variety of things</li>
                                    <li>Tendency to interpret neutral situations as threatening</li>
                                    <li>Often view minor problems as overwhelming</li>
                                </ul>
                            </div>
                            
                            
                       </div>

                       <div className="personality-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=hMtfn9L0g2I"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                            </div>
                           

                       </div>

                       <div className="personality-game-reccomendation-container">
                            <h4 className="personality-game-heading">Related Articles</h4>

                            <a href="https://www.verywellmind.com/how-neuroticism-affects-your-behavior-4782188">
                                <div className="game-one-container">
                                    <img src={article1} className="game1-pic"/>
                                    <h5 className="game-1-heading">Understanding the Impact of Neuroticism From the Big Five Traits</h5>
                                    <p className="game-1-paragraph">Neuroticism is one of the Big Five personality factors. Learn more about this factor and how this personality trait might impact your relationships.</p>
                                </div>
                            </a>

                            <a href="https://www.123test.com/personality-neuroticism/">
                                <div className="game-two-container">
                                    <img src={article2} className="game2-pic"/>
                                    <h5 className="game-2-heading">What is Neuroticism?</h5>
                                    <p className="game-2-paragraph">The Big Five personality trait Neuroticism is about being balanced.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

