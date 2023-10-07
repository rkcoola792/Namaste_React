import { useEffect, useState } from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const RestaurantCard=({resData})=>{

    const {name,avgRating,costForTwo,sla,cloudinaryImageId}=resData;  
    
    return (
      <div className="bg-slate-100 m-4 p-4 w-[280] h-[400] hover:bg-slate-200 rounded-lg">
        <Link to="/restaurant/"></Link>

        <img
          className="w-[250] h-[250]"
          src={CLOUDINARY_URL + cloudinaryImageId}
        ></img>
        <div className="flex justify-between">
          {" "}
          <span className="font-semibold font-serif my-1" >{name}</span>
          <span className="font-semibold font-serif my-1" >{avgRating} ⭐</span>
        </div>

        <h4>{costForTwo} </h4>
        <h4 className="font-thin my-1 ">Delivery time { sla.deliveryTime} mins</h4>
      </div>
    );
  }

  
  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
      <div>
        <label className= "opacity-90 bg-black  text-gray-200 absolute   p-1 rounded-lg ">Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>);
    }
  }