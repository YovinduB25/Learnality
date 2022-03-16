import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"
import { Home } from "./components/Home"
import { ResetPassword } from "./components/ResetPassword"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
