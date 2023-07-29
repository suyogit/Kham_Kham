// Footer component for footer section

import UserContext from "../utils/userContext";
import { useContext } from "react";

const Footer = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="footer">
            Created By
            <i className="fa-solid fa-heart"></i>
            <a href="https://www.linkedin.com/in/suyog-acharya-82552b1b2/" target="_blank" title="Suyog_linkedin_profile" className="p-2">
                {user.name}
            </a>
            <i className="fa-solid fa-copyright"></i>2023
            <strong>
                KHAM<span>KHAM</span>
            </strong>
        </div>
    );
};

export default Footer;
