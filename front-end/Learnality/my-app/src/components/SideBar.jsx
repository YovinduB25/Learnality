import React from 'react'
import { Link } from "react-router-dom"
import "../sidebar.css";
import Logo from "../images/logo.png"
import { BiHomeAlt } from "react-icons/bi"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { FaUserEdit } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { HiOutlineLogin } from "react-icons/hi"



export class SideBar extends React.Component{
    render(){
        return(
            <div className="sidebar-container">
                <div className="logo-container">
                    <img src={Logo} alt="logo"/>
                    <h1 className="label-name">Learnality</h1>
                </div>

                <div className="link-container">
                    <ul className="nav-list">
                        <li>
                            <Link to="/Home" className='sidebar-text'>
                                <span className="sidebar-icon"><BiHomeAlt/></span>
                                <span className="sidebar-link">Home</span>
                            </Link>
                        </li>

            

                        <li>
                            <Link to="/Dashboard" className='sidebar-text'>
                                <span className="sidebar-icon"><MdOutlineDashboardCustomize/></span>
                                <span className="sidebar-link">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/StudentEditProfile" className='sidebar-text'>
                                <span className="sidebar-icon"><FaUserEdit/></span>
                                <span className="sidebar-link">Edit Profile</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Report" className='sidebar-text'>
                                <span className="sidebar-icon"><HiOutlineDocumentText/></span>
                                <span className="sidebar-link">Report</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className='sidebar-text'>
                                <span className="sidebar-icon"><HiOutlineLogin/></span>

                                <span className="sidebar-link">Log Out</span>
                            </Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        )
    }
}