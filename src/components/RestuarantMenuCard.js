import React from "react";
import { useState,  } from "react";
import { useParams } from "react-router-dom";
import AccordianMenu from "./AccordianMenu";
import Shimmer from "./Shimmer";
import { useFetchMenu } from "../utils/useFetchMenu";

const RestuarantMenuCard = () => {
  
  const { resId } = useParams();
  const resMenuInfo=useFetchMenu(resId);
  
  if(resMenuInfo===null)
  return<Shimmer></Shimmer>


  const { name, cuisines, costForTwoMessage }=resMenuInfo.data.cards[0].card.card.info;
  console.log("Menu info",resMenuInfo)
  console.log(...cuisines)
  

  const categories =
    resMenuInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (e) =>
        e?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", Array.isArray(categories), categories);
 
  return (
    <div>
      <div className="font-bold my-4 p-2 text-center">
        <h2 className="m-4">{name}</h2>
        <span>{...cuisines.join(",")}</span>
        <span> - {costForTwoMessage}</span>
      </div>
      <ul>
        {categories.length == 0 ? (
          <Shimmer></Shimmer>
        ) : (
          categories.map((ele,index) => (
            <AccordianMenu key={index} menuList={ele?.card?.card}></AccordianMenu>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestuarantMenuCard;
