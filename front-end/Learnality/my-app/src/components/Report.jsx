import React from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import "../report.css";

export class Report extends React.Component{
    render(){
        return(
            <div className="settings">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Report</h1>
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