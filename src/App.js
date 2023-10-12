import React,{useContext, useEffect, useState,} from "react"
import ReactDOM from "react-dom/client"
import "/app.scss"
import { Header } from "./components/Header"
import Body from "./components/Body"
import { RouterProvider,Outlet, createBrowserRouter } from "react-router-dom"
import { About } from "./components/About"
import { ErrorPage } from "./components/ErrorPage"
import Contact from "./components/Contact"
import RestuarantMenuCard from "./components/RestuarantMenuCard"
import { SignUp } from "./components/SignUp"
import { UserContext } from "./utils/UserContext"


const AppLayout=()=>{
const [userName,setUserName]=useState();
  useEffect(()=>{
    //dummy api call 
    const userName={
      name:"Rajeev"
    }
    setUserName(userName.name)
  },[])
    return (
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>
    );
    }
    
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/restaurant/:resId",
        element:<RestuarantMenuCard></RestuarantMenuCard>
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      },
    ]
    }
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>);