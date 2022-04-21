import React from "react"
import { Link } from "react-router-dom"
import { TeacherSideBar } from "../components/TeacherSideBar";
import { CgProfile } from "react-icons/cg"
import "../TeacherDashboard.css";
import { Chart } from "react-google-charts";

// getTeacherDb();

const getTeacherDb = (course) => {

    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=' + course,
        headers: { }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    alert("Data not available");
        console.log(error);
    });

};

export const data = [
    ["Learning Style", "No of Students"],
    ["Visionary", 20],
    ["Auditory", 13],
    ["Reading/Writing", 24],
    ["Kinestetic", 12],
    
  ];
  
export const options = {
    title: "VARK Catergoriztion of Students",
    chartArea: { width: "89%" }
};

export const Bardata = [
    ["Type of Personality ", "Density"],
    ["Openness", 38], 
    ["Conscientiousness", 10], 
    ["Extraversion", 19],
    ["Agreeableness", 21],
    ["Neuroticism", 20]
  ];
  
  export const baroptions = {
    title: "Catergorization Of Personalities",
    chartArea: { width: "80%" },
    colors: ["#4169E1"],
    hAxis: {
      title: "Total Of Students",
      minValue: 0
    },
    vAxis: {
      title: "Type Of Personalities"
    }
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

                   
    
                   
                   <div className="pie-chart">
                        <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                        />
                    </div>
                        
                    <div className="bargraph">
                    <Chart
                        chartType="BarChart"
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