import { IMG_CDN_URL } from '../../constant.js'

// const RestaurantCard = ({ name, cuisines, lastMileTravel, cloudinaryImageId }) => {
//     return (
//         <div className="card">
//             <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant" />
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" , ")}</h3>

//             <h4>{lastMileTravel} minutes</h4>
//         </div>
//     )
// }

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
            <h3>{name} </h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{area}</h5>
            <span>
                <h4
                    style={
                        avgRating < 4
                            ? { backgroundColor: "var(--light-red)" }
                            : avgRating === "--"
                                ? { backgroundColor: "white", color: "black" }
                                : { color: "white" }
                    }
                >
                    <i className="fa-solid fa-star"></i>
                    {avgRating}
                </h4>
                <h4>•</h4>
                <h4>{lastMileTravelString}</h4>
                <h4>•</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    );
};

export default RestaurantCard;