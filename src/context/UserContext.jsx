import { createContext, useEffect, useState } from "react";

export const User=createContext(null)

function userContext({children}){
    const [userData,setData]=useState(null)

    const value={
        userData,
        setData
    }

    return <User.Provider value={value}>{children}</User.Provider>
    
}

export default userContext