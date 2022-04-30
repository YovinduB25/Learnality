// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { TeacherSideBar } from "../components/TeacherSideBar";
// import { CgProfile } from "react-icons/cg"
// import "../TeacherDashboard.css";
// import { Chart } from "react-google-charts";

// var axios = require('axios');

// const getTeacherDb = (course) => {

//     var config = {
//         method: 'get',
//         url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=' + course,
//         headers: {}
//     };

//     axios(config)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//             getGraphs();
//         })
//         .catch(function (error) {
//             alert("Data for that learning style is not available");
//             console.log(error);
//         });

// };

// // creating a use state for data 

// // export const data = [
// // ["Task", "Hours per Day"],
// // ["Visionary", {learn.visual}],
// // ["Auditory", 32/*{learn.auditory}*/],
// // ["Reading/Writing", 12/*{learn.readingwriting}*/],
// // ["Kinestetic", 24/*{learn.kinesthetic}*/]
// //   ];

// export const options = {
//     title: "VARK Catergoriztion of Students",
//     chartArea: { width: "89%" }
// };

// export const Bardata = [
//     ["Type of Personality ", "Density"],
//     ["Openness", 10/*{persona.openness}*/],
//     ["Conscientiousness", 20/*{persona.conscientiousness}*/],
//     ["Extraversion", 30/*{persona.extroversion}*/],
//     ["Agreeableness", 15/*{persona.agreeableness}*/],
//     ["Neuroticism", 34/*{persona.neuroticism}*/]
// ];

// export const baroptions = {
//     title: "Catergorization Of Personalities",
//     chartArea: { width: "80%" },
//     colors: ["#4169E1"],
//     hAxis: {
//         title: "Total Of Students",
//         minValue: 0
//     },
//     vAxis: {
//         title: "Type Of Personalities"
//     }
// };

// export default class TeacherDashboard extends React.Component {

//     render() {
//         const [learn, setLearn] = useState({ visual: '', auditory: '', readingwriting: '', kinesthetic: '' });
//         const [persona, setPersonality] = useState({ openness: '', agreeableness: '', conscientiousness: '', extroversion: '', neuroticism: '' });
//         const [data, setData] = useState([]);
//         const [isFetchingDone, setIsFetchingDone] = useState(false);

//         const getGraphs = () => {
//             var config = {
//                 method: 'get',
//                 url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=' + course,
//                 headers: {}
//             };

//             axios(config)
//                 .then(function (response) {
//                     console.log(JSON.stringify(response.data));
//                     setLearn({
//                         visual: response.data.learning_style.Visual,
//                         auditory: response.data.learning_style.Auditory,
//                         readingwriting: response.data.learning_style.ReadingWriting,
//                         kinesthetic: response.data.learning_style.Kinesthetic
//                     });
//                     setPersonality({
//                         openness: response.data.personality.Openness,
//                         agreeableness: response.data.personality.Agreeableness,
//                         conscientiousness: response.data.personality.Conscientiousness,
//                         extroversion: response.data.personality.Extroversion,
//                         neuroticism: response.data.personality.Neuroticism
//                     });
//                     setIsFetchingDone(true)
//                 })
//                 .catch(function (error) {
//                     alert("Data for that learning style is not available");
//                     console.log(error);
//                 });
//         };

//         useEffect(() => {
//             if (isFetchingDone) {
//                 let finalData = [
//                     ["Task", "Hours per Day"],
//                     ["Visionary", `${learn.visual}`],
//                     ["Auditory", `${learn.auditory}`],
//                     ["Reading/Writing", `${learn.readingwriting}`],
//                     ["Kinestetic", `${learn.kinesthetic}`]
//                 ]
//                 setData(finalData);
//                 console.log("final data", finalData)
//             }
//         }, [isFetchingDone])

//         useEffect(() => {
//             getGraphs();
//         }, [])


        // // https://stackoverflow.com/questions/67030873/refresh-the-page-only-once-in-react-class-component
        // const reloadCount = sessionStorage.getItem('reloadCount');
        // if (reloadCount < 2) {
        //     sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        //     window.location.reload();
        // } else {
        //     sessionStorage.removeItem('reloadCount');
        // }

//         return (
            // <div className="dashboard">
            //     <div className="sidebar">
            //         <TeacherSideBar />
            //     </div>

            //     <div class="center-container">
            //         <h1 className="center-container-main-heading">Dashboard</h1>
            //         <div className="icon-container">

            //             <div className="profile">
            //                 <Link to="/TeacherViewProfile" className="ProfileLink"><CgProfile /></Link>
            //             </div>
            //         </div>

            //         <div className="select-student-degree">
            //             <select name="select-course" id="course-dropdown-list" onChange={e => getTeacherDb(e.target.value)}>
            //                 <option value="" selected disabled >Select Teaching Course</option>
            //                 <option value="Software Engineering">BEng (Hons) Software Engineering</option>
            //                 <option value="Computer Science">BSc (Hons) Computer Science</option>
            //                 <option value="Artificial Intelligence and Data Science">BEng (Hons) Artificial Intelligence and Data Science</option>
            //                 <option value="Business Infomation Systems">BSc (Hons) Business Infomation Systems</option>
            //                 <option value="Business Management">BA (Hons) Business Management</option>
            //                 <option value="Business Data Analytics">BSc (Hons) Business Data Analytics</option>
            //             </select>
            //         </div>

            //         <div className="pie-chart">
            //             <Chart
            //                 chartType="PieChart"
            //                 data={data}
            //                 options={options}
            //                 width={"100%"}
            //                 height={"400px"}
            //             />
            //         </div>

            //         <div className="bargraph">
            //             <Chart
            //                 chartType="BarChart"
            //                 width="120%"
            //                 height="400px"
            //                 data={Bardata}
            //                 options={baroptions}
            //             />
            //         </div>

            //     </div>
            // </div>
//         )
//     }


// }