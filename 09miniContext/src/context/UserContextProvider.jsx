import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children}) => {
    // this data should be available to all children
    const [user, setUser] = useState(null)

    return (
        // wrapper
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider