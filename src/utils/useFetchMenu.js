import { MENU_API_URL } from "./constants";
import { useEffect, useState } from "react";

export const useFetchMenu = (resId) => {
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menuList = await fetch(MENU_API_URL + resId);
    const jsonMenu = await menuList.json();

       setMenuList(jsonMenu); 
    //   to get the name of restuarant
    //   console.log(jsonMenu?.data?.cards[0]?.card?.card?.info?.name);
    // const resMenuList =
    //   jsonMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // setMenuList(resMenuList);
    // console.log("dsaaaaaaaaa",)
  };
  return menuList;
};

//  data.cards[0].card.card.info.name;

//  const resMenuList =
//    jsonMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//      ?.card?.itemCards;
