import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bigFirstLetter } from "../../helpers";
import Logo from "../../resources/images/label.png";


class MainMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      items: [
        { name: "home", active: true },
        { name: "about", active: false },
        { name: "igredients", active: false },
        { name: "menu", active: false },
        { name: "reviews", active: false },
        { name: "reservations", active: false }
      ],
      activeLink: { id: 2, width: 0, left: 0 },
      hover: ""
    };
    
    this._line = React.createRef();
  }
  
  componentDidMount() {
    window.addEventListener('load', () => {
      const { offsetLeft, offsetWidth } = document.getElementsByClassName("main-menu__item--active")[ 0 ];
      const { id } = this.state.activeLink;
      
      this.setState({
        activeLink: {
          id,
          width: offsetWidth,
          left: offsetLeft
        }
      });
      
    })
    
  }
  
  
  handleClick = (index) => (event) => {
    const { offsetLeft, offsetWidth } = event.target;
    
    this.setState({
      activeLink: {
        id: index,
        width: offsetWidth,
        left: offsetLeft
      }
    })
  };
  
  
  handleMouseOut = () => {
    const { activeLink: { width, left } } = this.state;
  
    this._lineStyle(width, left);
    
    this.setState({
      hover: ""
    })
  };
  
  handleMouseOver = (index) => (event) => {
    const { offsetLeft, offsetWidth } = event.target;
    
    this._lineStyle(offsetWidth, offsetLeft);
    
    this.setState({
      hover: index
    })
  };
  
  _lineStyle(width, left) {
    const { current } = this._line;
  
    current.style.width = width + 'px';
    current.style.left = left + 'px';
  };
  
  _menuList() {
    const { items, activeLink: { id } } = this.state;
    
    return items.map(({ name, active }, index) => {
      return <li
        key={ name }
        className={ `main-menu__item ${
          (id === index) ? "main-menu__item--active" : ""
        }` }
        onClick={ this.handleClick(index) }
        onMouseOver={ this.handleMouseOver(index) }
      >
        <a href="#" className="main-menu__link">{ bigFirstLetter(name) }</a>
      </li>
    })
  }
  
  
  render() {
    // const { notes } = this.props;
    const { left, width } = this.state.activeLink;
    
    return(
      <div className="main-menu">
        <div className="container">
          <div className="main-menu__wrap">
            <a className="main-menu__logo-link" href="#">
              <img className="main-menu__logo-img" src={ Logo } alt="lambda wordpress logo"/>
            </a>
            {/* main-menu__logo-img */}
            <nav className="main-menu__menu">
              <ul
                className="main-menu__list"
                onMouseOut={ this.handleMouseOut }
              >
                { this._menuList() }
                {/* line to top of menu */}
                <div
                  className="main-menu__line"
                  style={ width ? { left: `${ left }px`, width: `${ width }px` } : {}}
                  ref={ this._line }
                />
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
