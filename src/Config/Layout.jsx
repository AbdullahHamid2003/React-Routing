import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout