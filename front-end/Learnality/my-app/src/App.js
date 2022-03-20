import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import  { StudentSignIn } from "./components/StudentSignIn"
import { StudentSignUp } from "./components/StudentSignUp"
import  { TeacherSignIn } from "./components/TeacherSignIn"
import { TeacherSignUp } from "./components/TeacherSignUp"
import { Home } from "./components/Home"
import { ResetPassword } from "./components/ResetPassword"
import { EditProfile } from "./components/EditProfile"
import { Dashboard } from "./components/Dashboard"
import { Report } from "./components/Report"
import LearningStyleQuiz  from "./components/LearningStyleQuiz"
import PersonalityStyleQuiz from "./components/PersonalityStyleQuiz"
import { MainSignUp } from "./components/MainSignUp"
import { TeacherResetPassword } from "./components/TeacherResetPassword"


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
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/TeacherResetPassword" element={<TeacherResetPassword/>}/>
        <Route path="/EditProfile" element={<EditProfile/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/LearningStyleQuiz" element={<LearningStyleQuiz/>}/>
        <Route path="/PersonalityStyleQuiz" element={<PersonalityStyleQuiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
