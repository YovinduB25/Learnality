import React from "react"
import "../sideMenu.css";
import logo from "../images/logo.png";
import { GrHomeRounded } from 'react-icons/gr'
import {MdOutlineDashboardCustomize } from 'react-icons/md'


export class SideMenu extends React.Component{
    render(){
        
        return(
            <div className="side-menu">
                <div className="menu-heading">
                    <img src={logo}  alt="logo"/>
                    <h1>Learnality</h1>
                </div>

                <div className="sidebar-menu">
                    <GrHomeRounded/>
                    <MdOutlineDashboardCustomize/>
                </div>



            </div>
        )
    }
}
        
    


