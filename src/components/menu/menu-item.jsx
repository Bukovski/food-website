import React from 'react';


function MenuItem({ text, active, index, handleClick, handleMouseOver }) {
  console.log("--> MenuItem")
  
  return <li
    className={ `main-menu__item ${
      active ? "main-menu__item--active" : ""
    }` }
    onClick={ handleClick(index) }
    onMouseOver={ handleMouseOver }
  >
    <a href="#" className="main-menu__link">{ text }</a>
  </li>
}


export default React.memo(MenuItem);
