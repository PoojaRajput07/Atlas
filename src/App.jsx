import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"

import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Country } from "./pages/Country"
import { Home } from "./pages/Home"
import { AppLayout } from "./pages/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { FlagDetails } from "./component/FlagDetails"


const Router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
    path:"about",
    element:<About/>
      },
     {
    path:"country",
    element:<Country/>
     },
     {
    path:"contact",
    element:<Contact/>
     },
     {
      path:"/country/:id",
      element:<FlagDetails/>
     }
     
  ]}
])
const App=()=>{
  return<RouterProvider router={Router}></RouterProvider>
}
export default App
