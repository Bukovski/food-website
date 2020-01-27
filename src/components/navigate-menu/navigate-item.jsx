import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";


function NavigateItem({ text, name, index, handleClick, handleMouseOver, handleGetName }) {
  return <li
    className="main-menu__item"
    onClickCapture={ handleClick(index) }
    onMouseOver={ handleMouseOver }
  >
    <Link
      className="main-menu__link"
      activeClass="main-menu__link--active"
      to={ name }
      spy={ true }
      smooth={ true }
      duration={ 800 }
      offset={ 10 }
      onSetActive={ handleGetName }
    >
      { text }
    </Link>
  </li>
}


NavigateItem.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired
};


// export default React.memo(NavigateItem);
export default React.memo(NavigateItem);
