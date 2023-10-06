import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus"

export const Header = () => {

const onlineStatus=useOnlineStatus();



console.log("Online status",onlineStatus)

  const [login, setLogin]=useState("Login");
  
    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        </div>
        
        <div className="nav-items">
          <ul>
              <li>Online Status {onlineStatus?"🟢":"🔴"}</li>
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>Cart</li>
              <button onClick={()=>{login==="Login"?setLogin("Logout"):setLogin("Login")}}>{login}</button>    
          </ul>
          
        </div>
      </div>
    )
  }