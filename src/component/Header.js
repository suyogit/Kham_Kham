import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

//import Logo from "../assets/image/logoimage.png";


const Title = () =>
(
    <a href="/">
        <img className="logo" src="https://wpengine-myanmore.s3.amazonaws.com/uploads/sabai/File/files/l_0061ba35cbab10619bc12c6148509cd1.jpg" alt="logo" />
    </a>
);
// Header component for header section: Logo, Nav Items
const Header = () => {
    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);
    const navigate = useNavigate();
    const isonline = useOnline();
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);



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
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping">-{cartItems.length}</i>
                    </li>




                    <h1>
                        {isonline ? "🟢" : "⛔"}
                    </h1>
                    <span className="p-3 font-bold text-black-900">{user.name}</span>
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
                            <button className="login-btn" onClick={() => navigate("/login")}>
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;