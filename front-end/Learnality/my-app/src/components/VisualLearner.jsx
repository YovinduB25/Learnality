import React from "react";
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"

export class VisualLearner extends React.Component{
    render(){
        return(
            <div className="visual-learner">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">You are a Visual Learner!</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
