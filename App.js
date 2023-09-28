import React from "react"
import ReactDOM from "react-dom/client"

// // header
//  --logo
//  -- nav links

//  Body
//   search bar
//   restraurant container  
//   restaurant card

//   footer 
//   copyright 
//   links
//   address
//   email




const Header = () => {
  return (
    <div className="header">
      
      <div className="logo-container">
      <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"></img>
      </div>
      
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard=()=>{
    return (
        <div className="res-card">
        <h3>KC</h3>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
         <div className="search-bar">Search</div>
         <div className="res-container"><RestaurantCard></RestaurantCard></div>
        </div>
    )
}



const Footer = () => {
  return (
    <div>
   <h3>Footer</h3> 
    </div>
  )
}

const AppLayout=()=>{
    return(
        <div className="app" >
          <Header></Header>
          <Body></Body>
          <Footer></Footer>  
        </div>
      )
    }
     


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>);