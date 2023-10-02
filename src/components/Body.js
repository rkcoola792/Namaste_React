import { RestaurantCard } from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body=()=>{
    
    const [resList,setResList]=useState([]);
    const [searchList,setSearchList]=useState("");
    
    useEffect(()=>{
        fetchData();
           
    },[])
    console.log("resLis",resList)

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.606965&lng=77.072877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData= await data.json();
        const restArray= jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
       
        setResList(restArray)
        console.log("resArray",restArray)
        console.log(restArray.map(ele=>ele.info.name))
    }
if(resList.length===0){
    return <Shimmer></Shimmer>
}
    return(
        <div className="body">
        
        <div className="middle-components">
        
        <div className="search-container">
            <input type="text" value={searchList} onChange={(e)=>{setSearchList(e.target.value)}}></input>
            <button onClick={()=>{setResList(resList.filter(ele=>ele.info.name.toLowerCase().includes(searchList.toLowerCase())))}}>Search</button>
        </div>
        
         <div className="filter"><button className="filter-btn" onClick={
            ()=>{setResList(resList.filter(ele=>ele.info.avgRating>=4.4))}
         }>Top Rated Restaurants</button></div>
        </div>

         <div className="res-container">
         {resList.map((ele,index)=><RestaurantCard key={index} resData={ele.info}></RestaurantCard>
         )} 
       
        </div>
        </div>
    )
}

export default Body;
