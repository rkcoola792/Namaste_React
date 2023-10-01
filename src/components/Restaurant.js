import { CLOUDINARY_URL } from "../utils/constants";
export const RestaurantCard=({resData})=>{
  
    const {name,avgRating,costForTwo,sla,cloudinaryImageId}=resData;  
    // console.log(CLOUDINARY_URL+cloudinaryImageId)
    return (
          <div className="res-card">
          
        
        <img className="res-logo" src={CLOUDINARY_URL+cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{avgRating} stars</h4>
          <h4>{sla.deliveryTime} mins</h4>
          <h4>{costForTwo} </h4>
          
          </div>
      )
  }
  