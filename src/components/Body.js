import { RestaurantCard } from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./Restaurant";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchList, setSearchList] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurant=withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("resLis", resList);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.606965&lng=77.072877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restArray =
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

    setResList(restArray);
    setfilteredRestaurant(restArray);
    console.log("resArray", restArray);
    // console.log(restArray.map((ele) => ele.info.name));
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline, Please check your internnet connection
      </h1>
    );
  }

  if (resList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="">
      <div className="flex mx-80 my-4">
        <div className="search-container">
          <input
            className="search-input shadow-lg py-1.5 border border-solid  border-black rounded-lg p-1"
            type="text"
            value={searchList}
            placeholder =" Find your restaurant"
            onChange={(e) => {
              setSearchList(e.target.value);
            }}
          ></input>
          <button
            className= "search-botton bg-slate-100 m-4 px-4 py-2 w-24 rounded-lg hover:bg-slate-200  shadow-lg"
            onClick={() => {
              setfilteredRestaurant(
                resList.filter((ele) =>
                  ele.info.name.toLowerCase().includes(searchList.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="top-rated-restaurant bg-slate-100 m-4 px-4 py-2  rounded-lg hover:bg-slate-200 shadow-lg"
            onClick={() => {
              setfilteredRestaurant(
                resList.filter((ele) => ele.info.avgRating >= 4.4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="w-3/4 m-auto flex flex-wrap">
        {filteredRestaurant.map((ele) => (
          <Link to={"/restaurant/" + ele.info.id} key={ele.info.id}>
            {ele.info.avgRating > 4.2 ? (
              <PromotedRestaurant resData={ele.info}></PromotedRestaurant>
            ) : (
              <RestaurantCard resData={ele.info}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
