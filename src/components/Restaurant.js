import { useEffect, useState } from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const RestaurantCard=({resData})=>{

    const {name,avgRating,costForTwo,sla,cloudinaryImageId}=resData;  
    
    return (
          <div  className="res-card"><Link to="/restaurant/"></Link>
          
        
        <img className="res-logo" src={CLOUDINARY_URL+cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} stars</h4>
          <h4>{sla.deliveryTime} mins</h4>
          <h4>{costForTwo} </h4>
          
          </div>
      )
  }
  