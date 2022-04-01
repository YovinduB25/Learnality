import React from "react"
import { Link } from "react-router-dom"
import { TeacherSideBar } from "./TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import ViewProfile  from "../images/ViewProfile.jpg"
import "../ViewProfile.css";

export class TeacherViewProfile extends React.Component{
    render(){
        return(
            <div className="Profile">
                <div className="sidebar">
                   <TeacherSideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">View Profile</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <CgProfile/>
                       </div>
                   </div>


                    <div className="ViewProfilePic">
                        <img src={ViewProfile} alt="ViewProfilePic"/>
                    </div>
                   <div className="view-info-container">
                      <p>Name :</p>
                      <p>Username :</p>
                      <p>Teaching Degree :</p>
                   </div>
               </div>
            </div>
        )
    }
}