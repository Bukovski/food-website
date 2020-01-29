import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-scroll";


function ScrollWhiteButton({ to, children }) {
  return (
    <Link
      className="scroll-white__button"
      activeClass="scroll-white__button--active"
      to={ to }
      spy={ true }
      smooth={ true }
      duration={ 800 }
      offset={ 0 }
    >
       <span className="scroll-white__button-text">
         { children }
       </span>
    </Link>
  )
}


ScrollWhiteButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};


export default ScrollWhiteButton;