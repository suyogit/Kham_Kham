import { Outlet } from "react-router-dom";
const About = () => {
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
            <Outlet />
        </div>
    );
};

export default About;