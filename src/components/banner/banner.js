import React from "react"
import "./banner.scss"
export default function Banner({firstkey,lastkey,nameCate,...props}) {
  return (
    <div className="team-banner">
      <div className="container">
        <div className="team-banner__content">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <h1 className="team-banner__heading">
                <span className="text-theme">{firstkey}</span>{lastkey}
              </h1>
              <p className="team-banner__description">
                We're Building Modern And High Software
              </p>
            </div>
            <div className="col-lg-5 col-md-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="breadcrumb__link" href="google.com">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="breadcrumb__link" href="google.com">
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a className="breadcrumb__link" href="google.com">
                  {nameCate}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-animation">

        </div>
        <div className="bg-banner">
          <img
            className="img-fluid"
            src="http://themeht.com/softino/html/multipage/ltr/images/bg/11.png" alt="test"
          />
        </div>
      </div>
    </div>
  )
}