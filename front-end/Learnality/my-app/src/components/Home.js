import React from "react"
import { Link } from "react-router-dom"
import { SideMenu } from "../components/SideMenu"
import "../home.css";

export class Home extends React.Component{
    render(){
        return(
            <div className="home">
               <div className="SideBar">
                   <SideMenu/>
               </div>
            </div>
        )
    }
}