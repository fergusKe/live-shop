import React from "react"
import Meta from "../Meta/Meta"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
