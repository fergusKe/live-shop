import React from "react"
import Meta from "@components/Meta/Meta"
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"

import '../../styles/style.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
      <Footer />

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/jquery-ui.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/aos.js"></script>

      <script src="js/main.js"></script>
    </div>
  )
}

export default Layout
