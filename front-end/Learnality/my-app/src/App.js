import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"
import { resetPassword } from "./components/resetPassword"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/resetPassword" element={<resetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
