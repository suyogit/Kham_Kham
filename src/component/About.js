// //import { Outlet } from "react-router-dom";
// import Profile from "./Profile"
// import ProfileClass from "./ProfileClass";
// const About = () => {
//     return (
//         <div className="about-container">
//             <div className="about-left">
//                 <h1>
//                     Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
//                 </h1>
//                 <h4>
//                     "Better you will feel if you eat a Kham<span>Kham</span> healthy meal"
//                 </h4>
//         </div>
//             <div className="about-right">
//                 <img src="" alt="Food Image" />
//             </div>
//             {/* <Outlet /> */}
//             <Profile name={"suyog funcitonal"} />
//             <ProfileClass name={"suyyoog class"} />
//         </div>
//     );
// };

// export default About;


import ProfileClass from "./ProfileClass";

import React, { Component } from 'react'

export default class About extends Component {


    constructor(props) {
        super(props)
        console.log("constructor parent")
    }

    componentDidMount() {
        console.log("componentDidMount parent")
    }


    render() {

        console.log("render parent")


    return (
        <div className="about-container">
            <div className="about-left">
                <h1>
                    Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
                </h1>
                <h4>
                    "Better you will feel if you eat a Kham<span>Kham</span> healthy meal"
                </h4>
            </div>
            <div className="about-right">
                <img src="" alt="Food Image" />
            </div>
            {/* <Outlet /> */}

            <ProfileClass name={"suyyoog 1st class"} />

        </div>
        )
    }
}

