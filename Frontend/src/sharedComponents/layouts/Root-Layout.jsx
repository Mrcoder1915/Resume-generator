import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../parsial/Header/Header'


const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default RootLayout
