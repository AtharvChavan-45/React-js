import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logouthandler = () => {
        authService.logout()
        .then(()=> { // run after logout successfully
            dispatch(logout()) //updates Redux state to mark the user as logged out.
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
    onClick={logouthandler}>Logout</button>
  )
}

export default LogoutBtn
// This LogoutBtn component logs the user out by calling the authentication service and then updates the Redux store to clear the user’s login state when the button is clicked.

