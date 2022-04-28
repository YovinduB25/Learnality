import React  from 'react';
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import   StudentSignIn  from "./components/StudentSignIn"
import  StudentSignUp  from "./components/StudentSignUp"
import   TeacherSignIn  from "./components/TeacherSignIn"
import TeacherSignUp  from "./components/TeacherSignUp"
import { Home } from "./components/Home"
import { TeacherHome } from "./components/TeacherHome"
import { ResetPassword } from "./components/ResetPassword"
import  TeacherEditProfile  from "./components/TeacherEditProfile"
import  TeacherDashboard  from "./components/TeacherDashboard"
import  Dashboard  from "./components/Dashboard"
import Report from "./components/Report"
import TeacherReport from "./components/TeacherReport"
import LearningStyleQuiz  from "./components/LearningStyleQuiz"
import { MainSignUp } from "./components/MainSignUp"
import { TeacherResetPassword } from "./components/TeacherResetPassword"
import  TeacherViewProfile  from "./components/TeacherViewProfile"
import  StudentViewProfile  from "./components/StudentViewProfile"
import  StudentEditProfile  from "./components/StudentEditProfile"
import  TeacherLearningStyleQuiz from "./components/TeacherLearningStyle"
import { TeacherFeedback } from "./components/TeacherFeedback"
import { VisualLearner } from "./components/VisualLearner"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/MainSignUp' element={<MainSignUp/>} />
        <Route path="/StudentSignIn" element={<StudentSignIn/>} />
        <Route path="/StudentSignUp" element={<StudentSignUp/>} />
        <Route path="/TeacherSignIn" element={<TeacherSignIn/>} />
        <Route path="/TeacherSignUp" element={<TeacherSignUp/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/TeacherHome" element={<TeacherHome/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/TeacherResetPassword" element={<TeacherResetPassword/>}/>
        <Route path="/TeacherEditProfile" element={<TeacherEditProfile/>}/>
        <Route path="/StudentEditProfile" element={<StudentEditProfile/>}/>
        <Route path="/TeacherViewProfile" element={<TeacherViewProfile/>}/>
        <Route path="/StudentViewProfile" element={<StudentViewProfile/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/TeacherDashboard" element={<TeacherDashboard/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/TeacherReport" element={<TeacherReport/>}/>
        <Route path="/LearningStyleQuiz" element={<LearningStyleQuiz/>}/>
        <Route path="/TeacherLearningStyleQuiz" element={<TeacherLearningStyleQuiz/>}/>
        <Route path="/TeacherFeedback" element={<TeacherFeedback/>}/>
        <Route path="/VisualLearner" element={<VisualLearner/>}/>
      </Routes>
    </div>
  );
}

export default App;
