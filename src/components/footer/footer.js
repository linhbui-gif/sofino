import React from "react"
import "./footer.scss"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              className="footer-logo img-fluid"
              src="http://themeht.com/softino/html/multipage/ltr/images/logo-customizer/logo-color-3.png" alt="test"
            />
            <p>
              Softino Software Landing Page Is fully responsible, Build whatever
              you like with the Softino, Softino is the creative, modern HTML5
              Template suitable for Your business.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-6">
                <ul className="footer__list">
                  <li>
                    <a href="google.com">About Us</a>
                  </li>
                  <li>
                    <a href="google.com">Service</a>
                  </li>
                  <li>
                    <a href="google.com">Team</a>
                  </li>
                  <li>
                    <a href="google.com">Team Single</a>
                  </li>
                  <li>
                    <a href="google.com">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="footer__list">
                  <li>
                    <a href="google.com">Blog</a>
                  </li>
                  <li>
                    <a href="google.com">Faq</a>
                  </li>
                  <li>
                    <a href="google.com">Error 404</a>
                  </li>
                  <li>
                    <a href="google.com">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="google.com">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <ul className="footer__list">
              <li>
                <p className="mb-0">
                  Address: <b>423B, Road Wordwide Country, USA</b>
                </p>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:themeht23@gmail.com">
                  <b className="text-theme">themeht23@gmail.com</b>
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="google.com">
                  <b className="text-theme">+91-234-567-8900</b>
                </a>
              </li>
              <li>
                Fax:{" "}
                <a href="google.com">
                  <b className="text-theme">+91-234-567-8900</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subscribe__block mt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="subscribe">
                <h4>Subscribe Our Newsletter</h4>
                <p>Get started for 1 Month free trial No Purchace required.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="subscribe-form">
                <form className="group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <input
                    className="btn btn-theme"
                    type="submit"
                    name="subscribe"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row">
            <div className="col-12 col-md-6">
              <span className="copyright__text">
                Copyright 2019 Softino Theme by ThemeHt | All Rights Reserved
              </span>
            </div>
            <div className="col-12 col-md-6">
              <ul className="footer-social">
                <li>
                  <a href="google.com">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <i className="fab fa-google-plus-g"></i> Google Plus
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
