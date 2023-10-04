import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';
import Shimmer from './Shimmer';
const RestuarantMenuCard = () => {
    const {resId}=useParams();
    console.log("Param",resId)
    const [menuList,setMenuList]=useState([]);
  
    useEffect(()=>{
        fetchData();
      },[])
  
      const fetchData=async()=>{
        const menuList=await fetch(MENU_API_URL+resId);
        const jsonMenu= await menuList.json();
        const resMenuList=jsonMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
       
        // setMenuList(resMenuList);
        console.log("MenuList",resMenuList)
        setMenuList(resMenuList);
      }
  
    return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuList.length==0?<Shimmer></Shimmer>:menuList.map(ele=><li>{ele?.card?.info?.name}</li>)}
        
      </ul>
    </div>
  )
}

export default RestuarantMenuCard
