
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/auth/signup"
import Login from "./pages/auth/Login"
import Home from "./pages/home/Home"
import SearchBar from "./components/SearchBar"

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

