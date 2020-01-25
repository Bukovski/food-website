import React from 'react';
import PropTypes from 'prop-types';


function MenuItem({ text, active, index, handleClick, handleMouseOver }) {
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


MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired
};


export default React.memo(MenuItem);
