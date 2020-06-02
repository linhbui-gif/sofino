import React from 'react'
import './detail.scss'
const TeamDetail = (props) => {
    return(
        <div className="team-single-detail">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5">
                    <img className="img-fluid sing-img" src="http://themeht.com/softino/html/multipage/ltr/images/team/01.jpg" alt="test"/>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="single__content">
                        <h6 className="single__title">Manager</h6>
                        <h2 className="single__heading">Jemy Lusto</h2>
                        <p className="single__description text-lead">consectetur adipisicing eli. Vero quod conseqt quibusdam enim expedita sed quia nesciunt incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic obcaecati.</p>
                        <p className="single__description">consectetur adipisicing eli. Vero quod conseqt quibusdam enim expedita sed quia nesciunt incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic obcaecati.</p>
                        <ul className="single__icon">
                            <li><i className="ti-email"></i>
                                <a href="google.com">themeht23@gmail.com</a>
                            </li>
                            <li><i className="ti-mobile"></i>
                                <a href="google.com">+91-234-567-8900</a>
                            </li>
                        </ul>
                        <ul className="single__social-icon">
                            <li className="social-facebook"><a className="social-icon__link" href="google.com"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="social-twitter"><a className="social-icon__link" href="google.com"><i className="fab fa-twitter"></i></a></li>
                            <li className="social-gplus"><a className="social-icon__link" href="google.com"><i className="fab fa-google-plus-g"></i></a></li>
                            <li className="social-linkedin"><a className="social-icon__link" href="google.com"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TeamDetail