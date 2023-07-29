import { createContext } from "react";
const UserContext = createContext({
    user: {
        name: "Suyog Acharya",
        email: "asuyog042@gmail.com",
    },
});



export default UserContext;