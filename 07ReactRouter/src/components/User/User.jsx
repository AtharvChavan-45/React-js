import React from 'react'
import { useParams } from 'react-router-dom'
// useParams lets a component access the dynamic segments
//(route parameters) from the current URL e.g userid
function User() {
    const {userid} = useParams()
    //Calls the useParams() hook. it return an object whose keys
    // are the parameter names defined in your route path

    //useParams() always return strings
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid ?? 'unknown'}</div>
  )
}

export default User