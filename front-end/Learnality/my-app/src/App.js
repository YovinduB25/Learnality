import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import  { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"
import { Home } from "./components/Home"
import { ResetPassword } from "./components/ResetPassword"
import { Settings } from "./components/Settings"
import { Dashboard } from "./components/Dashboard"
import { Report } from "./components/Report"
import LearningStyleQuiz  from "./components/LearningStyleQuiz"
import PersonalityStyleQuiz from "./components/PersonalityStyleQuiz"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/LearningStyleQuiz" element={<LearningStyleQuiz/>}/>
        <Route path="/PersonalityStyleQuiz" element={<PersonalityStyleQuiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
