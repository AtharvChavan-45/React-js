import React from 'react'

const UserContext = React.createContext()
// createContext() is a function given by React.

// It creates a Context → a special object used to share data between components without passing props manually at every level.

//Think of it like making a storage box where data can be kept and accessed by many components.

export default UserContext;