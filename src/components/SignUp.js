import { useState } from "react"

export const SignUp=()=>{
 const [firstName, setFirstName]=useState("");
 const [lastName, setLastName]=useState("");
 const [fullName, setFullName]=useState("");
 
//  const handleChange=(e)=>{
//      setFirstName(e.target.firstName)
//      console.log(e.target.value)

//  }
 
 return(
        <div>
        
           
           <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
           <input type="text" placeholder="Enter Last Name" onChange={(e)=>{setLastName(e.target.value)}}></input>
           <button type="submit" onClick={()=>{setFullName(firstName+lastName);setFirstName("");setLastName("")}}> Submit</button>

           <h1>hey {fullName}</h1>

        
        </div>
        
    )
}