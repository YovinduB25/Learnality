import React from "react"
import { Link } from "react-router-dom"
import "../home.css";
import { CgProfile } from "react-icons/cg"
import LearningStylePic from "../images/HomePage/LearningStylePic.png";
import { SideBar } from "../components/SideBar";

export class Home extends React.Component{

    componentDidMount() {
        
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"1903feb6bdd7ce29e3a1447976193ff7","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
          
}
    render(){

        // https://stackoverflow.com/questions/67030873/refresh-the-page-only-once-in-react-class-component
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 2) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloadCount');
        }

        return(
            <div className="home">
               <div className="sidebar">
                   <SideBar/>
               </div>
               <div className="center-container">
                   <h1 className="center-container-main-heading">Home</h1>
                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>
                   <h2 className="choose-option-heading">Find your best study approach by attempting these following quiz</h2>
                   
                   <div className="learning-style-quiz-container">
                        <h3 className="learning-style-quiz-heading">Identify Your Learning Style and Personality Type</h3>
                        <img src={LearningStylePic} alt="LearningStylePic"/>
                        <div className="overlay">
                            <div className="overlay-text">Attempt Learning Style and Personality Style Identification Quiz</div>
                            <div className="overlay-link">
                            <button>
                                <Link to="/LearningStyleQuiz" className="learning-style-button">Start Quiz</Link>
                            </button>
                            </div>
                        </div>
                   </div>
                   


               </div>
            </div>
        )
    }
}