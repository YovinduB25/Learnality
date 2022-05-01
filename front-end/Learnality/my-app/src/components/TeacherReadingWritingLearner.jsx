import React from "react";
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ReactPlayer from "react-player";
import cat from "../images/LearnerPages/synonym-antonym.png"
import circles from "../images/LearnerPages/word-combinator.png"
import "../LearningStyle.css";

export class TeacherReadingWritingLearner extends React.Component{
    render(){
        return(
            <div className="reading-writing-learner">
               <div className="sidebar">
                   <TeacherSideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You are a Reading/Writing Learner!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="learner-detail-container">
                            <h4 className="learner-detail-heading">What is a Reading/Writing Learner?</h4>
                             <p> The reading/writing learner is sometimes thought of as a sub-type of visual learner. These learners find writing, reading articles, and taking notes to be most helpful when learning. If you find that you understand and retain information better once you have written it down, you are likely to be a reading/writing learner.
                                 You can capitalize on this learning style by writing discussion board posts in your courses, reading from your textbooks or notes, and writing down definitions. Many times reading and writing learners find it helpful to write down concepts multiple times in order to grasp and retain new information.</p>

                            <h6 className="learner-detail-two-heading">Learning strategies</h6>
                            <ul>
                                <li>Rewrite information into your own words</li>
                                <li>Translate visual aids such as charts and diagrams into words</li>
                                <li>Keep handouts and read websites and books</li>
                                <li>Tend to write very detailed notes</li>
                                <li>Rewrite and/or reread your notes</li>
                                
                            </ul>
                            
                       </div>

                       <div className="learner-recommendation-video-container">
                            <div className="recommended-video">
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=I8yNIgFBuP8"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />

                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=DFYYquMO2mU"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=VwIaqm6icpc"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                                
                                <ReactPlayer
                                        url="https://www.youtube.com/watch?v=dJsyoKpGQrc"
                                        width="430px"
                                        height="290px"
                                        controls
                                    
                                />
                            </div>
                           

                       </div>

                       <div className="learner-game-reccomendation-container">
                            <h4 className="learner-game-heading">Learning Style Improving Excercises</h4>
                            <a href="https://www.mentalup.co/samples/game/game41?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-five-container">
                                    <img src={cat} alt="" className="game5-pic"/>
                                    <h5 className="game-1-heading">Synonym Antonym</h5>
                                    <p className="game-1-paragraph">Get some handy language practice with this fun online game that tests your verbal fluency skills.</p>
                                </div>
                            </a>

                            <a href="https://www.mentalup.co/samples/game/game44?referrer=blog-what-is-emotional-intelligence&page=desktop">
                                <div className="game-six-container">
                                    <img src={ circles } alt="" className="game6-pic"/>
                                    <h5 className="game-2-heading">Word Combinator</h5>
                                    <p className="game-2-paragraph">This word game is a fun way to learn more about your kid’s skills. It’s also reinforces spelling and vocabulary skills.</p>
                                </div>
                            </a>    
                       </div>

                       
                   </div>
               </div>
            </div>
        )
    }
}

