import React from "react"
import Slider from "react-slick"
import './team.scss'
const Team = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
  }
  return (
    <div className="team-expert">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto text-center">
            <h6 className="team-expert__title">
              Creative Team
              <div className="title-effect">
                <div className="bar bar-top"></div>
                <div className="bar bar-right"></div>
                <div className="bar bar-bottom"></div>
                <div className="bar bar-left"></div>
              </div>
            </h6>
            <h2 className="team-expert__heading">
              Meet Our Expert Team Member Will Ready For Your Service
            </h2>
          </div>
        </div>
        <Slider {...settings}>
          <div className="team-expert__block text-center">
            <div className="team-expert__img">
              <img
                className="img-fluid"
                src="http://themeht.com/softino/html/multipage/ltr/images/team/01.jpg" alt="test"
              />
              <a className="team-expert__link" href="google.com">
                <i className="la la-external-link"></i>
              </a>
              <ul className="team-expert__social-icon">
                <li className="social-facebook">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-twitter">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-gplus">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="social-linkedin">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="team-expert__description">
                <span>Manager</span>
                <h5>Jemy Lusto</h5>
              </div>
            </div>
          </div>
          <div className="team-expert__block text-center">
            <div className="team-expert__img">
              <img
                className="img-fluid"
                src="http://themeht.com/softino/html/multipage/ltr/images/team/02.jpg" alt="test"
              />
              <a className="team-expert__link" href="google.com">
                <i className="la la-external-link"></i>
              </a>
              <ul className="team-expert__social-icon">
                <li className="social-facebook">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-twitter">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-gplus">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="social-linkedin">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="team-expert__description">
                <span>Manager</span>
                <h5>Jemy Lusto</h5>
              </div>
            </div>
          </div>
          <div className="team-expert__block text-center">
            <div className="team-expert__img">
              <img
                className="img-fluid"
                src="http://themeht.com/softino/html/multipage/ltr/images/team/03.jpg" alt="test"
              />
              <a className="team-expert__link" href="google.com">
                <i className="la la-external-link"></i>
              </a>
              <ul className="team-expert__social-icon">
                <li className="social-facebook">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-twitter">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-gplus">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="social-linkedin">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="team-expert__description">
                <span>Manager</span>
                <h5>Jemy Lusto</h5>
              </div>
            </div>
          </div>
          <div className="team-expert__block text-center">
            <div className="team-expert__img">
              <img
                className="img-fluid"
                src="http://themeht.com/softino/html/multipage/ltr/images/team/04.jpg" alt="test"
              />
              <a className="team-expert__link" href="google.com">
                <i className="la la-external-link"></i>
              </a>
              <ul className="team-expert__social-icon">
                <li className="social-facebook">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-twitter">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-gplus">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="social-linkedin">
                  <a className="social-icon__link" href="google.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="team-expert__description">
                <span>Manager</span>
                <h5>Jemy Lusto</h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Team
