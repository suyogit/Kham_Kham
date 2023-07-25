

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { swiggy_api_url } from "../../constant";
import Shimmer from "./Shimmer";


// function filterData(searchText, restaurants) {
//     const filterData = restaurants.filter((restaurant) =>
//         restaurant.data.name.includes(searchText)
//     );

//     return filterData;
// }


function filterData(searchText, restaurants) {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = restaurants.filter((item) =>
        item?.data?.name?.toLowerCase()?.includes(lowerCaseSearchText)
    );
    return filteredData;
}


const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getResurants();
    }, [searchText]);

    async function getResurants() {
        const data = await fetch(
            swiggy_api_url
        );
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    return (restaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, restaurants);
                        // update the state - restaurants
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;
