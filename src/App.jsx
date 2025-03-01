import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/signup"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
