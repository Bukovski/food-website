import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from "./menu-list";
import Logo from "../../resources/images/label.png";


class MainMenu extends Component {
  render() {
    // const { notes } = this.props;
    
    return(
      <div className="main-menu">
        <div className="container">
          <div className="main-menu__wrap">
            <a className="main-menu__logo-link" href="#">
              <img className="main-menu__logo-img" src={ Logo } alt="lambda wordpress logo"/>
            </a>
            {/* main-menu__logo-img */}
            <nav className="main-menu__menu">
              <MenuList />
              
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
    );
  }
}

MainMenu.defaultProps = {
  //notes: []
};

MainMenu.propTypes = {
  //notes: PropTypes.array.isRequired,
};


export default MainMenu;
