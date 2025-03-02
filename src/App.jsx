
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from "./pages/auth/signup"
import Login from "./pages/auth/Login"
import Home from "./pages/home/Home"
import Layout from "./components/Layout/Layout"
import Profile from "./components/profile/Profile"
import SearchBar from "./components/search/SearchApi"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/home",
          element: <Home />
        },
        {
          path: "/search",
          element: <SearchBar />
        },
        {
          path: "/profile",
          element: <Profile/>
        }
      ]
    }
]);

function App() {
  return (

    <RouterProvider router={router} />    
  )
}

export default App