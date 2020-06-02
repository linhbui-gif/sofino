import React from "react"
import "./skill.scss"
import ProgressBar from "../progressbar/progressbar";
const TeamSkill = props => {
  return (
    <div className="wow team-skill" animation-name="progress">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h6 className="team-skill__title">
              Team Expert
              <div className="title-effect">
                <div className="bar bar-top"></div>
                <div className="bar bar-right"></div>
                <div className="bar bar-bottom"></div>
                <div className="bar bar-left"></div>
              </div>
            </h6>
            <h2 className="team-skill__heading">Skill And Service</h2>

            <div className="team-skill__progress-bar">
              <h4>Business</h4>
                <ProgressBar bgcolor={"#FF512F"} completed={"65"} />
            </div>
            <div className="team-skill__progress-bar">
              <h4>Consulting</h4>
                <ProgressBar bgcolor={"#FF512F"} completed="75" />
            </div>
            <div className="team-skill__progress-bar">
              <h4>Marketing</h4>
                <ProgressBar bgcolor={"#FF512F"} completed="85" />
            </div>
            <div className="team-skill__progress-bar">
              <h4>Developing</h4>
                <ProgressBar bgcolor={"#FF512F"} completed="95" />
            </div>


          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="feature__block text-center">
                  <img
                    className="feature__icon"
                    src="http://themeht.com/softino/html/multipage/ltr/images/feature/06.png" alt="test"
                  />
                  <h5 className="feature__heading">Design</h5>
                  <p className="feature__description">
                    Top quality Software services, labore et dolore magna ali
                    qua Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="feature__block text-center mt-3">
                  <img
                    className="feature__icon"
                    src="http://themeht.com/softino/html/multipage/ltr/images/feature/07.png" alt="test"
                  />
                  <h5 className="feature__heading">Drag And Drop</h5>
                  <p className="feature__description">
                    Top quality Software services, labore et dolore magna ali
                    qua Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="feature__block text-center">
                  <img
                    className="feature__icon"
                    src="http://themeht.com/softino/html/multipage/ltr/images/feature/08.png" alt="test"
                  />
                  <h5 className="feature__heading">High Resolution</h5>
                  <p className="feature__description">
                    Top quality Software services, labore et dolore magna ali
                    qua Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="feature__block text-center mt-3">
                  <img
                    className="feature__icon"
                    src="http://themeht.com/softino/html/multipage/ltr/images/feature/04.png" alt="test"
                  />
                  <h5 className="feature__heading">App Integration</h5>
                  <p className="feature__description">
                    Top quality Software services, labore et dolore magna ali
                    qua Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSkill
