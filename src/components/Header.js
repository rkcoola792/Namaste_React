import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
export const Header = () => {

  const [login, setLogin]=useState("Login");
 console.log("setLoginFunction",setLogin)
    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        </div>
        
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button onClick={()=>{login==="Login"?setLogin("Logout"):setLogin("Login")}}>{login}</button>    
              {/* <button onClick={setLogin(()=>!login)}>{login}</button> */}
          </ul>
          
        </div>
      </div>
    )
  }