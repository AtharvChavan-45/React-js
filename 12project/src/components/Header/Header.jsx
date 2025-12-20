import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'// used to read data from redux store
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.Status) // chack status in authSlice is true or false
  // stores the navigation function to redirect users using javascript
  const navigate = useNavigate()

//An array that controls which menu items appear
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,// login is shown when the user is not logged in
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
                <Link to='/'>
                <Logo width='70px'/>
                </Link>
            </div>
            <ul className='flex ml-auto'>
                {navItems.map((item)=> //loops through each navigation item
                // item.active ? (...) : null it means show item only if active is true
                item.active ? (
                  <li key={item.name}>
                    <button 
                    onClick={()=>navigate(item.slug)} // navigat to given slug address
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >
                      {/*print item name in header */}
                      {item.name} 
                    </button>
                  </li>
                ) : null
                )}
                {authStatus && ( // show logout button only if user is logged in
                  <li>
                    <LogoutBtn/>
                    </li>
                )}
            </ul>
          </nav>
        </Container>
    </header>
  )
}

export default Header
