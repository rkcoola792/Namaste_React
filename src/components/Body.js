import { RestaurantCard } from "./Restaurant";
import { apiData } from "../utils/mockData";

export const Body=()=>{
    // console.log(apiData.map(res=>res.resName))
    return(
        <div className="body">
         <div className="search-bar">Search</div>
         <div className="res-container">
         
         {apiData.map((restaurant,index)=><RestaurantCard key={index} resData={restaurant}></RestaurantCard>
         )} 
       
        </div>
        </div>
    )
}

export default Body;
