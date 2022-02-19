import React from "react"
import { Link } from "react-router-dom"
import "../home.css";

export class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="home-container">
                    <h1>This is a home page</h1>
                </div>
            </div>
        )
    }
}