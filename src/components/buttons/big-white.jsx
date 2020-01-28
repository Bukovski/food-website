import React from "react";
import { Link } from "react-scroll";


function BigWhite({ to, children }) {
  return (
    <Link
      className="big-white__button"
      activeClass="big-white__button--active"
      to={ to }
      spy={ true }
      smooth={ true }
      duration={ 800 }
      offset={ 0 }
    >
       <span className="big-white__button-text">
         { children }
       </span>
    </Link>
  )
}


export default BigWhite;