

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_url } from "../../constant";
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper";

import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const { user, setUser } = useContext(UserContext);

  // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const data = await fetch(swiggy_api_url);
            const json = await data.json();
           // updated state variable restaurants with Swiggy API data


            //incase of old api
            // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            // console.log(json?.data?.cards[2]?.data?.data?.cards)


            //incase of new api


            setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log(error);
        }
    }

    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, allRestaurants) => {
        if (searchText !== "") {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
            setErrorMessage("");
            if (data.length === 0) {
                setErrorMessage("No matches restaurant found");
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(allRestaurants);
    }
    };


    const offline = useOnline();
    if (!offline) {
        return <div className="offline">You are offline</div>
    }





    // if allRestaurants is empty don't render restaurants cards
    if (!allRestaurants) return null;

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    // update the state variable searchText when we typing in input box
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        // user click on button searchData function is called
                        searchData(searchText, allRestaurants);
                    }}
                >
                    Search
                </button>

                {/* <input
                    type="text"


                    value={user.name}
                    // update the state variable searchText when we typing in input box
                    onChange={(e) => setUser(
                        {
                            name: e.target.value,
                            email: user.email

                        }
                    )}


                ></input>
                <button


                >
                    Search
                </button> */}


            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}

            {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                    <div className="restaurant-list">
                        {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
                        {filteredRestaurants.map((restaurant) => {
                            return (

                                // incase of old api
                                // <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
                                //     <RestaurantCard  {...restaurant.data} />
                                // </Link>

                                // incase of new api

                                <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                                    <RestaurantCard  {...restaurant.info} />
                                </Link> 



                             //   <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                            );
                        })}
                    </div>
            )}
        </>
    );
};

export default Body;