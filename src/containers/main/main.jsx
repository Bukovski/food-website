import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from "../../resources/images/label.png"

class Main extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
  
  render() {
    // const { notes } = this.props;
    // const { title } = this.state;
    
    return(
      <React.Fragment>
        {/* SVG Sprite */}
        <svg width="0" height="0" display="none">
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="facebook">
            <path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z"></path>
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="twitter">
            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.627 511.627" id="youtube-logo">
            <path d="M459.954 264.376c-2.471-11.233-7.949-20.653-16.416-28.264-8.474-7.611-18.227-12.085-29.27-13.418-35.02-3.806-87.837-5.708-158.457-5.708-70.618 0-123.341 1.903-158.174 5.708-11.227 1.333-21.029 5.807-29.407 13.418-8.376 7.614-13.896 17.035-16.562 28.264-4.948 22.083-7.423 55.391-7.423 99.931 0 45.299 2.475 78.61 7.423 99.93 2.478 11.225 7.951 20.653 16.421 28.261 8.47 7.614 18.225 11.991 29.263 13.134 35.026 3.997 87.847 5.996 158.461 5.996 70.609 0 123.44-1.999 158.453-5.996 11.043-1.143 20.748-5.52 29.126-13.134 8.377-7.607 13.897-17.036 16.56-28.261 4.948-22.083 7.426-55.391 7.426-99.93-.001-45.3-2.479-78.612-7.424-99.931zm-294.929 28.842h-30.549v162.45h-28.549v-162.45h-29.98v-26.837h89.079v26.837zm77.085 162.45H216.7v-15.421c-10.278 11.615-19.989 17.419-29.125 17.419-8.754 0-14.275-3.524-16.556-10.564-1.521-4.568-2.286-11.519-2.286-20.844V314.627h25.41v103.924c0 6.088.096 9.421.288 9.993.571 3.997 2.568 5.995 5.996 5.995 5.138 0 10.566-3.997 16.274-11.991V314.627h25.41v141.041zm97.073-42.257c0 13.894-.855 23.417-2.56 28.558-3.244 10.462-9.996 15.697-20.273 15.697-9.137 0-17.986-5.235-26.556-15.697v13.702h-25.406v-189.29h25.406v61.955c8.189-10.273 17.036-15.413 26.556-15.413 10.277 0 17.029 5.331 20.273 15.988 1.704 4.948 2.56 14.369 2.56 28.264v56.236zm96.502-23.408h-51.104v24.839c0 13.134 4.374 19.697 13.131 19.697 6.279 0 10.089-3.422 11.42-10.28.376-1.902.571-7.706.571-17.412h25.981v3.71c0 9.329-.195 14.846-.572 16.563-.567 5.133-2.56 10.273-5.995 15.413-6.852 10.089-17.139 15.133-30.841 15.133-13.127 0-23.407-4.855-30.833-14.558-5.517-7.043-8.275-18.083-8.275-33.12v-49.396c0-15.036 2.662-26.076 7.987-33.119 7.427-9.705 17.61-14.558 30.557-14.558 12.755 0 22.85 4.853 30.263 14.558 5.146 7.043 7.71 18.083 7.71 33.119v29.411z"></path>
            <path d="M302.634 336.043c-4.38 0-8.658 2.101-12.847 6.283v85.934c4.188 4.186 8.467 6.279 12.847 6.279 7.419 0 11.14-6.372 11.14-19.13v-60.236c-.001-12.755-3.713-19.13-11.14-19.13zm94.794 0c-8.565 0-12.847 6.475-12.847 19.41v13.134h25.693v-13.134c0-12.942-4.284-19.41-12.846-19.41zM148.473 113.917v77.375h28.549v-77.375L211.563 0h-29.121l-19.41 75.089L142.759 0h-30.262c5.33 15.99 11.516 33.785 18.559 53.391 8.947 26.265 14.749 46.444 17.417 60.526zm101.347 79.374c13.134 0 23.219-4.854 30.262-14.561 5.332-7.043 7.994-18.274 7.994-33.689V95.075c0-15.225-2.669-26.363-7.994-33.406-7.043-9.707-17.128-14.561-30.262-14.561-12.756 0-22.75 4.854-29.98 14.561-5.327 7.043-7.992 18.181-7.992 33.406v49.965c0 15.225 2.662 26.457 7.992 33.689 7.233 9.708 17.223 14.562 29.98 14.562zM237.541 89.935c0-13.134 4.093-19.701 12.279-19.701s12.275 6.567 12.275 19.701v59.955c0 13.328-4.089 19.985-12.275 19.985s-12.279-6.661-12.279-19.985V89.935zm90.787 103.356c9.523 0 19.328-5.901 29.413-17.705v15.703h25.981V48.822h-25.981v108.777c-5.712 8.186-11.133 12.275-16.279 12.275-3.429 0-5.428-2.093-5.996-6.28-.191-.381-.287-3.715-.287-9.994V48.822h-25.981v112.492c0 9.705.767 16.84 2.286 21.411 2.477 7.043 8.09 10.566 16.844 10.566z"></path>
          </symbol>
        </svg>
        
        <header className="head">
          <div className="main-menu">
            <div className="container">
              <div className="main-menu__wrap">
                <a className="main-menu__logo-link" href="#">
                  <img className="main-menu__logo-img" src={ Logo } alt="lambda wordpress logo"/>
                </a>
                {/* main-menu__logo-img */}
                <nav className="main-menu__menu">
                  <ul className="main-menu__list">
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link">Home</a>
                    </li>
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link main-menu__link--active">About</a>
                    </li>
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link">Igredients</a>
                    </li>
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link">Menu</a>
                    </li>
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link">Reviews</a>
                    </li>
                    <li className="main-menu__item">
                      <a href="#" className="main-menu__link">Reservations</a>
                    </li>
                  </ul>
  
                  <a className="main-menu__button" href="#">
                    <svg className="main-menu__icon">
                      <use href="#twitter" />
                    </svg>
                  </a>
                  <a className="main-menu__button" href="#">
                    <svg className="main-menu__icon">
                      <use href="#youtube-logo" />
                    </svg>
                  </a>
                  <a className="main-menu__button" href="#">
                    <svg className="main-menu__icon">
                      <use href="#facebook" />
                    </svg>
                  </a>
                </nav>
              </div>
              {/*  main-menu__menu */}
            </div>
          </div>
          {/*  main-menu */}
          <div className="present">
            <div className="container">
              <div className="present__wrap">
                <h1 className="present__title">the right ingredients for the right food</h1>
                <span className="present__divider" />
                {/* present__divider */}
                <div className="present__button-wrap">
                  <a className="present__button present__button--active">
                    <span className="present__button-text">
                      BOOK A TABLE
                    </span>
                  </a>
                  <a className="present__button">
                    <span className="present__button-text">
                      SEE THE MENU
                    </span>
                  </a>
                </div>
              {/* present__button-wrap */}
              </div>
            </div>
          </div>
        {/* present */}
        </header>
      </React.Fragment>
    );
  }
}

Main.defaultProps = {
  //notes: []
};

Main.propTypes = {
  //notes: PropTypes.array.isRequired,
};

export default Main;
