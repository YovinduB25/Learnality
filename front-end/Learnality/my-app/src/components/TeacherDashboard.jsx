import React, { useState, useEffect } from "react"
import "../TeacherDashboard.css";
import { Chart } from "react-google-charts";
import axios from 'axios';

const TeacherDashboard = () => {
    const [learn, setLearn] = useState({ visual: '', auditory: '', readingwriting: '', kinesthetic: '' });
    const [persona, setPersonality] = useState({ openness: '', agreeableness: '', conscientiousness: '', extroversion: '', neuroticism: '' });
    const [data, setData] = useState([]);
    const [isFetchingDone, setIsFetchingDone] = useState(false);

    const options = {
        title: "VARK Catergoriztion of Students",
        chartArea: { width: "89%" }
    };

    const getGraphs = () => {
        var config = {
            method: 'get',
            url: 'https://learnality-api.herokuapp.com/api/user/getDashboard?course=Computer Science',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setLearn({
                    visual: response.data.learning_style.Visual,
                    auditory: response.data.learning_style.Auditory,
                    readingwriting: response.data.learning_style.ReadingWriting,
                    kinesthetic: response.data.learning_style.Kinesthetic
                });
                setPersonality({
                    openness: response.data.personality.Openness,
                    agreeableness: response.data.personality.Agreeableness,
                    conscientiousness: response.data.personality.Conscientiousness,
                    extroversion: response.data.personality.Extroversion,
                    neuroticism: response.data.personality.Neuroticism
                });
                setIsFetchingDone(true)
            })
            .catch(function (error) {
                alert("Data for that learning style is not available");
                console.log(error);
            });
    };

    // isFetchingDone => false - loading
    // isFetchingDone => true and data = [] no data from server
    // isFetchingDone => true and data = [{}] display on chart.

    useEffect(() => {
        if (isFetchingDone) {
            let finalData = [
                ["Task", "Hours per Day"],
                ["Visionary", parseInt(`${learn.visual}`)],
                ["Auditory", parseInt(`${learn.auditory}`)],
                ["Reading/Writing", parseInt(`${learn.readingwriting}`)],
                ["Kinestetic", parseInt(`${learn.kinesthetic}`)]
            ]
            setData(finalData);
        }
    }, [isFetchingDone])

    useEffect(() => {
        getGraphs();
    }, [])

    useEffect(() => {
        console.log("data:", data)
    }, [data])

    return (
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
        <div>
            {!isFetchingDone ? (
                <>
                    <p>loading...</p>
                </>
            ) : (
                data.length === 0 ? (
                    <p>no data present</p>

                ) : (
                    <div className="pie-chart">
                        {console.log(data)}
                         <Chart
                           chartType="PieChart"
                            data={data}
                            options={options}
                             width={"100%"}
                            height={"400px"}
                         />
                    </div>
                )
            )}
        </div>
    )
}

export default TeacherDashboard;