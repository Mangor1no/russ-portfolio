import React from 'react'
import Header from '../header'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="mx-auto w-full px-4 duration-500 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:max-w-7xl 2xl:px-6">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
