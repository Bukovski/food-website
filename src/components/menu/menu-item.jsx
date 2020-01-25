import React from "react";
import PropTypes from 'prop-types';


function MenuItem({ title, cost, description, special }) {
  return (
    <li className="menu__item">
      <div className={ "food " + ((special) ? "food--special" : "") }>
        <div className="food__head">
          <h4 className="food__name">{ title }</h4>
          <span className="food__const">$
            <span className="food__money">{ cost.toFixed(2) }</span>
          </span>
        </div>
        <p className="food__text">{ description }</p>
      </div>
    </li>
  )
}


MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  special: PropTypes.bool.isRequired
};


export default MenuItem;