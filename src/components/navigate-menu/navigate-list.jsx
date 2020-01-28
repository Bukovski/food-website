import React, { Component } from 'react';
import NavigateItem from "./navigate-item";
import { bigFirstLetter } from "../../helpers";


class NavigateList extends Component {
  constructor() {
    super();
    
    this.state = {
      items: [ "home", "about", "igredients", "menu", "reviews", "reservations" ],
      linksCoord: [],
      activeLink: { id: 0, width: 0, left: 0 }
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
    const item = document.getElementsByClassName("main-menu__item");
    
    if (item.length) {
      let countList = 0;
      const listLength = item.length;
        
      const listCoordinates = [];
        
      while (countList < listLength) {
        const { offsetLeft, offsetWidth } = item[countList];
        
        listCoordinates.push({ width: offsetWidth, left: offsetLeft });
        
        countList++
      }
  
      const { activeLink: { id, width } } = this.state;
  
      // coordinates of menu not loaded. Update coordinates active link
      if (width !== 0) {
        const newData = listCoordinates[ id ];
        
        this.setState({
          linksCoord: listCoordinates,
          activeLink: { id: id, width: newData.width, left: newData.left }
        });
      } else {
        this.setState({
          linksCoord: listCoordinates
        });
      }
    }
  };
  
  handleClick = (index) => (event) => {
    event.preventDefault();
    
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
  
  
  handleGetName = (nameSection) => {
    const { items, linksCoord } = this.state;
    
    const currentIndex = items.indexOf(nameSection) || 0;

    // coordinates of menu loaded
    if (linksCoord.length) {
      const { width, left } = linksCoord[ currentIndex ];
  
      this.setState({
        activeLink: {
          id: currentIndex,
          width: width,
          left: left
        }
      })
    } else {
      this.setState({
        activeLink: {
          id: currentIndex,
          width: 1,
          left: 1
        }
      })
    }
  };
  
  _menuList() {
    const { items, activeLink: { id } } = this.state;
  
    return items.map((name, index) => {
      return <NavigateItem
        key={ name }
        index={ index }
        name={ name }
        active={ (id === index) }
        text={ bigFirstLetter(name) }
        handleClick={ this.handleClick }
        handleMouseOver={ this.handleMouseOver }
        handleGetName={ this.handleGetName }
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




export default NavigateList;
