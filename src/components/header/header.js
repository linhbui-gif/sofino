import React from "react"
import "./header.scss"
import { useState } from "react";

export default function Header() {
  const [open,setOpen] = useState(false)
  const [openSub,setOpenSub] = useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const toggleDrawerSub = () => {
    setOpenSub(!openSub)
  }
  return (
    <nav className="navbar">
      <div className="container navbar__block">
        <div className="navbar__logo">
          <img
            className="logo__img"
            src="http://themeht.com/softino/html/multipage/ltr/images/logo-customizer/logo-color-3.png" alt="test"
          />
        </div>
        <ul className="nav__menu">
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link" >
              Home
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="google.com">Home 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 3</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 4</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 5</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 6</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Page
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="google.com">
                  Team
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">
                  Team Single
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Faq</a>
              </li>
              <li className="drop-down">
                <a className="item__link--level-1" href="google.com">Element</a>
                <ul className="drop-down-menu">
                  <li>
                    <a className="item__link--level-2" href="google.com">Accordion</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Blog Post</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Counter</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Featured Box</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Pricing Table</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Team</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Coming Soon</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Error 404</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              About us
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1"  href="google.com">About Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">About Us 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Services
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="google.com">Services 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Services 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Blogs
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="google.com">Blog Grid 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Left Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Right Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Contact us
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="google.com">Contact 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Contact 2</a>
              </li>
            </ul>
          </li>
        </ul>
        <a className="btn btn-sm" href="google.com">Login</a>
      </div>
      <div className="container mobile">
        <div className="navbar__logo">
          <img
            className="logo__img"
            src="http://themeht.com/softino/html/multipage/ltr/images/logo-customizer/logo-color-3.png" alt="test"
          />
          <div className="logo-brand">
            <a id="btn-hamburger" className="hamburger" href="google.com" onClick={toggleDrawer}>
              <i className="fas fa-bars"></i>
            </a>
            <a className="btn btn-sm" href="google.com">Login</a>
          </div>
        </div>
        <ul id="nav-mobile" className={`nav__menu ${open && "collapse"}`}>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link" onClick={toggleDrawerSub}>
              Home
            </a>
            <ul className={`drop-down-menu-mobile ${openSub && "collapse"}`}>
              <li>
                <a className="item__link--level-1" href="google.com">Home 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 3</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 4</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 5</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Home 6</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Page
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="google.com">
                  Team
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">
                  Team Single
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Faq</a>
              </li>
              <li className="drop-down">
                <a className="item__link--level-1" href="google.com">Element</a>
                <ul className="drop-down-menu-mobile">
                  <li>
                    <a className="item__link--level-2" href="google.com">Accordion</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Blog Post</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Counter</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Featured Box</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Pricing Table</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Team</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="google.com">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Coming Soon</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Error 404</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              About us
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="google.com">About Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">About Us 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Services
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="google.com">Services 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Services 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Blogs
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="google.com">Blog Grid 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Left Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Right Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="google.com" className="item__link">
              Contact us
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="google.com">Contact Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="google.com">Contact Us 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
