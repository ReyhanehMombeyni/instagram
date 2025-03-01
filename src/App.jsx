import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/signup"
import Home from "./pages/home/home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
