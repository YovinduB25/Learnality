import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import { FaBookReader } from "react-icons/fa"
import { FaBrain } from "react-icons/fa"
import { FiRepeat } from "react-icons/fi"
import "../dashboard.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';
const attempts = localStorage.getItem('attempts') || 0;

export default function Dashboard(){

    const [data, setData] = useState({degree: '', learning: '', personality: '', loaded: false});

    const [learn, setLearn] = useState({learning: '', loaded: false});

    const [persona, setPersona] = useState({personality: '', loaded: false});

    const makeRequest = () => {

        var data = '';
        var config = {
            method: 'get',
            url: 'https://learnality-api.herokuapp.com/api/user/find?id=' + userId,
            headers: { },
            data : data
        };

        axios(config)
        .then(function (response) {
            setData({
                degree: response.data.course,
                loaded: true
            });
            console.log(JSON.stringify(response.data)); 
        })
        .catch(function (error) {
            console.log(error);
            setData({loaded: true});
        });

    };

    const getLearningStyle = () => {
		var axios = require('axios');

		var config = {
			method: 'get',
			url: 'https://learnality-api.herokuapp.com/api/user/getLstyle?userId=' + userId,
			headers: { }
		};

		axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			setLearn({
                learning: response.data.learning_style,
                loaded: true
            });
		})
		.catch(function (error) {
            console.log(error);
            setLearn({loaded: true});
        });
	};

    // const getPersonalityTrait = () => {
	// 	var axios = require('axios');

	// 	var config = {
	// 		method: 'get',
	// 		url: 'https://learnality-api.herokuapp.com/api/user/getPersonality?userId=' + userId,
	// 		headers: { }
	// 	};

	// 	axios(config)
	// 	.then(function (response) {
	// 		console.log(JSON.stringify(response.data));
	// 		setPersona({
    //             personality: response.data.personality_trait,
    //             loaded: true
    //         });
	// 	})
	// 	.catch(function (error) {
    //         console.log(error);
    //         setPersona({loaded: true});
    //     });
	// };

    if(!data.loaded){
        makeRequest();
        getLearningStyle();
        // getPersonalityTrait();
    }

    const [counter, setCounter] = useState(0);
    const [hasCountLoaded, setCountLoaded] = useState(false);

    if(!hasCountLoaded){
        setCounter(attempts);
        setCountLoaded(true);
    }

    //setCounter(attempts);

    const handleClick = () => {
        
    }
        return(
            <div className="dashboard">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Dashboard</h1>
                   <div className="icon-container">
                       
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                   </div>
                <div className="display-degree-container">
                    <p className="degree-heading">Degree : {data.degree}</p>
                </div>

                <div className="attempt-counter-container">
                    <span className="attempt-counter"> &nbsp;{counter}</span>
                    <p className="attempt-heading">Attempts</p>
                </div>

                <div className="retry-quiz-button">
                <Link to="/LearningStyleQuiz">
                    <button onClick={handleClick}><FiRepeat/>Retry Quiz</button>
                </Link>
                    
                </div>

                <div className="display-learning-style-type-container">
                    <div className="learner-type-icon"><FaBookReader/></div>
                    <p className="learner-type-heading">Type Of Learner</p>
                    <span className="learner-type-result">{learn.learning} Learner</span>
                </div>

                <div className="display-personality-style-type-container">
                    <div className="personality-type-icon"><FaBrain/></div>
                    <p className="personality-type-heading">Type Of Personality</p>
                    <span className="personality-type-result">{persona.personality}</span>
                </div>
               </div>
            </div>
        )
    
}