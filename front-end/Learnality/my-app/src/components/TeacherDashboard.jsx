import React, { useState } from "react"
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import "../TeacherDashboard.css";
import { Chart } from "react-google-charts";

var axios = require('axios');

// function getGraphs(){

//     const [learn, setLearn] = useState({visual: '', auditory: '', readingwriting: '', kinesthetic: ''});

//     const [persona, setPersonality] = useState({openness: '', agreeableness: '', conscientiousness: '', extroversion: '', neuroticism: ''});

//     var config = {
//         method: 'get',
//         url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=' + course,
//         headers: { }
//     };

//     axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         setLearn({
//             visual: response.data.learning_style.Visual,
//             auditory: response.data.learning_style.Auditory,
//             readingwriting: response.data.learning_style.ReadingWriting,
//             kinesthetic: response.data.learning_style.Kinesthetic
//         });
//         // setPersonality({
//         //     openness: response.data.personality.Openness,
//         //     agreeableness: response.data.personality.Agreeableness,
//         //     conscientiousness: response.data.personality.Conscientiousness,
//         //     extroversion: response.data.personality.Extroversion,
//         //     neuroticism: response.data.personality.Neuroticism
//         // });
//     })
//     .catch(function (error) {
//         alert("Data for that learning style is not available");
//         console.log(error);
//     });
// };

const getTeacherDb = (course) => {

    var config = {
        method: 'get',
        url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=' + course,
        headers: { }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        // getGraphs();
    })
    .catch(function (error) {
        alert("Data for that learning style is not available");
        console.log(error);
    });

};

export const data = [
    ["Task", "Hours per Day"],
    ["Visionary", 10 /*{learn.visual}*/],
    ["Auditory", 32/*{learn.auditory}*/],
    ["Reading/Writing", 12/*{learn.readingwriting}*/],
    ["Kinestetic", 24/*{learn.kinesthetic}*/]
  ];
  
export const options = {
    title: "VARK Catergoriztion of Students",
};

export const Bardata = [
    ["Type of Personality ", "Density", { role: "style" }],
    ["Openness", 8, "#b87333"], // RGB value
    ["Conscientiousness", 10, "silver"], // English color name
    ["Extraversion", 19, "gold"],
    ["Agreeableness", 21, "color: #e5e4e2"], // CSS-style declaration
    ["Neuroticism", 30, "color: #e5e4e2"], // CSS-style declaration
  ];
  
export const baroptions = {
    chart: {
      title: "Catergorization of Personalities Of Students",
    },
};

export default class TeacherDashboard extends React.Component{
        render(){
            return(
                <div className="dashboard">
                    <div className="sidebar">
                       <TeacherSideBar/>
                   </div>
    
                   <div class="center-container">
                   <h1 className="center-container-main-heading">Dashboard</h1>
                       <div className="icon-container">
                           
                           <div className="profile">
                                <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile/></Link>
                           </div>
                       </div>
                    
                    <div className="select-student-degree">
                           <select name="select-course" id="course-dropdown-list" onChange={e => getTeacherDb(e.target.value)}> 
                                <option value="" selected disabled >Select Teaching Course</option>
                                <option value="Software Engineering">BEng (Hons) Software Engineering</option>
                                <option value="Computer Science">BSc (Hons) Computer Science</option>
                                <option value="Artificial Intelligence and Data Science">BEng (Hons) Artificial Intelligence and Data Science</option>
                                <option value="Business Infomation Systems">BSc (Hons) Business Infomation Systems</option>
                                <option value="Business Management">BA (Hons) Business Management</option>
                                <option value="Business Data Analytics">BSc (Hons) Business Data Analytics</option>
                           </select> 
                    </div>

                   <div className="bargraph">
                        <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                        />
                    </div>
                        
                    <div className="pie-chart">
                        <Chart
                            chartType="Bar"
                            width="120%"
                            height="400px"
                            data={Bardata}
                            options={baroptions}
                        />
                    </div>
                   </div>
                </div>
            )
        }
       
    
}