import React, { Component } from 'react';
import { DividerBrown } from "../../components/static";


class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      titles: [ "Appetisers", "Starters", "Salads", "Main Dishes" ],
      menus: [
        [
          { id: 1, title: "Tzatsiki", cost: 3.99, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 2, title: "Aubergine Salad", cost: 5.50, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 3, title: "Aubergine Salad", cost: 5.25, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false }
        ],
        [
          { id: 3, title: "Haloumi", cost: 3.99, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 4, title: "Spinach Pie", cost: 5.50, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false }
        ],
        [
          { id: 5, title: "Olive Special", cost: 5.99, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 6, title: "Greek Salad", cost: 5.50, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: true },
          { id: 7, title: "Gusto Salad", cost: 5.25, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false }
        ],
        [
          { id: 7, title: "Cornish Mackerel", cost: 5.99, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 8, title: "Roast Lamb", cost: 5.25, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: true },
          { id: 9, title: "Fried Chicken", cost: 5.25, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false },
          { id: 10, title: "Pastitsio", cost: 5.99, description: "Refreshing traditional cucumber and garlic yoghurt dip.", special: false }
        ],
      ]
    }
  }
  
  _createList = () => {
    const { titles, menus } = this.state;
    
    return titles.map((name, index) => {
      const menu = menus[ index ];
      
      return <div key={ name } className="menu__order">
        <h3 className="menu__title">{ name }</h3>
        <DividerBrown/>
    
        <ul className="menu__list">
          { menu.map(({ id, title, cost, description, special }) => (
            <li key={ id } className="menu__item">
              <div className={ "food " + ((special) ? "food--special" : "") }>
                <div className="food__head">
                  <h4 className="food__name">{ title }</h4>
                  <span className="food__const">$
                        <span className="food__money">{ cost }</span>
                      </span>
                </div>
                <p className="food__text">{ description }</p>
              </div>
            </li> )
          )}
        </ul>
      </div>
    });
  };
  
  render() {
    // const { notes } = this.props;
    // const { title } = this.state;
    
    return(
      <React.Fragment>
        { this._createList() }
      </React.Fragment>
    );
  }
}


export default MenuList;
