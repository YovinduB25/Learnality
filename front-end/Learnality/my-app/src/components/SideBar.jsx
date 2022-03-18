import React from 'react'
import { Link } from "react-router-dom"
import "../sidebar.css";
import Logo from "../images/logo.png"
import { BiHomeAlt } from "react-icons/bi"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { FiSettings } from "react-icons/fi"
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
                    <ul class="nav-list">
                        <li>
                            <Link to="/Home" className='sidebar-text'>
                                <span class="sidebar-icon"><BiHomeAlt/></span>
                                <span class="sidebar-link">Home</span>
                            </Link>
                        </li>

            

                        <li>
                            <Link to="/Dashboard" className='sidebar-text'>
                                <span class="sidebar-icon"><MdOutlineDashboardCustomize/></span>
                                <span class="sidebar-link">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Settings" className='sidebar-text'>
                                <span class="sidebar-icon"><FiSettings/></span>
                                <span class="sidebar-link">Settings</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Report" className='sidebar-text'>
                                <span class="sidebar-icon"><HiOutlineDocumentText/></span>
                                <span class="sidebar-link">Report</span>
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