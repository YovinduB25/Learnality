import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBar } from "../components/SideBar";
import { CgProfile } from "react-icons/cg"
import { HiDownload } from "react-icons/hi"
import "../report.css";

var axios = require('axios');

const userId = localStorage.getItem('userId') || '';

export default function Report() {

    const [data, setData] = useState({name: '', gender: '', loaded: false});

    const [learn, setLearn] = useState({learning: '', loaded: false});

    const [persona, setPersona] = useState({personality: '', loaded: false});

    const [learnDescription, setLearnDesc] = useState(String);

    const [personaDescription, setPersonaDesc] = useState(String);


    //Learning style descriptions are defined here
    const learningStyleDescriptions = {
        'Visual' : "These learners learn by watching videos and images. In other words, I prefer graphic representations to text. They rely on the instructor's body language to help to understand. Also, write a descriptive note in the displayed information.",
        'Auditory':'These types of learners may gain data and knowledge by listening and reading loudly and may not be able to understand the written information.',
        'Reading/Writing' : 'They learn by reading and writing. They get information by reading books, memos, handouts, etc. In addition, they tend to rewrite their notes and quietly reread them over and over again to understand them.',
        'Kinesthetic' : 'These types of learners need to tackle the problem (practical experience). They tend to get tired of traditional lessons easily but enjoy sports and physical activity.'
    }

    const personalityTraitDescriptions = {
        'Openness':"This personality trait enhances a person's imagination and discernment. They tend to have a wide range of interests, which makes them more adventurous, creative, and eager to learn new things. People with a low level of this trait tend to dislike change, resist new ideas, lack a rich imagination, and do not enjoy new things.",
        'Conscientiousness':'This personality trait improves thoughtfulness, good impulse control, and goal-directed behavior. They tend to be organized, alert, take time to prepare, complete important tasks immediately, and enjoy a set schedule. People with low consciousness hate setting schedules, making riots, not returning things, and postponing important things.',
        'Extroversion': 'This personality trait is manifested in the fact that the person is very excited, sociable, talkative, and expresses a large number of emotions. People with a low level of this trait prefer loneliness, difficulty starting a conversation, do not like small talk, and be the center of attention. They are called introverts.',
        'Agreeableness':'This personality trait enhances the level of trust, tenderness, affection, and other prosocial behavior labeled. They tend to care about the interests of others, empathize with others, and enjoy helping and helping those in need. People with low traits tend to have little interest in others.',
        'Neuroticism' :'This personality trait makes people feel emotionally unstable, anxious, irritable, and sad. People with low traits tend to be emotionally stable and cope well with stress and sadness. A very relaxed spirit. '
    }

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
                name: response.data.fname,
                gender: response.data.gender,
                loaded: true
            });
            // console.log(JSON.stringify(response.data)); 
        })
        .catch(function (error) {
            // console.log(error);
            setData({loaded: true});
        });

    };

    const getLearnDesc = (style) => {
        if(learningStyleDescriptions[style] !== undefined){
            return learningStyleDescriptions[style];
        }
        return style;
    };

    const getPersonaDesc = (Trait) => {
        if(personalityTraitDescriptions[Trait]!==undefined){
            return personalityTraitDescriptions[Trait];
        }
        return Trait;
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
			// console.log(JSON.stringify(response.data));
			setLearn({
                learning: response.data.learning_style,
                loaded: true
            });
            setLearnDesc(getLearnDesc(response.data.learning_style));
		})
		.catch(function (error) {
            // console.log(error);
            setLearn({loaded: true});
        });
	};

    const getPersonalityTrait = () => {
		var axios = require('axios');

		var config = {
			method: 'get',
			url: 'https://learnality-api.herokuapp.com/api/user/getPersonality?userId=' + userId,
			headers: { }
		};

		axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			setPersona({
                personality: response.data.personality_trait,
                loaded: true
            });
            setPersonaDesc(getPersonaDesc(response.data.personality_trait));
		})
		.catch(function (error) {
            console.log(error);
            setPersona({loaded: true});
        });
	};

//     const printDiv = (divName) => {
//         var printContents = document.getElementById(divName).innerHTML;
//         var originalContents = document.body.innerHTML;
   
//         document.body.innerHTML = printContents;
   
//         window.print();
   
//         document.body.innerHTML = originalContents;
//    }

    if(!data.loaded){
        makeRequest();
        getLearningStyle();
        getPersonalityTrait();

    }

        return(
            <div className="dashboard">
                <div className="sidebar">
                   <SideBar/>
               </div>

               <div class="center-container">
               <h1 className="center-container-main-heading">Report</h1>

                {/* <div id="printableArea">
                  
                </div> */}


                   <div className="icon-container">
                       <div className="profile">
                            <Link to="/StudentViewProfile" className="ProfileLink"><CgProfile/></Link>
                       </div>
                    <div className="container-one" > 
                            <h3> Student Details</h3>
                            <p className="name-report"> <b>Name  &nbsp; &nbsp; &nbsp;:</b> &nbsp; {data.name}</p> 
                            <p className="gender-report"> <b>Gender  &nbsp; :</b> &nbsp; {data.gender}</p> 
                            <p className="learner-report"> <b>Type Of Learner :</b>  {learn.learning}</p> 
                            <p className="personality-report"> <b>Type Of Personality :</b> {persona.personality} </p>
                            <h3> Description </h3>
                            <p className="learning-report"> <b>{learn.learning} Learner </b>: {learnDescription}</p> 
                            <p className="personality-report"> <b>{persona.personality} Personality</b> : {personaDescription} </p> 
                        </div>
                   </div>

                  
                       
                   
                        {/* <button className="download-button" onClick="printDiv('printableArea')"><HiDownload/> Download</button> */}
                   <div className="container-two">
                        <h3> Description </h3>
                        <p className="visual-report"> {learn.learning} Learner :</p> 
                        <p className="openness-report">{persona.personality} Personality Trait :</p> 
                    </div>
                        <button className="download-button"><HiDownload/> Download</button>
               </div>
            </div>
        )
}
