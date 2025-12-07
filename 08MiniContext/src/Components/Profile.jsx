import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    // access user information from context api 
     const {user}=useContext(UserContext)
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
