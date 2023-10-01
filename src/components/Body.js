import { RestaurantCard } from "./Restaurant";
import { apiData } from "../utils/mockData";
import { useEffect, useState } from "react";

export const Body=()=>{
    // console.log(apiData.map(res=>res.resName))
    const [resList,setResList]=useState([]);

    useEffect(()=>{
        fetchData();
           
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.606965&lng=77.072877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData= await data.json();
        const restArray= jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
       
        setResList(restArray)
        console.log("resArray",restArray)
        console.log(restArray.map(ele=>ele.info.name))
    }
    
    return(
        <div className="body">
         <div className="filter"><button className="filter-btn" onClick={
            ()=>{setResList(resList.filter(ele=>ele.info.avgRating>=4.4))}
         }>Top Rated Restaurants</button></div>
         <div className="res-container">
         
         {resList.map((ele,index)=><RestaurantCard key={index} resData={ele.info}></RestaurantCard>
         )} 
       
        </div>
        </div>
    )
}

export default Body;
