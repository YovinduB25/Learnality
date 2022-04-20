import React from "react"
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import "../TeacherDashboard.css";
import { Chart } from "react-google-charts";

// getTeacherDb();

const getTeacherDb = () => {

    alert("Loading...");

    const userId = localStorage.getItem('userId') || '';

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?userId=' + userId,
        headers: { }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

};

getTeacherDb();

export const data = [
    ["Task", "Hours per Day"],
    ["Visionary", 20],
    ["Auditory", 13],
    ["Reading/Writing", 24],
    ["Kinestetic", 12],
    
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
                           <select name="select-course" id="course-dropdown-list"> 
                               <option value="display-course" selected disabled >Select Teaching Course</option>
                               <option value="SE">BEng (Hons) Software Engineering</option>
                               <option value="CS">BSc (Hons) Computer Science</option>
                               <option value="AL/DS">BEng (Hons) Artificial Intelligence and Data Science</option>
                               <option value="BIS">BSc (Hons) Business Infomation Systems</option>
                               <option value="BM">BA (Hons) Business Management</option>
                               <option value="BDA">BSc (Hons) Business Data Analytics</option>
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