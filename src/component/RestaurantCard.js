import { IMG_CDN_URL } from '../../constant.js'
import UserContext from '../utils/userContext.js';
import { useContext } from 'react';


//ols api working code
// const RestaurantCard = ({
//     cloudinaryImageId,
//     name,
//     cuisines,
//     area,
//     lastMileTravelString,
//     costForTwoString,
//     avgRating,
// }) => {
//     return (
//         <div className="card">
//             <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
//             <h3>{name} </h3>
//             <h5>{cuisines.join(", ")}</h5>
//             <h5>{area}</h5>
//             <span>
//                 <h4
//                     style={
//                         avgRating < 4
//                             ? { backgroundColor: "var(--light-red)" }
//                             : avgRating === "--"
//                                 ? { backgroundColor: "white", color: "black" }
//                                 : { color: "white" }
//                     }
//                 >
//                     <i className="fa-solid fa-star"></i>
//                     {avgRating}
//                 </h4>
//                 <h4>•</h4>
//                 <h4>{lastMileTravelString}</h4>
//                 <h4>•</h4>
//                 <h4>{costForTwoString}</h4>
//             </span>
//         </div>
//     );
// };

// export default RestaurantCard;


// new api working code
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    type,
    costForTwo,
    avgRating,
    id,

}) => {

    const {user}= useContext(UserContext);

    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
            <h3>{name} </h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}</h5>
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
                <h4>{id}</h4>
                <h4>•</h4>
                <h4>{costForTwo}</h4>
                <h4>{type}</h4>
                {/* <h4 className="font-bold">{user.name}</h4> */}


            </span>
        </div>
    );
};

export default RestaurantCard;