export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const shimmer_card_unit = 15;



export const swiggy_api_url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;


// Github - username
export const Github_UserName = "suyogit";
export const Github_Repository_Name = "kham_kham";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/suyog-acharya-82552b1b2/";
export const Twitter_Link = "https://twitter.com/suyogacharya15";
export const Github_Link = "https://github.com/suyogit";
export const Email_Link = "mailto:asuyog042@gmail.com";

// Github Authorization Token
export const options = {
    method: "GET",
    headers: {
        Authorization: "",
    },
};

// // 20230727060823
// // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

// {
//     "statusCode": 0,
//     "data": {
//       "cacheExpiryTime": 320,
//       "pages": 1,
//       "pageIndex": 0,
//       "scrubber": 0,
//       "filters": [
//         {
//           "type": "FilterWidget",
//           "title": "Cuisines",
//           "key": "CUISINES",
//           "configType": "checkbox",
//           "visible": 1,
//           "options": [
//             {
//               "option": "American",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Arabian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Asian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Bakery",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Bengali",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Beverages",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Bihari",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Biryani",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Burgers",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Cafe",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Chaat",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Chinese",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Coastal",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Combo",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Continental",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Desserts",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "European",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Fast Food",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Grill",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Healthy Food",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Home Food",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Ice Cream",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Ice Cream Cakes",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Indian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Italian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Italian-American",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Jain",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Japanese",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Juices",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Kebabs",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Kerala",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Lebanese",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Maharashtrian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Malaysian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Mexican",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Mughlai",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Nepalese",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "North Indian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Pan-Asian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Pastas",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Pizzas",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Punjabi",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Rajasthani",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Salads",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Seafood",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Snacks",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "South Indian",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Street Food",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Sweets",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Tandoor",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Thalis",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Tibetan",
//               "selected": 0,
//               "visible": 1
//             },
//             {
//               "option": "Waffle",
//               "selected": 0,
//               "visible": 1
//             }
//           ],
//           "detail": "",
//           "heading": "Cuisines",
//           "applicable": 1,
//           "searchable": 1
//         },
//         {
//           "type": "FilterWidget",
//           "title": "Show Restaurants With",
//           "key": "SHOW_RESTAURANTS_WITH",
//           "configType": "checkbox",
//           "visible": 1,
//           "options": [
//             {
//               "option": "Pure Veg",
//               "selected": 0,
//               "visible": 1
//             }
//           ],
//           "detail": "",
//           "heading": "Offers & More",
//           "applicable": 1,
//           "searchable": 0
//         }
//       ],
//       "sorts": [
//         {
//           "type": "SortWidget",
//           "key": "RELEVANCE",
//           "title": "Relevance",
//           "selected": 1,
//           "visible": 1,
//           "defaultSelection": true
//         },
//         {
//           "type": "SortWidget",
//           "key": "DELIVERY_TIME",
//           "title": "Delivery Time",
//           "selected": 0,
//           "visible": 1,
//           "defaultSelection": false
//         },
//         {
//           "type": "SortWidget",
//           "key": "RATING",
//           "title": "Rating",
//           "selected": 0,
//           "visible": 1,
//           "defaultSelection": false
//         },
//         {
//           "type": "SortWidget",
//           "key": "COST_FOR_TWO",
//           "title": "Cost: Low to High",
//           "selected": 0,
//           "visible": 1,
//           "defaultSelection": false
//         },
//         {
//           "type": "SortWidget",
//           "key": "COST_FOR_TWO_H2L",
//           "title": "Cost: High to Low",
//           "selected": 0,
//           "visible": 1,
//           "defaultSelection": false
//         }
//       ],
//       "configs": {
//         "ribbons": {
//           "PREORDER": {
//             "type": "PREORDER",
//             "text": "Preorder",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#d53d4c",
//             "bottomBackgroundColor": "#af2330",
//             "priority": 3
//           },
//           "EXCLUSIVE": {
//             "type": "EXCLUSIVE",
//             "text": "Exclusive",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#fa4a5b",
//             "bottomBackgroundColor": "#d12a3b",
//             "priority": 2
//           },
//           "NEW": {
//             "type": "NEW",
//             "text": "Newly Added",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#d53d4c",
//             "bottomBackgroundColor": "#af2330",
//             "priority": 4
//           },
//           "REPEAT": {
//             "type": "REPEAT",
//             "text": "Repeat",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#D53D4C",
//             "bottomBackgroundColor": "#B02331",
//             "priority": 6
//           },
//           "CLOUD": {
//             "type": "CLOUD",
//             "text": "Daily Menus",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#fa4a5b",
//             "bottomBackgroundColor": "#d12a3b",
//             "priority": 5
//           },
//           "PREMIUM": {
//             "type": "PREMIUM",
//             "text": "Premium",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#8a584b",
//             "bottomBackgroundColor": "#583229",
//             "priority": 7
//           },
//           "PROMOTED": {
//             "type": "PROMOTED",
//             "text": "Promoted",
//             "textColor": "#ffffff",
//             "imageId": "sfefefefeegeg",
//             "topBackgroundColor": "#3a3c41",
//             "bottomBackgroundColor": "#1e2023",
//             "priority": 1
//           }
//         },
//         "croutons": {
//           "RAIN": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "surge_listing_piuzrv",
//             "textColor": "#ffffff",
//             "title": "Bad Weather",
//             "message": "${amount} extra levied on some restaurants"
//           },
//           "RAIN_DEFAULT": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "surge_listing_piuzrv",
//             "textColor": "#ffffff",
//             "title": "Bad Weather",
//             "message": "Your orders may be delayed by 5-10 mins"
//           },
//           "SERVICEABLE_WITH_BANNER_RAIN": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "rain_crouton_4x",
//             "textColor": "#ffffff",
//             "title": "Bad Weather",
//             "message": "Few restaurants unserviceable due to rains"
//           },
//           "RAIN_LOW": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "surge_listing_piuzrv",
//             "textColor": "#ffffff",
//             "title": "Bad Weather",
//             "message": "Your orders may be delayed by 5-10 mins"
//           },
//           "RAIN_HIGH": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "surge_listing_piuzrv",
//             "textColor": "#ffffff",
//             "title": "Bad Weather",
//             "message": "Your orders may be delayed by 5-10 mins"
//           },
//           "SPECIAL": {
//             "type": "Crouton",
//             "bgColor": "#282C3F",
//             "icon": "surge_listing_piuzrv",
//             "textColor": "#ffffff",
//             "title": "High Demand",
//             "message": "Surge fee of Rs ${amount} may be applicable"
//           }
//         }
//       },
//       "cards": [
//         {
//           "cardType": "carousel",
//           "layoutAlignmentType": "VERTICAL",
//           "data": {
//             "type": "carousel",
//             "subtype": "topCarousel",
//             "data": {
//               "cards": [
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 635529,
//                     "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
//                     "type": "restaurantCollectionV2",
//                     "link": "49301",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 619141,
//                     "creativeId": "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
//                     "type": "restaurantCollectionV2",
//                     "link": "56413",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 619143,
//                     "creativeId": "rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt",
//                     "type": "restaurantCollectionV2",
//                     "link": "56422",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 619142,
//                     "creativeId": "rng/md/carousel/production/tgnvusbs3fnzz7xupeno",
//                     "type": "restaurantCollectionV2",
//                     "link": "56417",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 619145,
//                     "creativeId": "rng/md/carousel/production/nhubtkw7dukg3ukcmpam",
//                     "type": "restaurantCollectionV2",
//                     "link": "56414",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 607193,
//                     "creativeId": "rng/md/carousel/production/s5ug2key6e2sptaxku5v",
//                     "type": "restaurantCollectionV2",
//                     "link": "56410",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 607188,
//                     "creativeId": "rng/md/carousel/production/oxe97jexxbnxqtbhg2zo",
//                     "type": "restaurantCollectionV2",
//                     "link": "11740",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 607195,
//                     "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
//                     "type": "restaurantCollectionV2",
//                     "link": "56421",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "thirdPartyVendor": "",
//                     "thirdPartyAddress": false
//                   }
//                 }
//               ]
//             }
//           },
//           "parentWidget": false
//         },
//         {
//           "cardType": "carousel",
//           "layoutAlignmentType": "VERTICAL",
//           "data": {
//             "type": "carousel",
//             "subtype": "openFilter",
//             "data": {
//               "cards": [
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 181684,
//                     "creativeId": "bkhjfipzydkoqncrxpyi",
//                     "type": "restaurantCollectionV2",
//                     "link": "11718",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "title": "Offers Near You",
//                     "subtitle": "0 OPTIONS",
//                     "restaurants": [

//                     ],
//                     "totalCount": 0,
//                     "dwebOpenFilterTitle": "Offers Near You",
//                     "dwebOpenFilterBgColor": "#FF0000",
//                     "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
//                     "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
//                   }
//                 },
//                 {
//                   "type": "carouselElement",
//                   "subtype": "image",
//                   "data": {
//                     "bannerId": 181680,
//                     "creativeId": "a3jqjjod5taken7dh1bs",
//                     "type": "restaurantCollectionV2",
//                     "link": "11721",
//                     "cityId": 0,
//                     "restaurantUuid": "",
//                     "restaurantParentId": "0",
//                     "title": "Veg Only",
//                     "subtitle": "0 OPTIONS",
//                     "restaurants": [

//                     ],
//                     "totalCount": 0,
//                     "dwebOpenFilterTitle": "Vegetarian Options",
//                     "dwebOpenFilterBgColor": "#FF0000",
//                     "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
//                     "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
//                   }
//                 }
//               ]
//             }
//           },
//           "parentWidget": false
//         },
//         {
//           "cardType": "seeAllRestaurants",
//           "layoutAlignmentType": "VERTICAL",
//           "data": {
//             "type": "seeAllRestaurants",
//             "data": {
//               "title": "SEE ALL",
//               "totalOpenRestaurants": 330,
//               "cards": [
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "374455",
//                     "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//                     "uuid": "f1cf2c97-a0c6-41c0-b033-d5a6ee3497ae",
//                     "city": "1",
//                     "area": "BTM Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "ar820jxombs5o1g9i6py",
//                     "cuisines": [
//                       "Desserts",
//                       "Ice Cream",
//                       "Ice Cream Cakes"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 20,
//                     "minDeliveryTime": 20,
//                     "maxDeliveryTime": 20,
//                     "slaString": "20 MINS",
//                     "lastMileTravel": 3,
//                     "slugs": {
//                       "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-btm-btm-2",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "SRI CHATS SWEETS AND BAKERY: #107,1ST MAIN, 1ST CROSS ROAD, NARAYANAPPA GARDEN TAVARKERE BANGALORE, BTM LAYOUT B.B.M.P South, Karnataka-560029",
//                     "locality": "1st Stage",
//                     "parentId": 582,
//                     "unserviceable": false,
//                     "veg": true,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "ribbon": [
//                       {
//                         "type": "PROMOTED"
//                       }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "distance",
//                           "fee": 4100,
//                           "message": ""
//                         },
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4100,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4100",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=7545519~p=1~eid=00000189-94ba-7acf-0878-f03f00430113~srvts=1690417396431",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "3 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "20% OFF",
//                       "subHeader": "UPTO ₹50",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "374455",
//                       "deliveryTime": 20,
//                       "minDeliveryTime": 20,
//                       "maxDeliveryTime": 20,
//                       "lastMileTravel": 3,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "4.7",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "203015",
//                     "name": "Shapana dhaba",
//                     "uuid": "3e69b27f-104b-400d-b238-494ebf8e4688",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "dlx42acjc2yqzajz714i",
//                     "cuisines": [
//                       "Chinese",
//                       "North Indian",
//                       "Biryani"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 15000,
//                     "costForTwoString": "₹150 FOR TWO",
//                     "deliveryTime": 46,
//                     "minDeliveryTime": 46,
//                     "maxDeliveryTime": 46,
//                     "slaString": "46 MINS",
//                     "lastMileTravel": 4,
//                     "slugs": {
//                       "restaurant": "shapana-dhaba-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "H.NO 267, 26 main, 7th cross road 26th main EWS Layout",
//                     "locality": "EWS Layout",
//                     "parentId": 181928,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "distance",
//                           "fee": 4900,
//                           "message": ""
//                         },
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4900,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4900",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": "Closes soon"
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "4 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "60% OFF",
//                       "subHeader": "",
//                       "discountTag": "FLAT DEAL",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "203015",
//                       "deliveryTime": 46,
//                       "minDeliveryTime": 46,
//                       "maxDeliveryTime": 46,
//                       "lastMileTravel": 4,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.3",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "35186",
//                     "name": "Savoury Restaurant",
//                     "uuid": "05703a6a-9771-4341-bffd-e8755673454f",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "10000+ ratings",
//                     "cloudinaryImageId": "917f828567b485833c8bc6a1ed3cb2ad",
//                     "cuisines": [
//                       "Arabian",
//                       "Indian",
//                       "Chinese",
//                       "Tandoor",
//                       "Biryani",
//                       "Seafood",
//                       "Kerala"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 45000,
//                     "costForTwoString": "₹450 FOR TWO",
//                     "deliveryTime": 22,
//                     "minDeliveryTime": 22,
//                     "maxDeliveryTime": 22,
//                     "slaString": "22 MINS",
//                     "lastMileTravel": 2.0999999046325684,
//                     "slugs": {
//                       "restaurant": "savoury-restaurant-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "86, Hosur Rd, Zuzuvadi, Madiwala, 1st Stage, BTM Layout 1, Bengaluru, Karnataka 560034",
//                     "locality": "1st Stage",
//                     "parentId": 179209,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 3300,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 3300,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "3300",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "2 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "20% OFF",
//                       "subHeader": "UPTO ₹50",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "35186",
//                       "deliveryTime": 22,
//                       "minDeliveryTime": 22,
//                       "maxDeliveryTime": 22,
//                       "lastMileTravel": 2.0999999046325684,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.0",
//                     "totalRatings": 10000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "305684",
//                     "name": "Sri Sapana Dhaba",
//                     "uuid": "f0f606fb-c973-42e2-8e4d-cd2489d3244c",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "e67mqzpslp7ajxzdylpb",
//                     "cuisines": [
//                       "Indian",
//                       "Chinese"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 40000,
//                     "costForTwoString": "₹400 FOR TWO",
//                     "deliveryTime": 50,
//                     "minDeliveryTime": 50,
//                     "maxDeliveryTime": 50,
//                     "slaString": "50 MINS",
//                     "lastMileTravel": 4,
//                     "slugs": {
//                       "restaurant": "sri-sapana-dhaba-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "H.NO 267, 7th cross road 26th main EWS Layout",
//                     "locality": "2nd Stage",
//                     "parentId": 194561,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 4900,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4900,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4900",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": "Closes soon"
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "4 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "60% OFF",
//                       "subHeader": "",
//                       "discountTag": "FLAT DEAL",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "305684",
//                       "deliveryTime": 50,
//                       "minDeliveryTime": 50,
//                       "maxDeliveryTime": 50,
//                       "lastMileTravel": 4,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.3",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "495055",
//                     "name": "Afghani Tandoori Hub",
//                     "uuid": "654a2f81-f8b8-47c8-a81b-c1a2de0c792e",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "s2guefjyf6zplthuzkzg",
//                     "cuisines": [
//                       "Biryani",
//                       "Chinese",
//                       "North Indian",
//                       "Snacks"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 24,
//                     "minDeliveryTime": 24,
//                     "maxDeliveryTime": 24,
//                     "slaString": "24 MINS",
//                     "lastMileTravel": 2.799999952316284,
//                     "slugs": {
//                       "restaurant": "afghani-tandoori-hub-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "39, 1 St 'C' Cross, Opp Swaraj Hyper Market, Chocolate Factory Road, Tavarekere BTM Bangalore",
//                     "locality": "Chocolate Factory Road",
//                     "parentId": 293550,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 3300,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 3300,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "3300",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "2.7 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "50% OFF",
//                       "subHeader": "UPTO ₹100",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "495055",
//                       "deliveryTime": 24,
//                       "minDeliveryTime": 24,
//                       "maxDeliveryTime": 24,
//                       "lastMileTravel": 2.799999952316284,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.2",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "132622",
//                     "name": "Marwadi Chaat & Tiffin Services Shanti nagar",
//                     "uuid": "8797a981-9a80-4f22-835e-8ccfdc8e6def",
//                     "city": "1",
//                     "area": "Shanthi Nagar",
//                     "totalRatingsString": "5000+ ratings",
//                     "cloudinaryImageId": "e8f48a82caf1cdc428448f64dba7b61e",
//                     "cuisines": [
//                       "Rajasthani",
//                       "North Indian",
//                       "Snacks",
//                       "Chaat"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 44,
//                     "minDeliveryTime": 44,
//                     "maxDeliveryTime": 44,
//                     "slaString": "44 MINS",
//                     "lastMileTravel": 5,
//                     "slugs": {
//                       "restaurant": "marwadi-chaat-tiffin-services-shantinagar-shantinagar",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "No :9 5 th Cross Lakshmi road shantinagar Bangalore-560027",
//                     "locality": "Lakshmi road",
//                     "parentId": 20091,
//                     "unserviceable": false,
//                     "veg": true,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "distance",
//                           "fee": 6600,
//                           "message": ""
//                         },
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 6600,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "6600",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "5 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "50% OFF",
//                       "subHeader": "UPTO ₹100",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "132622",
//                       "deliveryTime": 44,
//                       "minDeliveryTime": 44,
//                       "maxDeliveryTime": 44,
//                       "lastMileTravel": 5,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.7",
//                     "totalRatings": 5000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "115730",
//                     "name": "Biryani Khazana",
//                     "uuid": "f8df4335-db92-4786-a0bb-5747e034ccc8",
//                     "city": "1",
//                     "area": "Indiranagar",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "oupd4meraf2luhhkwvt1",
//                     "cuisines": [
//                       "Biryani"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 46,
//                     "minDeliveryTime": 46,
//                     "maxDeliveryTime": 46,
//                     "slaString": "46 MINS",
//                     "lastMileTravel": 6.699999809265137,
//                     "slugs": {
//                       "restaurant": "biryani-khazana-bengaluru-karnataka-indiranagar",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "# 7,2nd main 9th Cross, 1st Stage, Indiranagar, Bangalore - 560038.",
//                     "locality": "1st Stage",
//                     "parentId": 20036,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 7600,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 7600,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "7600",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "6.6 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "30% OFF",
//                       "subHeader": "UPTO ₹75",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "115730",
//                       "deliveryTime": 46,
//                       "minDeliveryTime": 46,
//                       "maxDeliveryTime": 46,
//                       "lastMileTravel": 6.699999809265137,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.8",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "362852",
//                     "name": "Craving O Clock",
//                     "uuid": "27cfbbd1-4427-4a6e-b303-6c90a568a0ed",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "fead0e8d60d85a0804b1134889c3c482",
//                     "cuisines": [
//                       "Snacks",
//                       "Beverages",
//                       "Continental",
//                       "Healthy Food",
//                       "American",
//                       "North Indian",
//                       "Indian",
//                       "Mexican",
//                       "Tandoor",
//                       "Punjabi",
//                       "Salads"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 40,
//                     "minDeliveryTime": 40,
//                     "maxDeliveryTime": 40,
//                     "slaString": "40 MINS",
//                     "lastMileTravel": 4.199999809265137,
//                     "slugs": {
//                       "restaurant": "craving-o-clock-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "Building no. 294, 4th Floor, 7th main , 7th cross, mico Employees Layout, btm layout , stage 2, bangalore 560076",
//                     "locality": "2nd Stage",
//                     "parentId": 65598,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 4900,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4900,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4900",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "4.1 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "40% OFF",
//                       "subHeader": "UPTO ₹80",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "362852",
//                       "deliveryTime": 40,
//                       "minDeliveryTime": 40,
//                       "maxDeliveryTime": 40,
//                       "lastMileTravel": 4.199999809265137,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.3",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "224868",
//                     "name": "Ambur Dum Biriyani",
//                     "uuid": "0c67a4ea-26f0-4739-bd01-19551b10b4f9",
//                     "city": "1",
//                     "area": "Indiranagar",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "goevzinldbotvpn3xid1",
//                     "cuisines": [
//                       "Indian",
//                       "Mughlai"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 42,
//                     "minDeliveryTime": 42,
//                     "maxDeliveryTime": 42,
//                     "slaString": "42 MINS",
//                     "lastMileTravel": 6.699999809265137,
//                     "slugs": {
//                       "restaurant": "ambur-dum-biriyani-indiranagar-indiranagar",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "7 first floor,Above Golden cizzorz saloon, Next booze barrel bar , opposite food town,2nd main 9th cross Binnamangala layout 1st stage Indiranagar Bangalore-560038",
//                     "locality": "Binnamangala",
//                     "parentId": 31395,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 7600,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 7600,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "7600",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 1,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "6.6 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "30% OFF",
//                       "subHeader": "UPTO ₹75",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "224868",
//                       "deliveryTime": 42,
//                       "minDeliveryTime": 42,
//                       "maxDeliveryTime": 42,
//                       "lastMileTravel": 6.699999809265137,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "IT_IS_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.8",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "564815",
//                     "name": "Madeena Aroma Biryani",
//                     "uuid": "118db8d4-ac86-4c9f-b448-05dd44b103c3",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "pd3jd9b2qidmhaibxhvl",
//                     "cuisines": [
//                       "Biryani",
//                       "North Indian",
//                       "Kebabs"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 39900,
//                     "costForTwoString": "₹399 FOR TWO",
//                     "deliveryTime": 27,
//                     "minDeliveryTime": 27,
//                     "maxDeliveryTime": 27,
//                     "slaString": "27 MINS",
//                     "lastMileTravel": 4.699999809265137,
//                     "slugs": {
//                       "restaurant": "madeena-aroma-biryani-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "old number 81, new number 97,17th E Cross Rd, Mahadeshwara Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560076, India",
//                     "locality": "2nd Stage",
//                     "parentId": 339740,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 4900,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4900,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4900",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "4.6 kms",
//                     "hasSurge": false,
//                     "sla": {
//                       "restaurantId": "564815",
//                       "deliveryTime": 27,
//                       "minDeliveryTime": 27,
//                       "maxDeliveryTime": 27,
//                       "lastMileTravel": 4.699999809265137,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.6",
//                     "totalRatings": 100,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "494751",
//                     "name": "Rollsking",
//                     "uuid": "83ac9b54-6158-4568-9611-3380f6d94fa7",
//                     "city": "1",
//                     "area": "Sarjapur Road",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "ye4ke3cyek7vmb2q71ep",
//                     "cuisines": [
//                       "North Indian",
//                       "Fast Food",
//                       "Beverages"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 40,
//                     "minDeliveryTime": 40,
//                     "maxDeliveryTime": 40,
//                     "slaString": "40 MINS",
//                     "lastMileTravel": 8.399999618530273,
//                     "slugs": {
//                       "restaurant": "rolls-king-bellandur-sarjapur-bellandur-sarjapur",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "NO.53/2, SL NO.319, DODDAKANNELLI VILLAGE,   VARTHUR HOBLI, BANGALORE., Mahadevapura ,   B.B.M.P East, Karnataka-560035",
//                     "locality": "Daddakanahalli",
//                     "parentId": 4697,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 10100,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 10100,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "10100",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "8.3 kms",
//                     "hasSurge": false,
//                     "sla": {
//                       "restaurantId": "494751",
//                       "deliveryTime": 40,
//                       "minDeliveryTime": 40,
//                       "maxDeliveryTime": 40,
//                       "lastMileTravel": 8.399999618530273,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.2",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "454000",
//                     "name": "Biryani Hotel",
//                     "uuid": "ec690909-b5c1-4cf9-abfe-9a60cc849015",
//                     "city": "1",
//                     "area": "Koramangala",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "fl1nptfbc7qc32jvxsmt",
//                     "cuisines": [
//                       "Biryani",
//                       "Indian",
//                       "Arabian"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 15000,
//                     "costForTwoString": "₹150 FOR TWO",
//                     "deliveryTime": 26,
//                     "minDeliveryTime": 26,
//                     "maxDeliveryTime": 26,
//                     "slaString": "26 MINS",
//                     "lastMileTravel": 2,
//                     "slugs": {
//                       "restaurant": "biryani-hotel-koramangala-koramangala-2",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "2, Ground Floor, 71-72, Elite Building, Jyoti Nivas College Road, Koramangala 5th Block, Bangalore - 560095",
//                     "locality": "5th Block",
//                     "parentId": 264919,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 3300,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 3300,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "3300",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "2 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "40% OFF",
//                       "subHeader": "UPTO ₹80",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "454000",
//                       "deliveryTime": 26,
//                       "minDeliveryTime": 26,
//                       "maxDeliveryTime": 26,
//                       "lastMileTravel": 2,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.3",
//                     "totalRatings": 100,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "176212",
//                     "name": "Temperature",
//                     "uuid": "470b671f-f9d8-4ef1-a71d-9cb275c82826",
//                     "city": "1",
//                     "area": "BTM Layout",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "pumkvlptxkneyfdtisf5",
//                     "cuisines": [
//                       "Desserts",
//                       "Chaat",
//                       "Juices",
//                       "Beverages",
//                       "Snacks"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 20000,
//                     "costForTwoString": "₹200 FOR TWO",
//                     "deliveryTime": 29,
//                     "minDeliveryTime": 29,
//                     "maxDeliveryTime": 29,
//                     "slaString": "29 MINS",
//                     "lastMileTravel": 3.9000000953674316,
//                     "slugs": {
//                       "restaurant": "temperature-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "NO 7, 16TH MAIN ROAD, OPPOSITE TO IAS  PARK, BTM 2ND STAGE, BANGALORE,  KARNATAKA, INDIA, B.B.M.P South,  Karnataka 560076",
//                     "locality": "2nd Stage",
//                     "parentId": 203067,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 4100,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4100,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4100",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "3.9 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "40% OFF",
//                       "subHeader": "UPTO ₹80",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "176212",
//                       "deliveryTime": 29,
//                       "minDeliveryTime": 29,
//                       "maxDeliveryTime": 29,
//                       "lastMileTravel": 3.9000000953674316,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.0",
//                     "totalRatings": 1000,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "519477",
//                     "name": "Ghar Wali Khana",
//                     "uuid": "11a5ff93-b609-49e6-99c4-809f54a57b2b",
//                     "city": "1",
//                     "area": "BTM Layout",
//                     "totalRatingsString": "500+ ratings",
//                     "cloudinaryImageId": "egu6jh5wkbhlrg5fga7g",
//                     "cuisines": [
//                       "North Indian",
//                       "Chinese",
//                       "Snacks"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 43,
//                     "minDeliveryTime": 43,
//                     "maxDeliveryTime": 43,
//                     "slaString": "43 MINS",
//                     "lastMileTravel": 4.099999904632568,
//                     "slugs": {
//                       "restaurant": "ghar-ka-khana-btm-btm-2",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "NO, 397, 16TH MAIN, 7TH CROSS, BTM LAYOUT, 2ND STAGE, BANGALORE, BTM Layout , B.B.M.P South, Karnataka - 560076",
//                     "locality": "2nd Stage",
//                     "parentId": 374396,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 4900,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 4900,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "4900",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "4 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "50% OFF",
//                       "subHeader": "UPTO ₹100",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "519477",
//                       "deliveryTime": 43,
//                       "minDeliveryTime": 43,
//                       "maxDeliveryTime": 43,
//                       "lastMileTravel": 4.099999904632568,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.9",
//                     "totalRatings": 500,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 },
//                 {
//                   "type": "restaurant",
//                   "data": {
//                     "type": "F",
//                     "id": "496423",
//                     "name": "Dum Biryani Hub",
//                     "uuid": "c288878b-f9d0-4a4f-959a-c19bb039d91e",
//                     "city": "1",
//                     "area": "Btm Layout",
//                     "totalRatingsString": "500+ ratings",
//                     "cloudinaryImageId": "dzfnv4xnrfnchnmnffyd",
//                     "cuisines": [
//                       "Biryani",
//                       "North Indian",
//                       "Chinese",
//                       "Desserts",
//                       "Beverages"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 45000,
//                     "costForTwoString": "₹450 FOR TWO",
//                     "deliveryTime": 22,
//                     "minDeliveryTime": 22,
//                     "maxDeliveryTime": 22,
//                     "slaString": "22 MINS",
//                     "lastMileTravel": 2.799999952316284,
//                     "slugs": {
//                       "restaurant": "dum-biryani-hub-btm-btm",
//                       "city": "bangalore"
//                     },
//                     "cityState": "1",
//                     "address": "39, 1 St 'C' Cross, Opp Swaraj Hyper Market, Chocolate Factory Road, Tavarekere BTM Bangalore- 560068",
//                     "locality": "Tavarekere",
//                     "parentId": 297555,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                       "fees": [
//                         {
//                           "name": "time",
//                           "fee": 0,
//                           "message": ""
//                         },
//                         {
//                           "name": "distance",
//                           "fee": 3300,
//                           "message": ""
//                         },
//                         {
//                           "name": "special",
//                           "fee": 0,
//                           "message": ""
//                         }
//                       ],
//                       "totalFees": 3300,
//                       "message": "",
//                       "title": "Delivery Charge",
//                       "amount": "3300",
//                       "icon": ""
//                     },
//                     "availability": {
//                       "opened": true,
//                       "nextOpenMessage": "",
//                       "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                       "imageBased": [

//                       ],
//                       "textBased": [

//                       ],
//                       "textExtendedBadges": [

//                       ]
//                     },
//                     "lastMileTravelString": "2.7 kms",
//                     "hasSurge": false,
//                     "aggregatedDiscountInfoV3": {
//                       "header": "50% OFF",
//                       "subHeader": "UPTO ₹100",
//                       "discountTag": "",
//                       "headerTypeV2": 0
//                     },
//                     "sla": {
//                       "restaurantId": "496423",
//                       "deliveryTime": 22,
//                       "minDeliveryTime": 22,
//                       "maxDeliveryTime": 22,
//                       "lastMileTravel": 2.799999952316284,
//                       "lastMileDistance": 0,
//                       "serviceability": "SERVICEABLE",
//                       "rainMode": "NONE",
//                       "longDistance": "NOT_LONG_DISTANCE",
//                       "preferentialService": false,
//                       "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.4",
//                     "totalRatings": 500,
//                     "new": false
//                   },
//                   "subtype": "basic"
//                 }
//               ],
//               "totalRestaurants": 330
//             },
//             "subtype": "personalized"
//           },
//           "parentWidget": false
//         }
//       ],
//       "nextPageFetch": 0
//     },
//     "tid": "de014322-47c6-4e21-8d0c-ae4f9688f3fa",
//     "sid": "8ete3954-3626-4b8b-ad4c-e1df0d3efc95",
//     "deviceId": "2d3dfa3b-1a5b-e994-87aa-a7a069e391c8",
//     "csrfToken": "hVH9Rf4YXnPc-sWuvB0AK7nDrUFslP6drktA3Zlw",
// }
