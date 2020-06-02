import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import './styles/responsive.scss'
import './styles/setting.scss'
import './styles/grid.scss'
import './styles/slick-slider.scss'
import './styles/themify-icons.css'
import AddLink from "./addLink"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <AddLink/>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}