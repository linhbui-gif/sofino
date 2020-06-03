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
            <a href="#" className="item__link" >
              Home
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="#">Home 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 3</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 4</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 5</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 6</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Page
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">
                  Team Single
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Faq</a>
              </li>
              <li className="drop-down">
                <a className="item__link--level-1" href="#">Element</a>
                <ul className="drop-down-menu">
                  <li>
                    <a className="item__link--level-2" href="#">Accordion</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Blog Post</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Counter</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Featured Box</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Pricing Table</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Team</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Coming Soon</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Error 404</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              About us
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1"  href="#">About Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">About Us 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Services
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="#">Services 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Services 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Blogs
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="#">Blog Grid 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Left Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Right Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Contact us
            </a>
            <ul className="drop-down-menu">
              <li>
                <a className="item__link--level-1" href="#">Contact 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Contact 2</a>
              </li>
            </ul>
          </li>
        </ul>
        <a className="btn btn-sm" href="#">Login</a>
      </div>
      <div className="container mobile">
        <div className="navbar__logo">
          <img
            className="logo__img"
            src="http://themeht.com/softino/html/multipage/ltr/images/logo-customizer/logo-color-3.png" alt="test"
          />
          <div className="logo-brand">
            <a id="btn-hamburger" className="hamburger" href="#" onClick={toggleDrawer}>
              <i className="fas fa-bars"></i>
            </a>
            <a className="btn btn-sm" href="#">Login</a>
          </div>
        </div>
        <ul id="nav-mobile" className={`nav__menu ${open && "collapse"}`}>
          <li className="nav__item drop-down">
            <a href="#" className="item__link" onClick={toggleDrawerSub}>
              Home
            </a>
            <ul className={`drop-down-menu-mobile ${openSub && "collapse"}`}>
              <li>
                <a className="item__link--level-1" href="#">Home 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 3</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 4</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 5</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Home 6</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Page
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">
                  Team Single
                </a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Faq</a>
              </li>
              <li className="drop-down">
                <a className="item__link--level-1" href="#">Element</a>
                <ul className="drop-down-menu-mobile">
                  <li>
                    <a className="item__link--level-2" href="#">Accordion</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Blog Post</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Counter</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Featured Box</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Pricing Table</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Team</a>
                  </li>
                  <li>
                    <a className="item__link--level-2" href="#">Testimonials</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Coming Soon</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Error 404</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              About us
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="#">About Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">About Us 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Services
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="#">Services 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Services 2</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Blogs
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="#">Blog Grid 2</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Left Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Right Sidebar</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="nav__item drop-down">
            <a href="#" className="item__link">
              Contact us
            </a>
            <ul className="drop-down-menu-mobile">
              <li>
                <a className="item__link--level-1" href="#">Contact Us 1</a>
              </li>
              <li>
                <a className="item__link--level-1" href="#">Contact Us 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
