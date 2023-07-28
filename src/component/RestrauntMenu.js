import React from 'react'
import { useParams, useEfect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IMG_CDN_URL, swiggy_menu_api_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, ITEM_IMG_CDN_URL } from '../../constant';
import Shimmer from './Shimmer';
import { MenuShimmer } from './Shimmer';
import useRestaurant from '../utils/useRestaurant';



const RestrauntMenu = () => {

    const { resId } = useParams();
    const { restaurant, menuItems } = useRestaurant(resId);



    return (!restaurant) ? <MenuShimmer /> : (
        // <div class="menu">
        //     <div>
        //         <h1>Restraunt Id - {resId}</h1>
        //         <h2>{restaurant.name}</h2>
        //         <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="menulist" />
        //         <h3>{restaurant.area}</h3>
        //         <h3>{restaurant.city}</h3>
        //         <h3>{restaurant.avgRating} stars</h3>
        //         <h3>{restaurant.costForTwoMsg}</h3>
        //     </div>
        //     <div>
        //         <h1>Menu</h1>
        //         <ul>
        //             {Object.values(restaurant?.menu?.items).map((item) => (
        //                 <li key={item.id}>{item.name}</li>
        //             ))}
        //         </ul>
        //     </div>


        // </div>
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img
                    className="restaurant-img"
                    src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                />
                <div className="restaurant-summary-details">
                    <h2 className="restaurant-title">{restaurant?.name}</h2>
                    <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                    <div className="restaurant-details">
                        <div className="restaurant-rating" style={
                            (restaurant?.avgRating) < 4
                                ? { backgroundColor: "var(--light-red)" }
                                : (restaurant?.avgRating) === "--"
                                    ? { backgroundColor: "white", color: "black" }
                                    : { color: "white" }
                        }>
                            <i className="fa-solid fa-star"></i>
                            <span>{restaurant?.avgRating}</span>
                        </div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restaurant?.sla?.slaString}</div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restaurant?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>

            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <div className="menu-title-wrap">
                        <h3 className="menu-title">Recommended</h3>
                        <p className="menu-count">
                            {menuItems.length} ITEMS
                        </p>
                    </div>
                    <div className="menu-items-list">
                        {menuItems.map((item) => (
                            <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                    <h3 className="item-title">{item?.name}</h3>
                                    <p className="item-cost">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item?.price / 100)
                                            : " "}
                                    </p>
                                    <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                    {item?.imageId && (
                                        <img
                                            className="menu-item-img"
                                            src={ITEM_IMG_CDN_URL + item?.imageId}
                                            alt={item?.name}
                                        />
                                    )}
                                    <button className="add-btn"> ADD +</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default RestrauntMenu