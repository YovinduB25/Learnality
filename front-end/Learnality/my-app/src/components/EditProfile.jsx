import React from "react"
import { Link } from "react-router-dom"
import { SideBar } from "./SideBar";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import "../settings.css";

export class EditProfile extends React.Component{
    render(){
        return(
            <div className="Profile">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Edit Profile</h1>
                   <div className="icon-container">
                       <div className="notifications">
                           <IoMdNotificationsOutline/>
                       </div>

                       <div className="profile">
                            <CgProfile/>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}