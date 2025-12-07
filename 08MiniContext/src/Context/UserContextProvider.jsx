import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser]=React.useState(null)
 return(
    <UserContext.Provider value={{user,setUser}}> {/* here we pass one object that contain so many element  */}
    {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider;

 // children means — whatever components are written inside this provider will be shown here
 {/*
   <UserContextProvider>
   <App />   ← here App = children
   </UserContextProvider>
 
 - We wrap children inside UserContext.Provider
 - So any child component can now read user or update it using setUser.
 - No need to pass props manually!
   */
}