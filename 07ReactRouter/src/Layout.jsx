import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>{/* only change contain between header and footer  */}
    <Footer/>
    {/*Header and footer fixed at same position */}
    </>
  )
}

export default Layout