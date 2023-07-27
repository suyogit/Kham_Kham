import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

//import Logo from "../assets/image/logoimage.png";


const Title = () =>
(
    <a href="/">
        <img className="logo" src="https://wpengine-myanmore.s3.amazonaws.com/uploads/sabai/File/files/l_0061ba35cbab10619bc12c6148509cd1.jpg" alt="logo" />
    </a>
);

const Header = () => {

    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);
    //   const [loginout, setLoginout] = useState("Logout");
    const navigate = useNavigate();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                    <li>
                        {/* use conditional rendering for login and logout */}
                        {isLoggedin ? (
                            <button
                                className="logout-btn"
                                onClick={() =>

                                    setIsLoggedin(false)
                                }
                            >
                                Logout
                            </button>
                        ) : (
                                <button className="login-btn" onClick={() =>

                                    navigate("/login")
                                }>

                                    Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
