import React, { Component } from 'react';
import MenuItem from "./menu-item";
import { bigFirstLetter } from "../../helpers";
import PropTypes from "prop-types";


class MenuList extends Component {
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
      activeLink: { id: 1, width: 0, left: 0 }
    };
    
    this._line = React.createRef();
  }
  
  componentDidMount() {
    // only when all page loaded I take style parameters
    window.addEventListener('load', this.handleLoadData)
  }
  
  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoadData);
  }
  
  
  handleLoadData = () => {
    const { offsetLeft, offsetWidth } = document.getElementsByClassName("main-menu__item--active")[ 0 ];
    const { id } = this.state.activeLink;
  
    this.setState({
      activeLink: {
        id,
        width: offsetWidth,
        left: offsetLeft
      }
    });
  };
  
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
  };
  
  handleMouseOver = (event) => {
    const { offsetLeft, offsetWidth } = event.target;
    
    this._lineStyle(offsetWidth, offsetLeft);
  };
  
  _lineStyle(width, left) {
    const { current } = this._line;
    
    current.style.width = width + 'px';
    current.style.left = left + 'px';
  };
  
  _menuList() {
    const { items, activeLink: { id } } = this.state;
  
    return items.map(({ name, active }, index) => {
      return <MenuItem
        key={ name }
        index={ index }
        active={ (id === index) }
        text={ bigFirstLetter(name) }
        handleClick={ this.handleClick }
        handleMouseOver={ this.handleMouseOver }
      />
    })
  }
  
  render() {
    const { left, width } = this.state.activeLink;
  
    return(
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
    );
  }
}


MenuList.propTypes = {
  // text: PropTypes.string.isRequired,
};


export default MenuList;
