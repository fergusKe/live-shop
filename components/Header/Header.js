import React from "react"
import Link from 'next/link'
import styles from "./Header.scss"

const Header = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form action="" className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <input type="text" className="form-control border-0" placeholder="Search" />
              </form>
            </div>

            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <Link href="/">
                  <a className="js-logo-clone">Shoppers</a>
                </Link>
              </div>
            </div>

            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul>
                  <li><a href="#"><span className="icon icon-person"></span></a></li>
                  <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                  <li>
                    <Link href="/cart">
                      <a className="site-cart">
                        <span className="icon icon-shopping_cart"></span>
                        <span className="count">2</span>
                      </a>
                    </Link>
                  </li> 
                  <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                </ul>
              </div> 
            </div>

          </div>
        </div>
      </div> 
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
