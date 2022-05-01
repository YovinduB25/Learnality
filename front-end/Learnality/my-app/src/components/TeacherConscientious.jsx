import React from "react";
import { Link } from "react-router-dom"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import article1 from "../images/LearnerPages/image3.jpg"
import article2 from "../images/LearnerPages/article-2.jpg"
import "../PersonalityTraits.css";

export class TeacherConscientiousness extends React.Component{
    render(){
        return(
            <div className="conscientiousness">
               <div className="sidebar">
                   <TeacherSideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You have a Conscientiousness Personality!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="personality-detail-container">
                            <h4 className="personality-detail-heading">What is Conscientiousness Personality?</h4>
                             <p>Conscientiousness is a fundamental personality trait—one of the Big Five—that reflects the
                                tendency to be responsible, organized, hard-working, goal-directed, and to adhere to norms and
                                rules. Like the other core personality factors, it has multiple facets; conscientiousness comprises
                                self-control, industriousness, responsibility, and reliability.<br/><br/><br/>
                                A conscientious person is good at self-regulation and impulse control. This trait influences
                                whether you will set and keep long-range goals, deliberate over choices, behave cautiously or
                                impulsively, and take obligations to others seriously. (The other Big Five personality traits
                                are extraversion, agreeableness, openness, and neuroticism.) Conscientiousness is generally a
                                key ingredient for success—in love as well as work. It's also a major predictor of health, wellbeing, and longevity.
                             </p>

                            <div className="personality-list">
                                <h6 className="personality-detail-two-heading">Characteristics</h6>
                                <ul>
                                    <li>Good at coming up with new ideas.</li>
                                    <li>Often think about the deeper meaning of things.</li>
                                    <li>Curious about how things work.</li>
                                    <li>Enjoy thinking about theoretical ideas. </li>
                                    <li>Many artistic hobbies. </li>
                                    <li>Have an active imagination.</li>
                                    <li>Appreciate being around diverse groups of people.</li>
                                    <li>Tend to daydream or get distracted by flights of fancy. </li>
                                    <li>Like going to cultural events, art museums, and poetry readings.</li>
                                </ul>
                            </div>
                            
                            
                       </div>

                       <div className="personality-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=JQERUgJEHIE"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                            </div>
                           

                       </div>

                       <div className="personality-game-reccomendation-container">
                            <h4 className="personality-game-heading">Related Articles</h4>

                            <a href="https://www.verywellmind.com/how-conscientiousness-affects-your-behavior-4843763">
                                <div className="game-one-container">
                                    <img src={article1} className="game1-pic"/>
                                    <h5 className="game-1-heading">Understanding How Conscientiousness Affects Your Behavior</h5>
                                    <p className="game-1-paragraph">People who score high in conscientiousness are diligent and hard-working. </p>
                                </div>
                            </a>

                            <a href="https://www.123test.com/personality-conscientiousness/">
                                <div className="game-two-container">
                                    <img src={article2} className="game2-pic"/>
                                    <h5 className="game-2-heading">What is Conscientiousness?</h5>
                                    <p className="game-2-paragraph">The Big Five personality trait Conscientiousness is about a high level of self-discipline.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

