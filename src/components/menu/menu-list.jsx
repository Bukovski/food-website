import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DividerBrown } from "../static";
import MenuItem from "./menu-item";


function MenuList({ titles, menus }) {
  const _createList = () => {
    return titles.map((name, index) => {
      const menu = menus[ index ];
      
      return <div key={ name } className="menu__order">
        <h3 className="menu__title">{ name }</h3>
        <DividerBrown/>
        
        <ul className="menu__list">
          { menu.map((menuItem) => <MenuItem key={ menuItem.id } { ...menuItem } /> ) }
        </ul>
      </div>
    });
  };
  
  return(
    <Fragment>
      { _createList() }
    </Fragment>
  );
}

MenuList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  menus: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        cost: PropTypes.number,
        description: PropTypes.string,
        special: PropTypes.bool
      })
    )
  ).isRequired
};


export default MenuList;
