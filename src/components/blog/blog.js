import React from "react"
import "./blog.scss"
export default function Blog() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto text-center">
            <h6 className="blogs__title">
              Blog Post
              <div className="title-effect">
                <div className="bar bar-top"></div>
                <div className="bar bar-right"></div>
                <div className="bar bar-bottom"></div>
                <div className="bar bar-left"></div>
              </div>
            </h6>
            <h2 className="blogs__heading">Our Latest News</h2>
            <p className="blogs__description">
              Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderi
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="blog__block">
              <div className="blog__top">
                <img
                  className="img-fluid"
                  src="http://themeht.com/softino/html/multipage/ltr/images/blog/01.jpg" alt="test"
                />
                <div className="blog__category">Photo</div>
              </div>
              <div className="blog__content">
                <i className="la la-calendar mr-1"></i>
                <span>23 Jan, 2019</span>
                <i className="la la-user mr-1"></i>
                <span>By ThemeHt</span>
                <h4>Softino Performance Based Software</h4>
                <p>
                  Consequat dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blog__block">
              <div className="blog__top">
                <img
                  className="img-fluid"
                  src="http://themeht.com/softino/html/multipage/ltr/images/blog/02.jpg" alt=""
                />
                <div className="blog__category">Photo</div>
              </div>
              <div className="blog__content">
                <i className="la la-calendar mr-1"></i>
                <span>23 Jan, 2019</span>
                <i className="la la-user mr-1"></i>
                <span>By ThemeHt</span>
                <h4>Latest Software design in the features</h4>
                <p>
                  Consequat dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="blog__block">
              <div className="blog__top">
                <img
                  className="img-fluid"
                  src="http://themeht.com/softino/html/multipage/ltr/images/blog/03.jpg" alt="test"
                />
                <div className="blog__category">Photo</div>
              </div>
              <div className="blog__content">
                <i className="la la-calendar mr-1"></i>
                <span>23 Jan, 2019</span>
                <i className="la la-user mr-1"></i>
                <span>By ThemeHt</span>
                <h4>All Powerful Design feature In Softino</h4>
                <p>
                  Consequat dolor sit amet, consectetur adipiscing elit.
                  Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
