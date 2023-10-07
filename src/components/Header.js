import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus"

export const Header = () => {

const onlineStatus=useOnlineStatus();



console.log("Online status",onlineStatus)

  const [login, setLogin]=useState("Login");
  
    return (
      <div className="flex justify-between bg-slate-100 h-28 shadow-lg">
        <div className="w-24 m-2" >
        <img className="logo" src={LOGO_URL}></img>
        </div>
        
        <div className="">
          <ul className="flex p-5 m-5 ">
              <li className="my-2 mx-5">Online Status {onlineStatus?"🟢":"🔴"} </li>
              <li className="my-2 mx-5 hover:text-gray-500 "><Link to="/"> Home</Link></li>
              <li className="my-2 mx-5 hover:text-gray-500 "><Link to="/about">About</Link></li>
              <li className="my-2 mx-5 hover:text-gray-500 "><Link to="/contact">Contact</Link></li>
              <li className="my-2 mx-5 hover:text-gray-500 ">Cart</li>
              <button  className="my-2 mx-5 hover:text-gray-500" onClick={()=>{login==="Login"?setLogin("Logout"):setLogin("Login")}}>{login}</button>    
          </ul>
          
        </div>
      </div>
    )
  }