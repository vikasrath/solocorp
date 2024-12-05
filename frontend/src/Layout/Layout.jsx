import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Herosection from '../Components/Hero Section/Herosection'

function Layout() {
  return (
    <>
      <Herosection />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout