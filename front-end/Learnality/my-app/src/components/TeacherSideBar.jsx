import React from 'react'
import { Link } from "react-router-dom"
import "../sidebar.css";
import Logo from "../images/logo.png"
import { BiHomeAlt } from "react-icons/bi"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { FaUserEdit } from "react-icons/fa"
import { HiOutlineLogin } from "react-icons/hi"
import { CgFeed } from "react-icons/cg"



export class TeacherSideBar extends React.Component{
    render(){
        return(
            <div className="sidebar-container">
                <div className="logo-container">
                    <img src={Logo} alt="logo"/>
                    <h1 className="label-name">Learnality</h1>
                </div>

                <div className="link-container">
                    <ul class="nav-list">
                        <li>
                            <Link to="/TeacherHome" className='sidebar-text'>
                                <span class="sidebar-icon"><BiHomeAlt/></span>
                                <span class="sidebar-link">Home</span>
                            </Link>
                        </li>

            

                        <li>
                            <Link to="/TeacherDashboard" className='sidebar-text'>
                                <span class="sidebar-icon"><MdOutlineDashboardCustomize/></span>
                                <span class="sidebar-link">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/TeacherEditProfile" className='sidebar-text'>
                                <span class="sidebar-icon"><FaUserEdit/></span>
                                <span class="sidebar-link">Edit Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/TeacherFeedback" className='sidebar-text'>
                                <span class="sidebar-icon"><CgFeed/></span>
                                <span class="sidebar-link">Feedback</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className='sidebar-text'>
                                <span class="sidebar-icon"><HiOutlineLogin/></span>

                                <span class="sidebar-link">Log Out</span>
                            </Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        )
    }
}