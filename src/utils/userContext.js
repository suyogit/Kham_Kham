import { createContext } from "react";
const UserContext = createContext({
    user: {
        name: "Suyog Acharya",
        email: "asuyog042@gmail.com",
    },
});

UserContext.displayName = "UserContext";

export default UserContext;