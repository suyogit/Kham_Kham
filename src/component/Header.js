import { useState } from "react";
import { Link } from "react-router-dom"
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

    return (
        <div className="header" >
            <Title />

            <div className="nav-items" >
                <ul>
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/about">
                        About us
                    </Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li>
                        {/* use conditional rendering for login and logout */}
                        {isLoggedin ? (
                            <button
                                className="logout-btn"
                                onClick={() => setIsLoggedin(false)}
                            >
                                Logout
                            </button>
                        ) : (
                            <button className="login-btn" onClick={() => setIsLoggedin(true)}>
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