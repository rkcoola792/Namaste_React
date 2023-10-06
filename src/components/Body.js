import { RestaurantCard } from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body=()=>{
    
    const [resList,setResList]=useState([]);
    const [searchList,setSearchList]=useState("");
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const onlineStatus=useOnlineStatus();


    
    useEffect(()=>{
        fetchData();
           
    },[])
    console.log("resLis",resList)

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.606965&lng=77.072877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData= await data.json();
        const restArray= jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
       
        setResList(restArray)
        setfilteredRestaurant(restArray)
        console.log("resArray",restArray)
        console.log(restArray.map(ele=>ele.info.name))
    }


    if(onlineStatus===false)
    {return (<h1>Looks like you are offline, Please check your internnet connection</h1>);}

    if(resList.length===0){
    return <Shimmer></Shimmer>
}

    return(
        <div className="body">
        
        <div className="middle-components">
        
        <div className="search-container">
            <input type="text" value={searchList} onChange={(e)=>{setSearchList(e.target.value)}}></input>
            <button onClick={()=>{setfilteredRestaurant(resList.filter(ele=>ele.info.name.toLowerCase().includes(searchList.toLowerCase())))}}>Search</button>
        </div>
        
         <div className="filter"><button className="filter-btn" onClick={
            ()=>{setfilteredRestaurant(resList.filter(ele=>ele.info.avgRating>=4.4))}
         }>Top Rated Restaurants</button></div>
        </div>

         <div className="res-container">
         {filteredRestaurant.map(ele=>
         <Link to={"/restaurant/"+ele.info.id} key={ele.info.id}>
         <RestaurantCard  resData={ele.info}></RestaurantCard>
         </Link>
         )} 
       
        </div>
        </div>
    )
}

export default Body;
