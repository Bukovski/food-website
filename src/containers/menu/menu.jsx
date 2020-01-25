import React, { useState } from "react";
import { MenuList } from "../../components/menu";


export default function Menu() {
      const [ titles ] = useState([ "Appetisers", "Starters", "Salads", "Main Dishes" ]);
      const [ menus ] = useState([
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
      ]);
    
  return (
    <section className="menu">
      <div className="container">
        <div className="menu__wrap">
  
          <MenuList titles={ titles } menus={ menus }/>
          
        </div>
      </div>
    </section>
  )
}
