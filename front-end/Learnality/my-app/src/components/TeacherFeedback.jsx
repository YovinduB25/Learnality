import React from "react"
import { Link } from "react-router-dom"
import "../TeacherFeedback.css";
import { CgProfile } from "react-icons/cg";
import { TeacherSideBar } from "../components/TeacherSideBar";
import Slideshow  from "../components/Slideshow";
import TeacherReportImage from "../images/TeacherFeedbackPage/TeacherReport.gif";


export class TeacherFeedback extends React.Component{
    render(){
        return(
            <div className="Teacher-feedback">
                <div className="sidebar">
                    <TeacherSideBar/>
                </div>

                <div className="center-container">
                    <h1 className="center-container-main-heading">Feedback Portal</h1>
                    <div className="icon-container">
                       <div className="profile">
                            <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>

                       <div className="Teacher-report-container">
                           <img src={TeacherReportImage} className="Teacher-report-image"/>
                           <div className="report-overlay">
                                <div className="report-text">
                                    View Teacher's Report for Learning Style and Perosnality Trait Identification
                                    <div className="report-text-link">
                                        <Link to="/TeacherReport" className="teacher-report-button">
                                            <button>Show Report</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>  
                        </div>  

                        <div className="Learning-style-slider">
                            <Slideshow/>
                        </div>

                        <div className="learning-style-article-container">
                            <h4 className="article-main-heading">Recent&nbsp;Blogs</h4>
                            <div className="article-container">
                                <div className="item1">
                                    <h6>Visual Learners: Teacher Tips for Visual Learning Style</h6>
                                    <div className="blog-one-overlay">
                                       <div className="blog-one-text">
                                           <p>Find out how to recognize students who identify as visual learners and learn these proven strategies </p>
                                           <div className="blog-one-text-link">
                                                <a href="https://sphero.com/blogs/news/visual-learner" className="blog-one-button">
                                                    <button>Read&nbsp;more</button>
                                                </a>
                                           </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="item2">
                                    <h6>Auditory Learners: Teacher Tips for Auditory Learning Style</h6>
                                    <div className="blog-two-overlay">
                                       <div className="blog-two-text">
                                           <p>Find out the key traits that characterize auditory learners, along with tips and activities that will engage them in learning.</p>
                                           <div className="blog-two-text-link">
                                                <a href="https://sphero.com/blogs/news/auditory-learners" className="blog-two-button">
                                                    <button>Read&nbsp;more</button>
                                                </a>
                                           </div>
                                        </div>
                                    </div> 
                                   
                                </div>
                                <div className="item3">
                                    <h6>Reading/Writing Learners: Teacher Tips for Auditory Learning Style</h6>
                                    <div className="blog-three-overlay">
                                       <div className="blog-three-text">
                                           <p>Everyone absorbs and processes information differently. If you're a read / write learner, click here for some tips on how to study!</p>
                                           <div className="blog-three-text-link">
                                                <a href="https://www.collegeraptor.com/find-colleges/articles/tips-tools-advice/study-youre-readingwriting-learner/" className="blog-three-button">
                                                    <button>Read&nbsp;more</button>
                                                </a>
                                           </div>
                                        </div>
                                    </div> 
                                   
                                </div>
                                <div className="item4">
                                    <h6>Kinestetic Learners: Teacher Tips for Kinestetic Learning Style</h6>
                                    <div className="blog-four-overlay">
                                       <div className="blog-four-text">
                                           <p>Everyone processes information differently. If you're a kinestetic learner, click here for some tips on how to study!</p>
                                           <div className="blog-four-text-link">
                                                <a href="https://www.brighthubeducation.com/teaching-methods-tips/128403-teaching-kinesthetic-learners/" className="blog-four-button">
                                                    <button>Read&nbsp;more</button>
                                                </a>
                                           </div>
                                        </div>
                                    </div> 
                                   
                                </div>
                            </div>
                        </div>


                   </div>
                </div>
            </div>
        )
    }
}