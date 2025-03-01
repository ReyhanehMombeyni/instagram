import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/off/signup"
import Login from "./pages/off/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
